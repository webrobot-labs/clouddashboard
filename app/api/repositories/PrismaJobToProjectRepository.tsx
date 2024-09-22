import { PrismaClient, jobtoproject, Prisma } from '@prisma/client';
import IJobToProjectRepository from '../../interfaces/IJobToProjectRepository';

class PrismaJobToProjectRepository implements IJobToProjectRepository {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  // Creazione di un nuovo JobToProject
  async create(data: Prisma.jobtoprojectCreateInput): Promise<jobtoproject> {
    return this.prisma.jobtoproject.create({
      data,
    });
  }

  // Ottenere tutti i JobToProject
  async findAll(): Promise<jobtoproject[]> {
    return this.prisma.jobtoproject.findMany();
  }

  // Ottenere un JobToProject tramite ID
  async findById(id: number): Promise<jobtoproject | null> {
    return this.prisma.jobtoproject.findUnique({
      where: { id },
    });
  }

  // Aggiornamento di un JobToProject
  async update(id: number, data: Prisma.jobtoprojectUpdateInput): Promise<jobtoproject> {
    return this.prisma.jobtoproject.update({
      where: { id },
      data,
    });
  }

  // Eliminazione di un JobToProject
  async delete(id: number): Promise<void> {
    await this.prisma.jobtoproject.delete({
      where: { id },
    });
  }
}

export default PrismaJobToProjectRepository;
