import { NextApiRequest, NextApiResponse } from 'next';
import { container } from 'tsyringe';
import ProjectService from './services/ProjectService';

export default async function handler(req: NextApiRequest, res: NextApiResponse): Promise<void> {
  const projectService = container.resolve(ProjectService);

  try {
    if (req.method === 'GET') {
      const projects = await projectService.getAllProjects();
      res.status(200).json(projects);
    } else if (req.method === 'POST') {
      const project = await projectService.createProject(req.body);
      res.status(201).json(project);
    } else if (req.method === 'PUT') {
      const updatedProject = await projectService.updateProject(req.body.id, req.body);
      res.status(200).json(updatedProject);
    } else if (req.method === 'DELETE') {
      const deletedProject = await projectService.deleteProject(req.body.id);
      res.status(204).json(deletedProject);
    } else {
      res.status(405).json({ error: 'Method not allowed' });
    }
  } catch (error) {
    console.error('Server error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}
