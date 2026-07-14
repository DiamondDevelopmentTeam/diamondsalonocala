import { existsSync } from 'node:fs';
import path from 'node:path';
import cors from 'cors';
import express from 'express';
import rateLimit from 'express-rate-limit';
import helmet from 'helmet';
import { config } from './config.js';
import { errorHandler } from './middleware/errorHandler.js';
import { requestId } from './middleware/requestId.js';
import { submissionsRouter } from './routes/submissions.js';

export function createApp() {
  const app = express();
  app.disable('x-powered-by');
  app.set('trust proxy', 1);

  app.use(requestId);
  app.use(helmet({
    crossOriginResourcePolicy: { policy: 'cross-origin' },
    contentSecurityPolicy: config.isProduction
      ? {
          directives: {
            defaultSrc: ["'self'"],
            scriptSrc: ["'self'"],
            styleSrc: ["'self'", "'unsafe-inline'"],
            imgSrc: ["'self'", 'data:', 'blob:'],
            connectSrc: ["'self'"],
            frameSrc: ["'self'", 'https://www.google.com'],
            objectSrc: ["'none'"],
          },
        }
      : false,
  }));
  app.use(cors({
    origin: config.isProduction ? config.clientOrigin.split(',').map((value) => value.trim()) : true,
    methods: ['GET', 'POST', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'X-Request-Id'],
  }));
  app.use(express.json({ limit: '150kb' }));

  app.get('/api/health', (_req, res) => {
    res.json({ ok: true, service: 'diamond-salon-ocala-api', time: new Date().toISOString() });
  });

  app.use('/api', rateLimit({
    windowMs: 15 * 60 * 1000,
    limit: 80,
    standardHeaders: 'draft-8',
    legacyHeaders: false,
  }));
  app.use('/api', submissionsRouter);

  if (existsSync(config.clientDist)) {
    app.use(express.static(config.clientDist, {
      maxAge: config.isProduction ? '7d' : 0,
      index: false,
    }));

    app.get(/^(?!\/api).*/, (_req, res) => {
      res.sendFile(path.join(config.clientDist, 'index.html'));
    });
  }

  app.use(errorHandler);
  return app;
}
