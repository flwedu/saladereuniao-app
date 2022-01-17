import IRoom from "../../src/model/Room"

export class HttpClient {

    get(url: string): Promise<any> {
        return new Promise(async (resolve, reject) => {
            try {
                const result = await fetch(url);
                if (result.status == 200)
                    resolve(result)
                else
                    reject(result);
            }
            catch (error: any) {
                reject();
            }
        })
    }
}

export interface Service<T> {
    listAll(): Promise<T[]>;
    findById(id: number): Promise<T>;
    save(data: T): Promise<T>;
    update(id: number, data: T): Promise<T>;
    delete(id: number): Promise<any>;
}

export class RoomService implements Service<IRoom>{

    constructor(private httpClient: HttpClient) { };

    listAll(): Promise<IRoom[]> {
        return new Promise((resolve, reject) => {
            return resolve(Array.of());
        })
    }
    findById(id: number): Promise<IRoom> {
        throw new Error("Method not implemented.");
    }
    save(data: IRoom): Promise<IRoom> {
        throw new Error("Method not implemented.");
    }
    update(id: number, data: IRoom): Promise<IRoom> {
        throw new Error("Method not implemented.");
    }
    delete(id: number): Promise<any> {
        throw new Error("Method not implemented.");
    }
}

it("Should return an promise when requesting for all", async () => {

    const httpClient = new HttpClient();
    const service = new RoomService(httpClient);
    const result = await service.listAll();

    expect(result).toBeTruthy();
})