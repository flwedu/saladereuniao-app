import HttpClient from "../../src/core/HttpClient";
import { RoomService } from "../../src/service/RoomService";

it("Should return an promise when requesting for all", async () => {

    const httpClient = new HttpClient();
    const service = new RoomService(httpClient);
    const result = await service.listAll();

    expect(result).toBeTruthy();
})