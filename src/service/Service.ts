export interface Service<T> {
    listAll(): Promise<T[]>;
    findById(id: number): Promise<T>;
    save(data: T): Promise<T>;
    update(id: number, data: T): Promise<T>;
    delete(id: number): Promise<any>;
}
