import { Request, Response, NextFunction } from 'express';
import { logger } from '../lib/logger';

// Middleware to ensure environment is properly configured
export const validateEnvironment = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    // This will throw if env validation fails
    require('../config/env');
    next();
  } catch (error) {
    logger.error('Environment validation failed', error);
    res.status(500).json({
      success: false,
      error: {
        message: 'Server configuration error',
        code: 'ENV_VALIDATION_FAILED',
      },
      timestamp: new Date().toISOString(),
    });
  }
};
