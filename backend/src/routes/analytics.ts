import { Router, Request, Response } from 'express';
import { mockAnalytics } from '../models/mockData';
import { ApiResponse, AnalyticsSummary } from '../../../Portfolio/shared/types';

const router = Router();

// GET /api/analytics/summary - Get analytics summary
router.get('/summary', (_req: Request, res: Response) => {
  // Simulate real-time data by adding random variance
  const liveAnalytics: AnalyticsSummary = {
    ...mockAnalytics,
    totalVisits: mockAnalytics.totalVisits + Math.floor(Math.random() * 10),
    uniqueVisitors: mockAnalytics.uniqueVisitors + Math.floor(Math.random() * 5),
    recentActivity: [
      {
        action: 'Page view',
        timestamp: new Date().toISOString(),
      },
      ...mockAnalytics.recentActivity.slice(0, 4),
    ],
  };

  const response: ApiResponse<AnalyticsSummary> = {
    success: true,
    data: liveAnalytics,
    timestamp: new Date().toISOString(),
  };

  res.json(response);
});

export default router;
