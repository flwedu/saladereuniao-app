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
      <date-time :label="'Starting at :'" :dateTime="roomEvent.startingTime" />
      <date-time :label="'Ending at :'" :dateTime="roomEvent.endingTime" />
    </div>
    <div class="buttons">
      <input class="button" type="button" value="Edit" />
    </div>
  </div>
</template>

<script>
import DateTimeField from "../card/DateTimeField.vue";
export default {
  name: "room-event-card",
  components: {
    "date-time": DateTimeField,
  },
  data() {
    return {
      editingMode: false,
    };
  },
  props: {
    roomEvent: {
      id: Number,
      name: String,
      description: String,
      startingTime: [],
      endingTime: [],
      roomId: Number,
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
