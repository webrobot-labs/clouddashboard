import { NextApiRequest, NextApiResponse } from 'next';
import { container } from 'tsyringe';
import InputDatasetService from './services/InputDatasetService';

export default async function handler(req: NextApiRequest, res: NextApiResponse): Promise<void> {
  const inputDatasetService = container.resolve(InputDatasetService);

  try {
    if (req.method === 'POST') {
      const { name, email } = req.body;
      const inputDataset = await inputDatasetService.createInputDataset({ name, email });
      res.status(201).json(inputDataset);
    } else if (req.method === 'GET') {
      const inputDatasets = await inputDatasetService.getAllInputDatasets();
      res.status(200).json(inputDatasets);
    } else if (req.method === 'PUT') {
      const { id, name, email } = req.body;
      const updatedInputDataset = await inputDatasetService.updateInputDataset(id, { name, email });
      res.status(200).json(updatedInputDataset);
    } else if (req.method === 'DELETE') {
      const { id } = req.body;
      await inputDatasetService.deleteInputDataset(id);
      res.status(204).end();
    } else {
      res.status(405).json({ error: 'Method not allowed' });
    }
  } catch (error) {
    console.error('Server error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}
