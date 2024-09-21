import { NextApiRequest, NextApiResponse } from 'next';
import { container } from 'tsyringe';
import JobService from './services/JobService';

export default async function handler(req: NextApiRequest, res: NextApiResponse): Promise<void> {
  const jobService = container.resolve(JobService);

  try {
    if (req.method === 'POST') {
      const { name, description, code, creationDate, latestEdit, categoryId } = req.body;
      const jobData = {
        name,
        description,
        code,
        creationDate,
        latestEdit,
        categoryId
      };
      const job = await jobService.createJob(jobData);
      res.status(201).json(job);
    } else if (req.method === 'GET') {
      const jobs = await jobService.getAllJobs();
      res.status(200).json(jobs);
    } else if (req.method === 'PUT') {
      const { id, name, description, code, creationDate, latestEdit, categoryId } = req.body;
      const jobData = {
        name,
        description,
        code,
        creationDate,
        latestEdit,
        categoryId
      };
      const updatedJob = await jobService.updateJob(id, jobData);
      res.status(200).json(updatedJob);
    } else if (req.method === 'DELETE') {
      const { id } = req.body;
      await jobService.deleteJob(id);
      res.status(204).end();
    } else {
      res.status(405).json({ error: 'Method not allowed' });
    }
  } catch (error) {
    console.error('Server error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}
