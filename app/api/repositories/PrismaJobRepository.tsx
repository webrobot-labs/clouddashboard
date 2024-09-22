import { PrismaClient, job, Prisma } from '@prisma/client';
import IJobRepository from '../../interfaces/IJobRepository';

const prisma = new PrismaClient();

class PrismaJobRepository implements IJobRepository {
  // Creazione di un nuovo job
  async create(data: Prisma.jobCreateInput): Promise<job> {
    return await prisma.job.create({
      data,
    });
  }

  // Ottenere tutti i job
  async getAll(): Promise<job[]> {
    return await prisma.job.findMany();
  }

  // Aggiornamento di un job
  async update(id: number, data: Prisma.jobUpdateInput): Promise<job> {
    return await prisma.job.update({
      where: { id },
      data,
    });
  }

  // Eliminazione di un job
  async delete(id: number): Promise<job> {
    return await prisma.job.delete({
      where: { id },
    });
  }
}

export default PrismaJobRepository;
