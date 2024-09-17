interface ICategoryRepository {
    getAll(filter: any): Promise<any[]>;
    getById(id: string | number): Promise<any>;
    create(data: any): Promise<any>;
    update(id: string | number, data: any): Promise<any>;
    delete(id: string | number): Promise<any>;
}

export default ICategoryRepository;
