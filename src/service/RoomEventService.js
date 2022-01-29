import { config } from "../config";

export class RoomEventService {
  constructor(httpClient) {
    this.httpClient = httpClient;
    this.baseURL = `http://localhost:${config.API_PORT}/${config.API_EVENTS}`;
  }

  /**
   * Load all events.
   * @param {number null} roomId
   * @param {number} pageNumber
   * @returns
   */
  listAll(roomId, pageNumber) {
    return new Promise((resolve, reject) => {
      this.httpClient
        .get(`${this.baseURL}/${roomId && ""}/events/?page=${pageNumber}`)
        .then((response) => resolve(response.data))
        .catch((err) => reject(err));
    });
  }
  findById(id) {
    return new Promise((resolve, reject) => {
      this.httpClient
        .get(`${this.baseURL}/${id}`)
        .then((response) => resolve(response.data))
        .catch((err) => reject(err));
    });
  }
  save(data) {
    return new Promise((resolve, reject) => {
      this.httpClient
        .post(this.baseURL, data)
        .then((response) => {
          if (response.status == 201) resolve(response);
          else reject();
        })
        .catch((err) => reject(err));
    });
  }
  update(id, data) {
    return new Promise((resolve, reject) => {
      this.httpClient
        .put(`${this.baseURL}/${id}`, data)
        .then((response) => {
          if (response.status == 202) resolve(response);
          else reject();
        })
        .catch((err) => reject(err));
    });
  }
  delete(id) {
    return new Promise((resolve, reject) => {
      this.httpClient
        .delete(`${this.baseURL}/${id}`)
        .then((response) => {
          if (response.status == 202) resolve();
          else reject();
        })
        .catch((err) => reject(err));
    });
  }
}
