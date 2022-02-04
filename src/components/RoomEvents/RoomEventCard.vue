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
      <date-time
        :label="'Starting at :'"
        :dateTime="roomEvent.startingTime"
        :editingMode="editingMode"
      />
      <date-time
        :label="'Ending at :'"
        :dateTime="roomEvent.endingTime"
        :editingMode="editingMode"
      />
    </div>
    <form-buttons
      :editingMode="editingMode"
      @save="save()"
      @enterEditingMode="enterEditingMode()"
      @cancel="cancel()"
    />
  </div>
</template>

<script>
import DateTimeField from "../card/DateTimeField.vue";
import FormButtons from "../card/FormButtons.vue";
export default {
  name: "room-event-card",
  components: {
    "date-time": DateTimeField,
    "form-buttons": FormButtons,
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
      startingTime: Date,
      endingTime: Date,
      roomId: Number,
    },
  },
  methods: {
    enterEditingMode() {
      this.editingMode = true;
    },
    save() {
      this.editingMode = false;
    },
    cancel() {
      this.editingMode = false;
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
