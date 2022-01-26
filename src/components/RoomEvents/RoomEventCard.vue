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
          :value="startingTimeLocale"
      /></label>
      <label for="endingTime"
        >Ending at:
        <input
          type="datetime"
          name="endingTime"
          id="endingTime"
          :value="endingTimeLocale"
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
  computed: {
    startingTimeLocale: function () {
      const dateArray = this.roomEvent.startingTime;
      return new Date(...dateArray).toLocaleString();
    },
    endingTimeLocale: function () {
      const dateArray = this.roomEvent.endingTime;
      return new Date(...dateArray).toLocaleString();
    },
  },
};
</script>

<style scoped></style>
