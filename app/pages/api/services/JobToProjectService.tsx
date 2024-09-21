import { injectable, inject } from 'tsyringe';
import type IJobToProjectRepository from '../../../interfaces/IJobToProjectRepository';
import { jobtoproject } from '@prisma/client';

@injectable()
class JobToProjectService {
  constructor(
    @inject('IJobToProjectRepository') private jobToProjectRepository: IJobToProjectRepository
  ) {}

  // Crea un nuovo JobToProject
  async createJobToProject(data: any): Promise<jobtoproject> {
    return await this.jobToProjectRepository.create(data);
  }

  // Ottiene tutti i JobToProject
  async getAllJobToProjects(): Promise<jobtoproject[]> {
    return await this.jobToProjectRepository.findAll();
  }

  // Ottiene un JobToProject tramite ID
  async getJobToProjectById(id: number): Promise<jobtoproject | null> {
    return await this.jobToProjectRepository.findById(id);
  }

  // Aggiorna un JobToProject esistente
  async updateJobToProject(id: number, data: any): Promise<jobtoproject> {
    return await this.jobToProjectRepository.update(id, data);
  }

  // Elimina un JobToProject
  async deleteJobToProject(id: number): Promise<void> {
    return await this.jobToProjectRepository.delete(id);
  }
}

export default JobToProjectService;
