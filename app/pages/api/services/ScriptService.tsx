import { injectable, inject } from 'tsyringe';
import type IScriptRepository from '../../../interfaces/IScriptRepository';
import { script } from '@prisma/client';

@injectable()
class ScriptService {
  // Inietta il repository degli script
  constructor(
    @inject('IScriptRepository') private scriptRepository: IScriptRepository
  ) {}

  // Crea uno script
  async createScript(data: any): Promise<script> {
    return await this.scriptRepository.create(data);
  }

  // Ottiene uno script per ID
  async getScriptById(id: number): Promise<script | null> {
    return await this.scriptRepository.getById(id);
  }

  // Ottiene tutti gli script, con filtro opzionale
  async getAllScripts(filter?: string): Promise<script[]> {
    return await this.scriptRepository.getAll(filter);
  }

  // Aggiorna uno script esistente
  async updateScript(id: number, data: any): Promise<script> {
    return await this.scriptRepository.update(id, data);
  }

  // Elimina uno script
  async deleteScript(id: number): Promise<script> {
    return await this.scriptRepository.delete(id);
  }
}

export default ScriptService;
