const express = require('express');
const router = express.Router();
const auth = require('../middleware/authMiddleware');
const openaiService = require('../services/openaiService');

// Translation Endpoint
router.post('/translate', async (req, res) => {
  try {
    const { text, targetLanguage } = req.body;
    
    // Calls actual OpenAI if key exists, otherwise runs mock delay
    const translatedText = await openaiService.translateText(text, targetLanguage);

    res.json({
      original: text,
      translatedText: translatedText,
      language: targetLanguage,
      status: 'success'
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// Mock Summarization Endpoint
router.post('/summarize', async (req, res) => {
  try {
    const { text } = req.body;
    await new Promise(resolve => setTimeout(resolve, 1500));
    res.json({
      summary: `This is a summary of the provided text. Original length: ${text.length} characters.`,
      status: 'success'
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});
// PPT Generation
router.post('/generate-ppt', async (req, res) => {
  try {
    const { topic, structure, style, tone } = req.body;
    const slides = await openaiService.generatePPT(topic, structure, style, tone);
    res.json({ slides, status: 'success' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// Video Script Generation
router.post('/generate-video', async (req, res) => {
  try {
    const { prompt, style, audio } = req.body;
    const videoData = await openaiService.generateVideoScript(prompt, style, audio);
    res.json({ videoData, status: 'success' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// Visualization Generation
router.post('/generate-visualization', async (req, res) => {
  try {
    const { prompt, type } = req.body;
    const visualizationData = await openaiService.generateVisualizationData(prompt, type);
    res.json({ visualizationData, status: 'success' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// Data Analysis
router.post('/analyze-data', async (req, res) => {
  try {
    const { dataContext } = req.body;
    const analysis = await openaiService.analyzeData(dataContext);
    res.json({ analysis, status: 'success' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// Thesis Generation
router.post('/generate-thesis', async (req, res) => {
  try {
    const { chapterTitle, projectContext } = req.body;
    const content = await openaiService.generateThesisChapter(chapterTitle, projectContext);
    res.json({ content, status: 'success' });
  } catch (err) {
    res.status(500).send('Server Error');
  }
});

// Academic Search
router.post('/search-papers', async (req, res) => {
  try {
    const { query } = req.body;
    const results = await openaiService.searchPapers(query);
    res.json({ results, status: 'success' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// Research Audit (Gaps/Contradictions)
router.post('/audit-research', async (req, res) => {
  try {
    const { topic } = req.body;
    const report = await openaiService.auditResearch(topic);
    res.json({ report, status: 'success' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// Humanize Text
router.post('/humanize', async (req, res) => {
  try {
    const { text } = req.body;
    const humanizedText = await openaiService.humanizeText(text);
    res.json({ humanizedText, status: 'success' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// Voice Generation
router.post('/voice', async (req, res) => {
  try {
    const { text } = req.body;
    const voiceData = await openaiService.generateVoice(text);
    res.json({ voiceData, status: 'success' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
