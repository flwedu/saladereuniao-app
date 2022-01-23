<template>
  <section>
    <span>A list with all avaliable rooms</span>
    <ul>
      <li v-for="room in rooms" :key="room.id">
        <strong>{{ room.id }}</strong
        >......{{ room.name }}
      </li>
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
