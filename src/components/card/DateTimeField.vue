<template>
  <div>
    <span>{{ label }}</span>
    <label class="form-field">
      Date:
      <input
        type="date"
        name="date"
        id="date"
        :value="localDate"
        :readonly="editing"
    /></label>
    <label class="form-field">
      Time:
      <input
        type="time"
        name="time"
        id="time"
        :value="localTime"
        :readonly="editing"
      />
    </label>
  </div>
</template>

<script>
export default {
  name: "date-time",
  props: {
    editing: Boolean,
    label: String,
    dateTime: [],
  },
  computed: {
    localDate() {
      const [year, month, day] = this.dateTime;
      return new Date(year, month, day).toLocaleDateString();
    },
    localTime() {
      const [, , , hour, minuts] = this.dateTime;
      return `${hour}:${minuts}`;
    },
  },
};
</script>

<style></style>
