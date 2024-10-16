// ioc.ts
import { container } from 'tsyringe';
import PrismaCategoryRepository from '../api/repositories/PrismaCategoryRepository';
import PrismaScriptRepository from '../api/repositories/PrismaScriptRepository';
import PrismaJobRepository from '../api/repositories/PrismaJobRepository';
import PrismaInputDatasetRepository from '../api/repositories/PrismaInputDatasetRepository'
import ICategoryRepository from '../interfaces/ICategoryRepository';
import PrismaProjectRepository from '../api/repositories/PrismaProjectRepository';
import IProjectRepository from '../interfaces/IProjectRepository';
import IScriptRepository from '../interfaces/IScriptRepository';
import IJobRepository from '../interfaces/IJobRepository';
import IPrismaInputDatasetRepository from '../interfaces/IInputDatasetRepository';
import CategoryService from '../api/services/CategoryService';

// Registra i repository nel container IoC
container.register<ICategoryRepository>('ICategoryRepository', {
  useClass: PrismaCategoryRepository,
});

container.register<IProjectRepository>('IProjectRepository', {
  useClass: PrismaProjectRepository,
});

container.register<IScriptRepository>('IScriptRepository', {
  useClass: PrismaScriptRepository,
});

container.register<IJobRepository>('IJobRepository', {
  useClass: PrismaJobRepository,
});

container.register<IPrismaInputDatasetRepository>('IInputDatasetRepository', {
  useClass: PrismaInputDatasetRepository,
});


container.register<CategoryService>('CategoryService', {
  useClass: CategoryService,
});


export default container;