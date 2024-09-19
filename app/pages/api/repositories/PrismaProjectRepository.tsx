import { PrismaClient, project, Prisma } from '@prisma/client';
import IProjectRepository from '../../../interfaces/IProjectRepository';

const prisma = new PrismaClient();

class PrismaProjectRepository implements IProjectRepository {
  // Creazione di un progetto
  async create(data: Prisma.projectCreateInput): Promise<project> {
    return await prisma.project.create({
      data,
    });
  }

  // Ottenere tutti i progetti con le relazioni (jobtoproject, inputdataset, outputdataset)
  async getAll(): Promise<project[]> {
    return await prisma.project.findMany({
      include: {
        jobtoproject: {
          select: {
            projectId: true,
            project: true,
            job: true,
            inputdataset: true,
            outputdataset: true,
          },
        },
      },
    });
  }

  // Aggiornamento di un progetto
  async update(id: number, data: Prisma.projectUpdateInput): Promise<project> {
    return await prisma.project.update({
      where: { id },
      data,
    });
  }

  // Eliminazione di un progetto
  async delete(id: number): Promise<project> {
    return await prisma.project.delete({
      where: { id },
    });
  }
}

export default PrismaProjectRepository;
