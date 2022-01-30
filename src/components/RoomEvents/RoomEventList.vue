<template>
  <section>
    <div class="grid" v-if="roomEvents.length">
      <room-event-card
        v-for="roomEvent in roomEvents"
        :key="roomEvent.id"
        :roomEvent="roomEvent"
      ></room-event-card>
    </div>
    <div v-else>
      <span>No events found...</span>
    </div>
  </section>
</template>

<script>
import { HttpClient } from "../../core/HttpClient";
import { RoomEventService } from "../../service/RoomEventService";
import RoomEventCard from "./RoomEventCard.vue";

const httpClient = new HttpClient();
const roomEventService = new RoomEventService(httpClient);

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
    this.eventsPage = this.$route.params.pageNumber || 0;

    // If the :roomId param exists in URL, load events from this Room. But if don't exists, load all Rooms from page :pageNumber
    // The listAll method accepts null as first arg.
    roomEventService
      .listAll(this.$route.params.roomId, this.eventsPage)
      .then((response) => {
        this.roomEvents = response.content;
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
