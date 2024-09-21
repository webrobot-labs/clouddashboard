// IInputDatasetRepository.ts

interface IInputDatasetRepository {
    create(data : any): Promise<any>;
    findAll(): Promise<any[]>;
    update(id: number, data : any): Promise<any>;
    delete(id: number): Promise<void>;
  }
  export default IInputDatasetRepository;