<template>
  <div class="card">
    <div class="head">
      <span>{{ room.id }}</span>
      <span>{{ room.name }}</span>
    </div>
    <div class="body">
      <span>"{{ room.description }}"</span>
      <div class="buttons">
        <router-link
          :to="{ name: 'room', params: { roomId: room.id } }"
          tag="button"
          class="button"
          >See Details</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "room-card",
  props: {
    room: {
      id: Number,
      name: String,
      description: String,
    },
  },
};
</script>

<style>
.card {
  width: 20rem;
  height: 10rem;
  border: 1px var(--color-border) solid;
  border-radius: 5px;
  margin: 1rem;
  box-shadow: 0.2rem 0.3rem 0.5rem var(--color-dark);
  display: grid;
}
.card > .head {
  font-weight: 900;
  color: var(--color-main);
  display: flex;
  justify-content: space-evenly;
  padding: 1rem 0;
}
.card > .body {
  font-weight: 100;
  display: grid;
  grid-template-rows: 5fr 3fr;
  justify-items: center;
}
</style>
