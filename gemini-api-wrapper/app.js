import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import geminiRoutes from './routes/geminiRoutes.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

app.use('/api/generate', geminiRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});