import GeminiDao from "../dao/GeminiDao.js";
import { ValidationError } from "../errors/validation-error.js";

export default class GeminiController {
  async generateContent(req, res, next) {
    const { prompt } = req.body;
    // TODO: Validate prompt and handle request/response
    
    //e.g. Limit the prompt size to 1000 characters, otherwise throw validation error
    const dao = new GeminiDao();
    try {
      validatePrompt(prompt);
      const result = await dao.callGeminiAPI(prompt);
      res.status(200).json({ content: result });
    } catch (error) {
      //if (error instanceof ValidationError) {
        //return res.status(error.statusCode).json({ error: error.message });
      //}
      //res.status(500).json({ error: "Failed to fetch content from Gemini" });
      //TODO: Use a global error handler to handle the request
      console.error(`Error occurred while generating content: ${error.message}`);
      next(error);
    }
  }

  
}

function validatePrompt(prompt) {
    if (!prompt) throw new ValidationError("Prompt cannot be blank");
    if (prompt.length > 10)
      throw new ValidationError(
        "Prompt cannot be greater than 10 characters"
      );
  }