<template>
  <div class="grid">
    <room-event-card
      v-for="roomEvent in roomEvents"
      :key="roomEvent.id"
      :roomEvent="roomEvent"
    ></room-event-card>
  </div>
</template>

<script>
import { HttpClient } from "../../core/HttpClient";
import { RoomService } from "../../service/RoomService";
import RoomEventCard from "./RoomEventCard.vue";

const httpClient = new HttpClient();
const roomService = new RoomService(httpClient);

export default {
  name: "room-event-list",
  components: {
    RoomEventCard,
  },
  data: function () {
    return {
      roomEvents: [],
      eventsPage: Number,
    };
  },
  created: function () {
    this.eventsPage = 0;
    roomService
      .findRoomEvents(this.$route.params.roomId, this.eventsPage)
      .then((response) => {
        this.roomEvents = response.data.content;
      })
      .catch(console.error);
  },
};
</script>

<style>
.grid {
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
}
</style>
