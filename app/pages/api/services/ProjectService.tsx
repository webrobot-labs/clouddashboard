import { injectable, inject } from 'tsyringe';
import type IProjectRepository from '../../../interfaces/IProjectRepository';
import { project } from '@prisma/client';

@injectable()
class ProjectService {
  // Inietta il repository dei progetti
  constructor(
    @inject('IProjectRepository') private projectRepository: IProjectRepository
  ) {}

  // Crea un progetto
  async createProject(data: any): Promise<project> {
    return await this.projectRepository.create(data);
  }

  // Ottiene tutti i progetti
  async getAllProjects(): Promise<project[]> {
    return await this.projectRepository.getAll();
  }

  // Aggiorna un progetto esistente
  async updateProject(id: number, data: any): Promise<project> {
    return await this.projectRepository.update(id, data);
  }

  // Elimina un progetto
  async deleteProject(id: number): Promise<project> {
    return await this.projectRepository.delete(id);
  }
}

export default ProjectService;
