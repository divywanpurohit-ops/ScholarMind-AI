const express = require('express');
const router = express.Router();
const auth = require('../middleware/authMiddleware');
const openaiService = require('../services/openaiService');

// Translation Endpoint
router.post('/translate', auth, async (req, res) => {
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
router.post('/summarize', auth, async (req, res) => {
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

module.exports = router;
