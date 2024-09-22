import { PrismaClient, Prisma } from '@prisma/client';
import {category} from '@prisma/client';
import ICategoryRepository from '../../interfaces/ICategoryRepository';

const prisma = new PrismaClient();

class PrismaCategoryRepository implements ICategoryRepository {
  // Ottiene tutte le categorie con un filtro opzionale
  async getAll(filter?: { name?: string }): Promise<category[]> {
    return await prisma.category.findMany({
      where: filter ? { name: { contains: filter.name } } : {},
      include: { job: true },  // Include i lavori associati alla categoria
    });
  }

  // Ottiene una singola categoria per ID
  async getById(id: number): Promise<category | null> {
    return await prisma.category.findUnique({
      where: { id },
      include: { job: true },
    });
  }

  // Crea una nuova categoria
  async create(data: Prisma.categoryCreateInput): Promise<category> {
    return await prisma.category.create({
      data,
    });
  }

  // Aggiorna una categoria esistente
  async update(id: number, data: Prisma.categoryUpdateInput): Promise<category> {
    return await prisma.category.update({
      where: { id },
      data,
    });
  }

  // Elimina una categoria
  async delete(id: number): Promise<category> {
    return await prisma.category.delete({
      where: { id },
    });
  }
}

export default PrismaCategoryRepository;
