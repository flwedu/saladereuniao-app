import IRoom from "../../src/model/Room";
import { HttpClient } from "../../src/core/HttpClient";
import { Service } from "../../src/service/Service";

export class RoomService implements Service<IRoom> {

    constructor(private httpClient: HttpClient) { };

    listAll(): Promise<IRoom[]> {
        return new Promise((resolve, reject) => {
            return resolve(Array.of());
        });
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
