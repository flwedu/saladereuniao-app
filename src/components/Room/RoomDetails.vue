<template>
  <div v-if="room">
    <form action="" method="post" class="card">
      <div class="head"><span>Room Details</span></div>
      <div class="body">
        <label for="name" class="form-field"
          >room name:<input
            type="text"
            name="name"
            id="name"
            v-model="room.name"
            :readonly="!editingMode"
        /></label>
        <label for="description" class="form-field"
          >room description:<textarea
            type="text"
            name="description"
            id="description"
            rows="4"
            v-model="room.description"
            :readonly="!editingMode"
          />
        </label>
      </div>
      <form-buttons
        :editingMode="editingMode"
        @save="save()"
        @enterEditingMode="enterEditingMode()"
        @cancel="cancel()"
      />
    </form>
    <p>This is a list of all events in this room:</p>
    <room-event-list />
  </div>
</template>

<script>
import { HttpClient } from "../../core/HttpClient";
import { RoomService } from "../../service/RoomService";
import FormButtons from "../shared/FormButtons.vue";
import RoomEventList from "../RoomEvents/RoomEventList.vue";

const httpClient = new HttpClient();
const roomService = new RoomService(httpClient);

export default {
  components: { RoomEventList, FormButtons },
  data: function () {
    return {
      editingMode: false,
      room: {},
      roomBackup: String,
    };
  },
  methods: {
    enterEditingMode: function () {
      this.editingMode = true;
      this.roomBackup = JSON.stringify(this.room);
    },
    save: function () {
      roomService
        .update(this.room.id, this.room)
        .then(console.log)
        .catch(console.error);
      this.editingMode = false;
    },
    cancel: function () {
      this.room = JSON.parse(this.roomBackup);
      this.editingMode = false;
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

<style scoped>
/* Adjusting the height inherited from RoomCard component */
.card {
  height: 16rem;
}

.card > .body {
  grid-template-rows: auto;
}

input[type="text"],
textarea {
  border: 1px dotted var(--color-border);
  padding: 0.3rem;
  height: auto;
  resize: none;
}

.form-field {
  display: flex;
  flex-direction: column;
}
</style>
