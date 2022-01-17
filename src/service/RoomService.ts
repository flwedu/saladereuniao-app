import IRoom from "../../src/model/Room";
import HttpClient from "../core/HttpClient";
import { Service } from "../../src/service/Service";
import axios from "axios";
import { handleError } from "../utils/promiseHelpers";

export class RoomService implements Service<IRoom> {

    private baseURL = "http://localhost:8080/rooms"

    constructor(private httpClient: HttpClient) { };

    listAll(): Promise<IRoom[]> {
        return new Promise((resolve, reject) => {
            this.httpClient.get(this.baseURL).then(response => resolve(response.data)).catch(handleError)
        })
    }
    findById(id: number): Promise<IRoom> {
        return new Promise((resolve, reject) => {
            this.httpClient.get(`${this.baseURL}/${id}`).then(response => resolve(response.data)).catch(handleError)
        })
    }
    save(data: IRoom): Promise<any> {
        return new Promise((resolve, reject) => {
            this.httpClient.post(this.baseURL, data).then(response => {
                if (response.status == 201)
                    resolve(response);
                else
                    reject(response)
            }).catch(handleError)
        })
    }
    update(id: number, data: IRoom): Promise<any> {
        return new Promise((resolve, reject) => {
            axios.put(`${this.baseURL}/${id}`, data).then(response => resolve(response)).catch(handleError)
        })
    }
    delete(id: number): Promise<any> {
        return new Promise((resolve, reject) => {
            axios.delete(`${this.baseURL}/${id}`).then(response => {
                if (response.status == 202)
                    resolve(response)
                else
                    reject(response)
            }
            ).catch(handleError)
        })
    }
}
