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
import RoomEventCard from "./RoomEventCard.vue";

export default {
  name: "room-event-list",
  components: {
    RoomEventCard,
  },
  props: {
    roomEvents: [],
  },
};
</script>

<style>
.grid {
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
}
</style>
