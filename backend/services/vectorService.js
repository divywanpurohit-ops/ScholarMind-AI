const { Pinecone } = require('@pinecone-database/pinecone');
const openaiService = require('./openaiService');

let pinecone = null;
let index = null;

if (process.env.PINECONE_API_KEY && process.env.PINECONE_ENVIRONMENT) {
  pinecone = new Pinecone({
    apiKey: process.env.PINECONE_API_KEY,
  });
  // Replace 'scholarmind' with your actual index name
  index = pinecone.index('scholarmind');
}

/**
 * Stores document chunks in Pinecone vector database.
 */
exports.upsertDocumentChunks = async (projectId, documentId, chunks) => {
  if (!pinecone) {
    console.warn('[Vector Service] No API Key found. Skipping Pinecone upsert.');
    return;
  }

  try {
    const vectors = await Promise.all(chunks.map(async (chunk, i) => {
      const embedding = await openaiService.generateEmbedding(chunk.text);
      return {
        id: `${documentId}-chunk-${i}`,
        values: embedding,
        metadata: {
          projectId,
          documentId,
          text: chunk.text,
          pageNumber: chunk.page
        }
      };
    }));

    await index.upsert(vectors);
  } catch (error) {
    console.error('[Vector Service Error]', error);
    throw new Error('Vector upsert failed');
  }
};

/**
 * Queries the vector database for relevant chunks based on a prompt.
 */
exports.queryRelevantChunks = async (projectId, prompt, topK = 5) => {
  if (!pinecone) {
    console.warn('[Vector Service] No API Key found. Returning mock context.');
    return ["Mock context sentence 1.", "Mock context sentence 2."];
  }

  try {
    const queryEmbedding = await openaiService.generateEmbedding(prompt);
    
    const queryResponse = await index.query({
      vector: queryEmbedding,
      topK: topK,
      includeMetadata: true,
      filter: { projectId: { $eq: projectId } } // Ensure we only query this project's docs
    });

    return queryResponse.matches.map(match => match.metadata.text);
  } catch (error) {
    console.error('[Vector Service Error]', error);
    throw new Error('Vector query failed');
  }
};
