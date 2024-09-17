interface IScriptRepository {
    create(data: any): Promise<any>;
    getById(id: string | number): Promise<any>;
    getAll(filter: any): Promise<any[]>;
    update(id: string | number, data: any): Promise<any>;
    delete(id: string | number): Promise<any>;
}

export default IScriptRepository;
