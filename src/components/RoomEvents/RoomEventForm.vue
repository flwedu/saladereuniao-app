<template>
  <div class="card" id="event-card">
    <div class="head">
      <span>"{{ roomEvent.name }}"</span>
    </div>
    <div class="body">
      <form action="">
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
      </form>
    </div>
    <div class="buttons">
      <input class="button" type="button" value="Edit" />
    </div>
  </div>
</template>

<script>
import { HttpClient } from "../../core/HttpClient";
import { RoomEventService } from "../../service/RoomEventService";
import { RoomService } from "../../service/RoomService";

const client = new HttpClient();
const roomService = new RoomService(client);
const roomEventService = new RoomEventService(client);

export default {
  data: function () {
    return {
      roomEvent: {
        id: Number,
        name: String,
        description: String,
        startingTime: Date,
        endingTime: Date,
        roomId: Number,
      },
      room: {
        id: Number,
        name: String,
      },
    };
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

<style></style>
