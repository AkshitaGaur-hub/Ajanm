import express from 'express';
import cors from 'cors';
import apiRouter from './api.js';

const app = express();

app.use(cors());
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));

app.use('/api', apiRouter);

export const apiMiddleware = app;

export function ajnamApiPlugin() {
  return {
    name: 'ajnam-api-plugin',
    configureServer(server) {
      // Connect express app to Vite internal connect server
      server.middlewares.use(app);
    }
  };
}
