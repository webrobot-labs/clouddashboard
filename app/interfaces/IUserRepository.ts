interface IUserRepository {
    create(data: any): Promise<any>;
    getAll(): Promise<any[]>;
    update(id: number , data: any): Promise<any>;
    delete(id: number ): Promise<any>;
}

export default IUserRepository;
