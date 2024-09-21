import { injectable, inject } from 'tsyringe';
import type IJobRepository from '../../../interfaces/IJobRepository';
import { job } from '@prisma/client';

@injectable()
class JobService {
  // Inietta il repository dei lavori
  constructor(
    @inject('IJobRepository') private jobRepository: IJobRepository
  ) {}

  // Crea un nuovo lavoro
  async createJob(data: any): Promise<job> {
    return await this.jobRepository.create(data);
  }

  // Ottiene tutti i lavori
  async getAllJobs(): Promise<job[]> {
    return await this.jobRepository.getAll();
  }

  // Aggiorna un lavoro esistente
  async updateJob(id: number, data: any): Promise<job> {
    return await this.jobRepository.update(id, data);
  }

  // Elimina un lavoro
  async deleteJob(id: number): Promise<job> {
    return await this.jobRepository.delete(id);
  }
}

export default JobService;
