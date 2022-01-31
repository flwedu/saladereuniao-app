import { URL_EVENTS, URL_ROOMS } from "../config";

export class RoomEventService {
  constructor(httpClient) {
    this.httpClient = httpClient;
    this.baseURL = URL_EVENTS;
  }

  /**
   * Load all events.
   * @param {number} roomId
   * @param {number} pageNumber
   * @returns
   */
  listAll(roomId, pageNumber) {
    const page = pageNumber || 0;

    return new Promise((resolve, reject) => {
      const getUrl = roomId
        ? `${URL_ROOMS}/${roomId}/events?page=${page}`
        : `${URL_EVENTS}?page=${page}`;

      this.httpClient
        .get(getUrl)
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
