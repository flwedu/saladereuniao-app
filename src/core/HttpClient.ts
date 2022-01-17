import axios from "axios";
export default class HttpClient {

    get(url: string) {
        return axios.get(url);
    }

    post(url: string, data: any) {
        return axios.post(url, data);
    }

    put(url: string, data: any) {
        return axios.put(url, data);
    }

    delete(url: string, data: any) {
        return axios.delete(url)
    }
}