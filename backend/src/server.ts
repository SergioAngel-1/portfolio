import express, { Application, Request, Response, NextFunction } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import compression from 'compression';
import rateLimit from 'express-rate-limit';
import dotenv from 'dotenv';
import { logger } from './lib/logger';
import { requestLogger } from './middleware/requestLogger';
import { errorHandler, notFoundHandler } from './middleware/errorHandler';

// Routes
import profileRoutes from './routes/profile';
import projectsRoutes from './routes/projects';
import skillsRoutes from './routes/skills';
import contactRoutes from './routes/contact';
import timelineRoutes from './routes/timeline';
import analyticsRoutes from './routes/analytics';

dotenv.config();

console.log('Starting server initialization...');

const app: Application = express();
const PORT = process.env.PORT || 5000;

console.log(`Port configured: ${PORT}`);

// Middleware
console.log('Setting up middleware...');
app.use(helmet());
app.use(compression());
app.use(
  cors({
    origin: process.env.FRONTEND_URL || 'http://localhost:3000',
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rate limiting
const limiter = rateLimit({
  windowMs: parseInt(process.env.RATE_LIMIT_WINDOW_MS || '60000'), // 1 minute
  max: parseInt(process.env.RATE_LIMIT_MAX_REQUESTS || '1000'), // Aumentado para desarrollo
  message: 'Too many requests from this IP, please try again later.',
  standardHeaders: true,
  legacyHeaders: false,
  skip: (req) => {
    // Skip rate limiting en desarrollo
    return process.env.NODE_ENV === 'development';
  },
});

app.use('/api/', limiter);

// Request logging
app.use(requestLogger);

// Health check
app.get('/health', (_req: Request, res: Response) => {
  res.json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
  });
});

// API Routes - Portfolio
console.log('Setting up routes...');
app.use('/api/portfolio/profile', profileRoutes);
app.use('/api/portfolio/projects', projectsRoutes);
app.use('/api/portfolio/skills', skillsRoutes);
app.use('/api/portfolio/contact', contactRoutes);
app.use('/api/portfolio/timeline', timelineRoutes);
app.use('/api/portfolio/analytics', analyticsRoutes);
console.log('Routes configured successfully');

// 404 handler
app.use(notFoundHandler);

// Error handler
app.use(errorHandler);

// Start server
try {
  app.listen(PORT, () => {
    logger.info(`🚀 Backend server running on http://localhost:${PORT}`);
    logger.info(`📊 Health check: http://localhost:${PORT}/health`);
    logger.info(`🌐 Environment: ${process.env.NODE_ENV || 'development'}`);
  });
} catch (error) {
  logger.error('Failed to start server', error);
  console.error('Server startup error:', error);
  process.exit(1);
}

export default app;
