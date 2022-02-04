<template>
  <div>
    <span>{{ label }}</span>
    <label class="form-field">
      <input
        type="datetime-local"
        name="date"
        id="date"
        :value="localDateTime"
        :readonly="!editingMode"
    /></label>
  </div>
</template>

<script>
export default {
  name: "date-time",
  props: {
    editingMode: Boolean,
    label: String,
    dateTime: [],
  },
  data() {
    return {
      localDateTime: new Date(...this.dateTime).toISOString().slice(0, 19),
    };
  },
};
</script>

<style></style>
