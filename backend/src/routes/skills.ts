import { Router, Request, Response } from 'express';
import { mockSkills, mockProjects } from '../models/mockData';
import { ApiResponse, Skill, Project } from '../../../Portfolio/shared/types';

const router = Router();

// GET /api/skills - Get all skills
router.get('/', (req: Request, res: Response) => {
  const { category } = req.query;

  let filteredSkills = [...mockSkills];

  // Filter by category
  if (category && typeof category === 'string') {
    filteredSkills = filteredSkills.filter((s) => s.category === category);
  }

  const response: ApiResponse<Skill[]> = {
    success: true,
    data: filteredSkills,
    timestamp: new Date().toISOString(),
  };

  res.json(response);
});

// GET /api/skills/:id/projects - Get projects related to a skill
router.get('/:id/projects', (req: Request, res: Response) => {
  const { id } = req.params;
  const skill = mockSkills.find((s) => s.id === id);

  if (!skill) {
    return res.status(404).json({
      success: false,
      error: {
        message: 'Skill not found',
        code: 'SKILL_NOT_FOUND',
      },
      timestamp: new Date().toISOString(),
    });
  }

  const relatedProjects = mockProjects.filter((p) => skill.relatedProjects.includes(p.id));

  const response: ApiResponse<Project[]> = {
    success: true,
    data: relatedProjects,
    timestamp: new Date().toISOString(),
  };

  res.json(response);
});

export default router;
