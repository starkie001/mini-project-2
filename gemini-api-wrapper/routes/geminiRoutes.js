import express from 'express';
import GeminiController from '../controllers/GeminiController.js';

const router = express.Router();
const controller = new GeminiController();

router.post('/', controller.generateContent);

export default router;