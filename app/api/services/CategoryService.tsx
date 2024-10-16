import 'reflect-metadata'; // Importa reflect-metadata prima di tutto
import { injectable, inject } from 'tsyringe';
import type ICategoryRepository from '../../interfaces/ICategoryRepository';

@injectable()
class CategoryService {
  // Inietta il repository delle categorie come proprietà della classNamee
  constructor(
    @inject('ICategoryRepository') private categoryRepository: ICategoryRepository
  ) {}

  // Ottieni tutte le categorie
  async getAllCategories(filter: any) {
    return await this.categoryRepository.getAll(filter);
  }

  // Crea una nuova categoria
  async createCategory(data: any) {
    return await this.categoryRepository.create(data);
  }

  // Aggiorna una categoria esistente
  async updateCategory(id: number, data: any) {
    return await this.categoryRepository.update(id, data);
  }

  // Elimina una categoria
  async deleteCategory(id: number) {
    return await this.categoryRepository.delete(id);
  }
}

export default CategoryService;
