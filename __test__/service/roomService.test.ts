import HttpClient from "../../src/core/HttpClient";
import { RoomService } from "../../src/service/RoomService";

const room: IRoom = {
    id: 1,
    name: "Test Room",
    description: "Just a test room"
}

const rooms: IRoom[] = Array.of(room, room);

// Creating mock from httpClient
const httpClientFake: IHttpClient = {
    get: (url: string) => Promise.resolve({ status: 200, data: rooms }),
    post: (url: string, data: any) => Promise.resolve({ status: 200, data: room }),
    put: (url: string, data: any) => Promise.resolve({ status: 202, data: room }),
    delete: (url: string, data: any) => Promise.resolve({ status: 202 }),
}

it("Should return an promise when requesting for all", async () => {

    const httpClient = new HttpClient();
    const service = new RoomService(httpClient);
    const result = await service.listAll();

    expect(result).toBeTruthy();
})