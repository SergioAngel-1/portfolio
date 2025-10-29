import { Router, Request, Response } from 'express';
import { mockTimeline } from '../models/mockData';
import { ApiResponse, TimelineEvent } from '../../../Portfolio/shared/types';

const router = Router();

// GET /api/timeline - Get timeline events
router.get('/', (req: Request, res: Response) => {
  const { type } = req.query;

  let filteredTimeline = [...mockTimeline];

  // Filter by type
  if (type && typeof type === 'string') {
    filteredTimeline = filteredTimeline.filter((t) => t.type === type);
  }

  // Sort by date (most recent first)
  filteredTimeline.sort((a, b) => {
    return new Date(b.startDate).getTime() - new Date(a.startDate).getTime();
  });

  const response: ApiResponse<TimelineEvent[]> = {
    success: true,
    data: filteredTimeline,
    timestamp: new Date().toISOString(),
  };

  res.json(response);
});

export default router;
