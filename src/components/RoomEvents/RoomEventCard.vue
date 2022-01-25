<template>
  <div class="card">
    <div class="header">
      <span>{{ roomEvent.name }}</span>
    </div>
    <div class="body">
      <label for="description"
        >Description:
        <textarea id="description" v-text="roomEvent.description" />
      </label>
      <label for="startingTime"
        >Starting at:
        <input
          type="datetime"
          name="startingTime"
          id="startingTime"
          :value="roomEvent.startingTime"
      /></label>
      <label for="endingTime"
        >Ending at:
        <input
          type="datetime"
          name="endingTime"
          id="endingTime"
          :value="roomEvent.endingTime"
      /></label>
    </div>
  </div>
</template>

<script>
export default {
  name: "room-event-card",
  props: {
    roomEvent: {
      id: Number,
      name: String,
      description: String,
      startingTime: Date,
      endingTime: Date,
      roomId: Number,
    },
  },
};
</script>

<style scoped>
.card {
  border: 1px solid var(--color-dark);
  border-radius: 4px;
}
</style>
