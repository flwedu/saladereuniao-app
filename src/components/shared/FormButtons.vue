<template>
  <div class="buttons">
    <input
      id="button__edit"
      class="button"
      v-if="!editingMode"
      type="button"
      value="Edit"
      @click="$emit('enterEditingMode')"
    />
    <input
      id="button__save"
      class="button"
      v-if="editingMode"
      type="button"
      value="Save"
      @click="$emit('save')"
    />
    <input
      id="button__cancel"
      class="button"
      v-if="editingMode"
      type="button"
      value="Cancel"
      @click="$emit('cancel')"
    />
  </div>
</template>

<script>
export default {
  name: "form-buttons",
  props: {
    editingMode: Boolean,
  },
};
</script>

<style>
/* adjusting the separation of the buttons divs */
.card > .buttons {
  margin-top: 1rem;
  display: flex;
  justify-content: space-around;
}

.button {
  font-weight: 500;
  width: 6rem;
  height: 2rem;
  background: var(--color-main);
  color: var(--color-text-light);
  border: transparent 1px;
  border-radius: 3px;
}

/* Button colors */
#button__save {
  background: var(--color-sucess);
}

#button__cancel {
  background: var(--color-danger);
}
</style>
