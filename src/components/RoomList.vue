<template>
  <section>
    <span>A list with all avaliable rooms</span>
    <ul>
      <li v-for="room in rooms" :key="room.id"></li>
    </ul>
  </section>
</template>

<script>
export default {
  name: "room-list",
  props: {
    rooms: [],
  },
};
</script>

<style></style>
