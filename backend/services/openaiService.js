const { OpenAI } = require('openai');

let openai = null;

// Initialize OpenAI client if the key exists
if (process.env.OPENAI_API_KEY) {
  openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });
}

/**
 * Translates academic text.
 * Falls back to mock if API key is not present.
 */
exports.translateText = async (text, targetLanguage) => {
  if (!openai) {
    console.warn('[OpenAI Service] No API Key found. Using mock translation.');
    await new Promise(resolve => setTimeout(resolve, 1500));
    return `[Mock Translation to ${targetLanguage}]: ${text}`;
  }

  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [
        { role: "system", content: `You are an expert academic translator. Translate the following text into ${targetLanguage}, preserving formulas, citations, and formal tone.` },
        { role: "user", content: text }
      ],
      temperature: 0.3,
    });
    return response.choices[0].message.content;
  } catch (error) {
    console.error('[OpenAI Service Error]', error);
    throw new Error('Translation failed');
  }
};

/**
 * Generates an embeddings vector for text chunks.
 */
exports.generateEmbedding = async (text) => {
  if (!openai) return Array(1536).fill(0.01); // Mock vector

  const response = await openai.embeddings.create({
    model: "text-embedding-ada-002",
    input: text,
  });
  return response.data[0].embedding;
};

/**
 * RAG Chat response given a context.
 */
exports.ragChat = async (prompt, contextDocs) => {
  if (!openai) {
    console.warn('[OpenAI Service] No API Key found. Using mock RAG response.');
    await new Promise(resolve => setTimeout(resolve, 1500));
    return `[Mock Copilot Response based on ${contextDocs.length} documents]: I found some interesting insights regarding your query: "${prompt}".`;
  }

  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [
        { role: "system", content: "You are a Research Copilot. Answer the user's prompt using ONLY the provided context. If the context does not contain the answer, say you don't know." },
        { role: "user", content: `Context:\n${contextDocs.join('\n\n')}\n\nPrompt: ${prompt}` }
      ],
      temperature: 0.2,
    });
    return response.choices[0].message.content;
  } catch (error) {
    console.error('[OpenAI Service Error]', error);
    throw new Error('RAG Chat failed');
  }
};
