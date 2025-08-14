import axios from 'axios';

const GEMINI_API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent';

export default class GeminiDao {
  async callGeminiAPI(prompt) {
    const API_KEY = process.env.GEMINI_API_KEY;
    console.log(API_KEY);
    const response = await axios.post(
      GEMINI_API_URL,
      { contents: [{ parts: [{ text: prompt }] }] },
      {
        headers: {
          'Content-Type': 'application/json',
          'X-goog-api-key': API_KEY
        }
      }
    );

    const candidates = response.data.candidates;
    return candidates[0]?.content?.parts[0]?.text || 'No response from Gemini.';
  }
}