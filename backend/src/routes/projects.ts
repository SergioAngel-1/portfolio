import { Router, Request, Response } from 'express';
import { mockProjects } from '../models/mockData';
import { ApiResponse, Project, PaginatedResponse } from '../../../Portfolio/shared/types';

const router = Router();

// GET /api/projects - Get all projects with filtering and pagination
router.get('/', (req: Request, res: Response) => {
  const { tech, category, featured, page = '1', limit = '10' } = req.query;

  let filteredProjects = [...mockProjects];

  // Filter by tech
  if (tech && typeof tech === 'string') {
    filteredProjects = filteredProjects.filter((p) =>
      p.tech.some((t) => t.toLowerCase().includes(tech.toLowerCase()))
    );
  }

  // Filter by category
  if (category && typeof category === 'string') {
    filteredProjects = filteredProjects.filter((p) => p.category === category);
  }

  // Filter by featured
  if (featured === 'true') {
    filteredProjects = filteredProjects.filter((p) => p.featured);
  }

  // Pagination
  const pageNum = parseInt(page as string, 10);
  const limitNum = parseInt(limit as string, 10);
  const startIndex = (pageNum - 1) * limitNum;
  const endIndex = startIndex + limitNum;
  const paginatedProjects = filteredProjects.slice(startIndex, endIndex);

  const response: ApiResponse<PaginatedResponse<Project>> = {
    success: true,
    data: {
      data: paginatedProjects,
      pagination: {
        page: pageNum,
        limit: limitNum,
        total: filteredProjects.length,
        totalPages: Math.ceil(filteredProjects.length / limitNum),
      },
    },
    timestamp: new Date().toISOString(),
  };

  res.json(response);
});

// GET /api/projects/:slug - Get single project by slug
router.get('/:slug', (req: Request, res: Response) => {
  const { slug } = req.params;
  const project = mockProjects.find((p) => p.slug === slug);

  if (!project) {
    return res.status(404).json({
      success: false,
      error: {
        message: 'Project not found',
        code: 'PROJECT_NOT_FOUND',
      },
      timestamp: new Date().toISOString(),
    });
  }

  const response: ApiResponse<Project> = {
    success: true,
    data: project,
    timestamp: new Date().toISOString(),
  };

  res.json(response);
});

export default router;
