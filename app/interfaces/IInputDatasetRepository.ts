// IInputDatasetRepository.ts

interface IInputDatasetRepository {
    create(name: string, email: string): Promise<any>;
    findAll(): Promise<any[]>;
    update(id: number, name: string, email: string): Promise<any>;
    delete(id: number): Promise<void>;
  }
  
  export default IInputDatasetRepository;