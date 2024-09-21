// ioc.ts
import { container } from 'tsyringe';
import PrismaCategoryRepository from './pages/api/repositories/PrismaCategoryRepository';
import PrismaScriptRepository from './pages/api/repositories/PrismaScriptRepository';
import PrismaJobRepository from './pages/api/repositories/PrismaJobRepository';
import PrismaInputDatasetRepository from './pages/api/repositories/PrismaInputDatasetRepository'
import ICategoryRepository from './interfaces/ICategoryRepository';
import PrismaProjectRepository from './pages/api/repositories/PrismaProjectRepository';
import IProjectRepository from './interfaces/IProjectRepository';
import IScriptRepository from './interfaces/IScriptRepository';
import IJobRepository from './interfaces/IJobRepository';
import IPrismaInputDatasetRepository from './interfaces/IInputDatasetRepository';

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


export default container;
