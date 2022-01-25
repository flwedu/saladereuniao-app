<template>
  <div class="card">
    <div class="head">
      <span>{{ room.id }}</span>
      <span>{{ room.name }}</span>
    </div>
    <div class="body">
      <span>"{{ room.description }}"</span>
      <button @click="loadEvents(room.id)">See Events</button>
    </div>
  </div>
</template>

<script>
import { HttpClient } from "../../core/HttpClient";
import { RoomService } from "../../service/RoomService";

const httpClient = new HttpClient();
const roomService = new RoomService(httpClient);

export default {
  name: "room-list-card",
  props: {
    room: {
      id: Number,
      name: String,
      description: String,
    },
  },
  methods: {
    loadEvents(id) {
      roomService
        .findRoomEvents(id, 0)
        .then((response) => console.log(response.data.content))
        .catch(console.error);
    },
  },
};
</script>

<style scoped>
.card {
  width: 20rem;
  height: 10rem;
  border: 1px var(--color-border) solid;
  border-radius: 5px;
  margin: 1rem;
  box-shadow: 0.2rem 0.3rem 0.5rem var(--color-dark);
}
.head {
  font-weight: 900;
  color: var(--color-main);
  display: grid;
  grid-template-columns: 1fr 9fr;
  padding: 1rem 0;
}
.body {
  font-weight: 100;
  display: grid;
  grid-template-rows: 5fr 3fr;
  justify-items: center;
}

button {
  font-weight: 500;
  width: 6rem;
  height: 2rem;
  background: var(--color-main);
  color: var(--color-text-light);
  border: transparent 1px;
  border-radius: 3px;
}
</style>
