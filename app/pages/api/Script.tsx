import { NextApiRequest, NextApiResponse } from 'next';
import { container } from 'tsyringe';
import ScriptService from './services/ScriptService';

export default async function handler(req: NextApiRequest, res: NextApiResponse): Promise<void> {
  const scriptService = container.resolve(ScriptService);

  try {
    if (req.method === 'GET') {
      const scripts = await scriptService.getAllScripts(req.query.filter as string);
      res.status(200).json(scripts);
    } else if (req.method === 'POST') {
      const script = await scriptService.createScript(req.body);
      res.status(201).json(script);
    } else if (req.method === 'PUT') {
      const updatedScript = await scriptService.updateScript(req.body.id, req.body);
      res.status(200).json(updatedScript);
    } else if (req.method === 'DELETE') {
      const deletedScript = await scriptService.deleteScript(req.body.id);
      res.status(204).json(deletedScript);
    } else {
      res.status(405).json({ error: 'Method not allowed' });
    }
  } catch (error) {
    console.error('Server error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}
