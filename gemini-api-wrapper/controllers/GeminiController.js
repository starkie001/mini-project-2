import GeminiDao from '../dao/GeminiDao.js';

export default class GeminiController {
  async generateContent(req, res) {
    const { prompt } = req.body;
	// TODO: Validate prompt and handle request/response
	// validatePrompt();  //e.g. Limit the prompt size to 1000 characters, otherwise throw validation error
    const dao = new GeminiDao();
    try {
      const result = await dao.callGeminiAPI(prompt);
      res.status(200).json({ content: result });
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch content from Gemini' });
	  //TODO: Use a global error handler to handle the request
    }
  }
}