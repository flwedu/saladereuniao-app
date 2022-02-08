import axios from "axios";
export class HttpClient {

  constructor(){
    this.axios = axios.create({
      headers: {
        "Content-Type": "application/json",
      },
    })
  }

  get(url) {
    return this.axios.get(url);
  }

  post(url, data) {
    return this.axios.post(url, data);
  }

  put(url, data) {
    return this.axios.put(url, data);
  }

  delete(url) {
    return this.axios.delete(url);
  }
}
