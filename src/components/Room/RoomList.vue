<template>
  <section>
    <span>A list with all avaliable rooms</span>
    <div v-if="rooms.length">
      <room-card v-for="room in rooms" :room="room" :key="room.id" />
    </div>
    <div v-else>
      <span>Loading room list...</span>
    </div>
  </section>
</template>

<script>
import { HttpClient } from "../../core/HttpClient";
import { RoomService } from "../../service/RoomService";
import RoomCard from "./RoomCard.vue";

const httpClient = new HttpClient();
const roomService = new RoomService(httpClient);

export default {
  components: {
    "room-card": RoomCard,
  },
  name: "room-list",
  data: function () {
    return {
      rooms: [],
    };
  },
  created: function () {
    roomService
      .listAll()
      .then((response) => {
        this.rooms = response;
      })
      .catch(console.error);
  },
};
</script>

<style></style>
