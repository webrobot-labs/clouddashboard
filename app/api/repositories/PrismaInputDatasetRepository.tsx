import { PrismaClient, inputdataset, Prisma } from '@prisma/client';
import IInputDatasetRepository from '../../interfaces/IInputDatasetRepository';

class PrismaInputDatasetRepository implements IInputDatasetRepository {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }


  // Creazione di un nuovo dataset di input
  async create(data: Prisma.inputdatasetCreateInput): Promise<inputdataset> {
    return this.prisma.inputdataset.create({
      data,
    });
  }

  // Ottenere tutti i dataset di input
  async findAll(): Promise<inputdataset[]> {
    return this.prisma.inputdataset.findMany();
  }

  // Aggiornamento di un dataset di input
  async update(id: number, data: Prisma.inputdatasetUpdateInput): Promise<inputdataset> {
    return this.prisma.inputdataset.update({
      where: { id },
      data,
    });
  }

  // Eliminazione di un dataset di input
  async delete(id: number): Promise<void> {
    await this.prisma.inputdataset.delete({
      where: { id },
    });
  }
}

export default PrismaInputDatasetRepository;
