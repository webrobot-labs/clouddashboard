import { NextApiRequest, NextApiResponse } from 'next';
import { container } from 'tsyringe';
import CategoryService from './services/CategoryService';

export default async function handler(req: NextApiRequest, res: NextApiResponse): Promise<void> {
  const categoryService = container.resolve(CategoryService);

  try {
    if (req.method === 'GET') {
      // Ottieni tutte le categorie con un eventuale filtro
      const categories = await categoryService.getAllCategories(req.query);
      res.status(200).json(categories);
    } else if (req.method === 'POST') {
      // Crea una nuova categoria
      const category = await categoryService.createCategory(req.body);
      res.status(201).json(category);
    } else if (req.method === 'PUT') {
      // Aggiorna una categoria esistente
      const updatedCategory = await categoryService.updateCategory(req.body.id, req.body);
      res.status(200).json(updatedCategory);
    } else if (req.method === 'DELETE') {
      // Elimina una categoria
      await categoryService.deleteCategory(req.body.id);
      res.status(204).end();
    } else {
      res.status(405).json({ error: 'Method not allowed' });
    }
  } catch (error) {
    console.error('Server error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

