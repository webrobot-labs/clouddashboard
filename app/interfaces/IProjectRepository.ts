interface IProjectRepository {
    create(data: any): Promise<any>;
    getAll(): Promise<any[]>;
    update(id: string | number, data: any): Promise<any>;
    delete(id: string | number): Promise<any>;
}

export default IProjectRepository;
