import HttpClient from "./core/HttpClient";
import { RoomService } from "./service/RoomService";

const listHtmlElement = document.getElementById("list");
const httpClient = new HttpClient();
const roomService = new RoomService(httpClient);

function renderList() {
    roomService.listAll().then(roomList => {

        roomList.forEach(room => {
            const newElement = document.createElement("p");
            newElement.textContent = room.name;
            listHtmlElement.appendChild(newElement);
        })
    }).catch(() => listHtmlElement.textContent = `Error getting rooms`)
}

renderList();