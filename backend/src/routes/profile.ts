import { Router, Request, Response } from 'express';
import { mockProfile } from '../models/mockData';
import { ApiResponse, Profile } from '../../../Portfolio/shared/types';

const router = Router();

// GET /api/profile - Get profile information
router.get('/', (_req: Request, res: Response) => {
  const response: ApiResponse<Profile> = {
    success: true,
    data: mockProfile,
    timestamp: new Date().toISOString(),
  };
  res.json(response);
});

export default router;
