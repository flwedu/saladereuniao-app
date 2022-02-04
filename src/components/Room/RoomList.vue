<template>
  <section>
    <div>
      <input
        type="text"
        name="filterField"
        placeholder="Term to filter"
        v-on:input="filterText = $event.target.value"
      />
    </div>
    <span v-if="!filterText">A list with all avaliable rooms</span>
    <span v-else>A list with filtred rooms</span>
    <div v-if="rooms.length">
      <room-card v-for="room in filtredRooms" :room="room" :key="room.id" />
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
      filterText: "",
    };
  },
  computed: {
    filtredRooms() {
      if (this.filterText)
        return this.rooms.filter((room) => room.name.contains(this.filterText));
      return this.rooms;
    },
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
