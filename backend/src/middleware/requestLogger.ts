import { Request, Response, NextFunction } from 'express';
import { logger } from '../lib/logger';

export const requestLogger = (req: Request, res: Response, next: NextFunction) => {
  const start = Date.now();

  // Log request
  logger.info(`${req.method} ${req.url} - Started`);

  // Log response when finished
  res.on('finish', () => {
    const duration = Date.now() - start;
    const logLevel = res.statusCode >= 400 ? 'warn' : 'info';

    logger[logLevel](
      `${req.method} ${req.url} - ${res.statusCode} - ${duration}ms`
    );
  });

  next();
};
