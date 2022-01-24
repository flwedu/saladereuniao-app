import { config } from "../config";
import { Service } from "./Service";

export class RoomService extends Service {
  constructor(httpClient) {
    super(httpClient);
    this.baseURL = `http://localhost:${config.API_PORT}/${config.API_ROOMS}`;
  }

  findRoomEvents(roomId, pageNumber) {
    return this.httpClient.get(
      `${this.baseURL}/${roomId}/events/?page=${pageNumber}`
    );
  }
}
