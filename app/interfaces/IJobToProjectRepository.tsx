import { jobtoproject } from '@prisma/client';

export default interface IJobToProjectRepository {
  // Crea un nuovo JobToProject
  create(data: any): Promise<jobtoproject>;

  // Ottiene tutti i JobToProject
  findAll(): Promise<jobtoproject[]>;

  // Ottiene un JobToProject tramite ID
  findById(id: number): Promise<jobtoproject | null>;

  // Aggiorna un JobToProject esistente
  update(id: number, data: any): Promise<jobtoproject>;

  // Elimina un JobToProject
  delete(id: number): Promise<void>;
}
