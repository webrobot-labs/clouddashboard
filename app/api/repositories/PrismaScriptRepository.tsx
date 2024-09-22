import { PrismaClient, script, Prisma } from '@prisma/client';
import IScriptRepository from '../../interfaces/IScriptRepository';

const prisma = new PrismaClient();

class PrismaScriptRepository implements IScriptRepository {
  // Creazione di uno script
  async create(data: Prisma.scriptCreateInput): Promise<script> {
    return await prisma.script.create({
      data,
    });
  }

  // Ottenere uno script per ID
  async getById(id: number): Promise<script | null> {
    return await prisma.script.findUnique({
      where: { id },
      include: { jobs: true }, // Include i lavori associati allo script
    });
  }

  // Ottenere tutti gli script con un filtro opzionale
  async getAll(filter?: string): Promise<script[]> {
    return await prisma.script.findMany({
      where: filter ? { name: { contains: filter } } : {},
      include: { jobs: true }, // Include i lavori associati
    });
  }

  // Aggiornamento di uno script
  async update(id: number, data: Prisma.scriptUpdateInput): Promise<script> {
    return await prisma.script.update({
      where: { id },
      data,
    });
  }

  // Eliminazione di uno script
  async delete(id: number): Promise<script> {
    return await prisma.script.delete({
      where: { id },
    });
  }
}

export default PrismaScriptRepository;
