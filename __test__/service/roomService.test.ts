import { IHttpClient } from "../../src/core/IHttpClient";
import IRoom from "../../src/model/Room";
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
    post: (url: string, data: any) => Promise.resolve({
        status: 200, data: {
            id: 2,
            name: "Test Room",
            desciption: "Second test room"
        }
    }),
    put: (url: string, data: any) => Promise.resolve({
        status: 202, data: {
            id: 1,
            name: "Updated Test Room",
            desciption: "Just a test room"
        }
    }),
    delete: (url: string) => Promise.resolve({ status: 202 }),
}

describe("Service methods", () => {
    const service = new RoomService(httpClientFake);

    it("listAll returns a room array", async () => {

        expect.assertions(2);
        const get = jest.spyOn(httpClientFake, "get");

        const result = await service.listAll();

        expect(get).toHaveBeenCalledTimes(1);
        expect(result).toStrictEqual(rooms);
    })

    it("findById should return a room", async () => {

        expect.assertions(2);
        const get = jest.spyOn(httpClientFake, "get");

        httpClientFake.get = () => Promise.resolve({ status: 200, data: room })

        const result = await service.findById(1);

        expect(get).toHaveBeenCalledTimes(1);
        expect(result).toStrictEqual(room);
    })

    it("save should create a room", async () => {

        expect.assertions(2);
        const post = jest.spyOn(httpClientFake, "post");

        const result = await service.save(room);

        expect(result).toStrictEqual({
            id: 2,
            name: "Test Room",
            desciption: "Second test room"
        });
        expect(post).toHaveBeenCalledTimes(1);
    })

    it("put should return a updated room", async () => {

        expect.assertions(2);
        const put = jest.spyOn(httpClientFake, "put");

        const result = await service.update(1, room);

        expect(result).toStrictEqual({
            id: 1,
            name: "Updated Test Room",
            desciption: "Just a test room"
        });
        expect(put).toHaveBeenCalledTimes(1);
    })

    it("delete should not throw error", async () => {

        expect.assertions(2);
        const deleteSpy = jest.spyOn(httpClientFake, "delete");

        try {
            await service.delete(1);
            expect(true).toBeTruthy();
        }
        catch {
        }
        expect(deleteSpy).toBeCalledTimes(1);
    })
})