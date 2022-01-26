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
            :readonly="!editing"
        /></label>
        <label for="description" class="form-field"
          >room description:<textarea
            type="text"
            name="description"
            id="description"
            rows="4"
            v-model="room.description"
            :readonly="!editing"
          />
        </label>
      </div>
      <div class="buttons">
        <input
          id="button__edit"
          class="button"
          v-if="!editing"
          type="button"
          value="Edit"
          @click="editMode()"
        />
        <input
          id="button__save"
          class="button"
          v-if="editing"
          type="button"
          value="Save"
          @click="save()"
        />
        <input
          id="button__cancel"
          class="button"
          v-if="editing"
          type="button"
          value="Cancel"
          @click="cancel()"
        />
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

<style scoped>
/* Adjusting the height inherited from RoomCard component */
.card {
  height: 16rem;
}

.card > .body {
  grid-template-rows: auto;
}

/* adjusting the separation of the buttons divs */
.card > .buttons {
  margin-top: 1rem;
}

input[type="text"],
textarea {
  border: 1px dotted var(--color-border);
  padding: 0.3rem;
  height: auto;
  resize: none;
  text-align: center;
}

.form-field {
  display: flex;
  flex-direction: column;
}

/* Button colors */
#button__save {
  background: var(--color-sucess);
}

#button__cancel {
  background: var(--color-danger);
}
</style>
