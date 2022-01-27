<template>
  <div class="card" id="event-card">
    <div class="head">
      <span>"{{ roomEvent.name }}"</span>
    </div>
    <div class="body">
      <label for="description" class="form-field"
        >Description:
        <textarea
          id="description"
          v-model="roomEvent.description"
          rows="4"
          readonly="true"
        />
      </label>
      <label for="startingTime" class="form-field"
        >Starting at:
        <input
          type="datetime"
          name="startingTime"
          id="startingTime"
          :value="startingTimeLocale"
          readonly="true"
      /></label>
      <label for="endingTime" class="form-field"
        >Ending at:
        <input
          type="datetime"
          name="endingTime"
          id="endingTime"
          :value="endingTimeLocale"
          readonly="true"
      /></label>
    </div>
    <div class="buttons">
      <input class="button" type="button" value="Edit" />
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

<style scoped>
.card {
  height: 18rem;
}

.form-field {
  display: flex;
  flex-direction: column;
}
</style>
