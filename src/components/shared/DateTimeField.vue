<template>
  <div>
    <span>{{ label }}</span>
    <label class="form-field">
      <input
        type="datetime-local"
        name="date"
        id="date"
        :value="localDateTime"
        @input="setLocalDateTime($event.target.value)"
        :readonly="!editingMode"
    /></label>
  </div>
</template>

<script>
import { dateParser } from "../../utils/dateParser"

export default {
  name: "date-time",
  props: {
    editingMode: Boolean,
    label: String,
    dateTime: [],
  },
  computed: {
    localDateTime() {
      return dateParser(this.dateTime).toString();
    },
  },
  methods: {
    setLocalDateTime(value) {
      const dateArray = dateParser(value).toArray();
      this.$emit("setLocalDateTime", dateArray);
    },
  },
};
</script>

<style>
input[type="datetime-local"]{
  padding: 2px;
}
</style>
