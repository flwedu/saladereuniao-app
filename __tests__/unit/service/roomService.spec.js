/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { RoomService } from "service/RoomService.js";

const room = {
  id: 1,
  name: "Test Room",
  description: "Just a test room",
};

const rooms = Array.of(room, room);

// Creating mock from httpClient
const httpClientFake = {
  get: (_url) => Promise.resolve({ status: 200, data: rooms }),
  post: (_url, _data) =>
    Promise.resolve({
      status: 201,
      headers: {
        location: "testURL",
      },
    }),
  put: (_url, _data) =>
    Promise.resolve({
      status: 202,
      data: {
        id: 1,
        name: "Updated Test Room",
        desciption: "Just a test room",
      },
    }),
  delete: (_url) => Promise.resolve({ status: 202 }),
};

describe("Service methods", () => {
  const service = new RoomService(httpClientFake);

  it("listAll returns a room array", async () => {
    expect.assertions(2);
    const get = jest.spyOn(httpClientFake, "get");

    const result = await service.listAll();

    expect(get).toHaveBeenCalledTimes(1);
    expect(result).toStrictEqual(rooms);
  });

  it("findById should return a room", async () => {
    expect.assertions(2);
    const get = jest.spyOn(httpClientFake, "get");

    httpClientFake.get = () => Promise.resolve({ status: 200, data: room });

    const result = await service.findById(1);

    expect(get).toHaveBeenCalledTimes(1);
    expect(result).toStrictEqual(room);
  });

  it("save should create a room", async () => {
    expect.assertions(2);
    const post = jest.spyOn(httpClientFake, "post");

    const result = await service.save(room);

    expect(result.headers).toStrictEqual({
      location: "testURL",
    });
    expect(post).toHaveBeenCalledTimes(1);
  });

  it("put should return a updated room", async () => {
    expect.assertions(2);
    const put = jest.spyOn(httpClientFake, "put");

    const result = await service.update(1, room);

    expect(result.data).toStrictEqual({
      id: 1,
      name: "Updated Test Room",
      desciption: "Just a test room",
    });
    expect(put).toHaveBeenCalledTimes(1);
  });

  it("delete should not throw error", async () => {
    expect.assertions(2);
    const deleteSpy = jest.spyOn(httpClientFake, "delete");

    try {
      await service.delete(1);
      expect(true).toBeTruthy();
    } catch (err) {
      fail(err);
    }
    expect(deleteSpy).toBeCalledTimes(1);
  });
});
