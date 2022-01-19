import axios from "axios";
import { IHttpClient } from "./IHttpClient";
export default class HttpClient implements IHttpClient {

    get(url: string) {
        return axios.get(url);
    }

    post(url: string, data: any) {
        return axios.post(url, data);
    }

    put(url: string, data: any) {
        return axios.put(url, data);
    }

    delete(url: string) {
        return axios.delete(url)
    }
}