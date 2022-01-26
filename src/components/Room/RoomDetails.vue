<template>
  <div v-if="room">
    <form action="" method="post">
      <div class="data">
        <label for="name"
          >room name:<input
            type="text"
            name="name"
            v-model="room.name"
            id="name"
        /></label>
        <label for="description"
          >room description:<input
            type="text"
            name="description"
            id="name"
            v-model="room.description"
        /></label>
      </div>
      <div class="buttons">
        <input v-if="!editing" type="button" value="Edit" @click="editMode()" />
        <input v-if="editing" type="button" value="Save" @click="save()" />
        <input v-if="editing" type="button" value="Cancel" @click="cancel()" />
      </div>
    </form>
    <room-event-list />
  </div>
</template>

<script>
import { HttpClient } from "../../core/HttpClient";
import { RoomService } from "../../service/RoomService";
import RoomEventList from "../RoomEvents/RoomEventList.vue";

const httpClient = new HttpClient();
const roomService = new RoomService(httpClient);

export default {
  components: { RoomEventList },
  data: function () {
    return {
      editing: false,
      room: {},
      roomBackup: {},
    };
  },
  methods: {
    editMode: function () {
      this.editing = true;
      this.roomBackup = this.room;
    },
    save: function () {
      this.editing = false;
      roomService.save(this.room).then(alert("New room data saved"));
    },
    cancel: function () {
      this.editing = false;
      this.room = this.roomBackup;
    },
  },
  created: function () {
    roomService
      .findById(this.$route.params.roomId)
      .then((response) => (this.room = response))
      .catch(console.error);
  },
};
</script>

<style></style>
