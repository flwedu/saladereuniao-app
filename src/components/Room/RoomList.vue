<template>
  <section>
    <span>A list with all avaliable rooms</span>
    <div>
      <room-card v-for="room in rooms" :room="room" :key="room.id" />
    </div>
  </section>
</template>

<script>
import RoomCard from "./RoomCard.vue";
export default {
  components: { RoomCard },
  name: "room-list",
  props: {
    rooms: [],
  },
};
</script>

<style></style>
