<template>
  <section>
    <span>A list with all avaliable rooms</span>
    <div>
      <room-list-card v-for="room in rooms" :room="room" :key="room.id" />
    </div>
  </section>
</template>

<script>
import RoomListCard from "./RoomListCard.vue";
export default {
  components: { RoomListCard },
  name: "room-list",
  props: {
    rooms: [],
  },
};
</script>

<style></style>
