import express from 'express';
import cors from 'cors';
import apiRouter from './api.js';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));

app.use('/api', apiRouter);

app.get('/health', (req, res) => {
  res.json({ status: 'ok', service: 'Ajnam Blog API', timestamp: new Date().toISOString() });
});

if (process.argv[1] && process.argv[1].endsWith('server.js')) {
  app.listen(PORT, () => {
    console.log(`Ajnam Backend Server running on http://localhost:${PORT}`);
  });
}

export default app;
