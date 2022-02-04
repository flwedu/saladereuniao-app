<template>
  <div class="buttons">
    <input
      id="button__edit"
      class="button"
      v-if="!editingMode"
      type="button"
      value="Edit"
      @click="enterEditingMode()"
    />
    <input
      id="button__save"
      class="button"
      v-if="editingMode"
      type="button"
      value="Save"
      @click="save()"
    />
    <input
      id="button__cancel"
      class="button"
      v-if="editingMode"
      type="button"
      value="Cancel"
      @click="cancel()"
    />
  </div>
</template>

<script>
export default {
  name: "form-buttons",
  props: {
    editingMode: Boolean,
  },
  methods: {
    enterEditingMode() {
      this.$emit("enterEditingMode");
    },
    save() {
      this.$emit("save");
    },
    cancel() {
      this.$emit("cancel");
    },
  },
};
</script>

<style>
/* Button colors */
#button__save {
  background: var(--color-sucess);
}

#button__cancel {
  background: var(--color-danger);
}
</style>
