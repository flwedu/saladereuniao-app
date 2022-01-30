/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { RoomEventService } from "../../../../src/service/RoomEventService";

// mock data
const content = [
  {
    id: 1,
    description: "Test room event",
    name: "Test",
    startingTime: Date.now(),
    endingTime: Date.now(),
    roomId: 1,
  },
];

const httpClientFake = {
  get: (_url) => Promise.resolve({ status: 200, data: { content } }),
  post: (_url, _data) =>
    Promise.resolve({
      status: 201,
    }),
  put: (_url, _data) =>
    Promise.resolve({
      status: 202,
    }),
  delete: (_url) => Promise.resolve({ status: 202 }),
};
describe("Service methods", () => {
  const service = new RoomEventService(httpClientFake);

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("Should get a list with all room events with page number", async () => {
    expect.assertions(2);
    const getSpy = jest.spyOn(httpClientFake, "get");

    const result = await service.listAll(1, 0);

    expect(getSpy).toHaveBeenCalledTimes(1);
    expect(result.content).toEqual(content);
  });

  it("Should get a list with all room events without pageNumber", async () => {
    expect.assertions(2);
    const getSpy = jest.spyOn(httpClientFake, "get");

    const result = await service.listAll(1, undefined);

    expect(getSpy).toHaveBeenCalledTimes(1);
    expect(result.content).toEqual(content);
  });

  it("Should get a list with all room events without page roomId or pageNumber", async () => {
    expect.assertions(2);
    const getSpy = jest.spyOn(httpClientFake, "get");

    const result = await service.listAll(undefined, undefined);

    expect(getSpy).toHaveBeenCalledTimes(1);
    expect(result.content).toEqual(content);
  });
});
