import { injectable, inject } from 'tsyringe';
import type IInputDatasetRepository from '../../../interfaces/IInputDatasetRepository';
import { inputdataset } from '@prisma/client';

@injectable()
class InputDatasetService {
  // Inietta il repository dei dataset di input
  constructor(
    @inject('IInputDatasetRepository') private inputDatasetRepository: IInputDatasetRepository
  ) {}

  // Crea un nuovo dataset di input
  async createInputDataset(data: any): Promise<inputdataset> {
    return await this.inputDatasetRepository.create(data);
  }

  // Ottiene tutti i dataset di input
  async getAllInputDatasets(): Promise<inputdataset[]> {
    return await this.inputDatasetRepository.findAll();
  }

  // Aggiorna un dataset di input esistente
  async updateInputDataset(id: number, data: any): Promise<inputdataset> {
    return await this.inputDatasetRepository.update(id, data);
  }

  // Elimina un dataset di input
  async deleteInputDataset(id: number): Promise<void> {
    return await this.inputDatasetRepository.delete(id);
  }
}

export default InputDatasetService;
