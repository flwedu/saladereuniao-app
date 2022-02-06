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
export default {
  name: "date-time",
  props: {
    editingMode: Boolean,
    label: String,
    dateTime: [],
  },
  computed: {
    localDateTime() {
      return new Date(...this.dateTime).toISOString().slice(0, 19);
    },
  },
  methods: {
    setLocalDateTime(value) {
      const [, ...dateArray] =
        /(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})/.exec(value);
      this.$emit("setLocalDateTime", dateArray);
    },
  },
};
</script>

<style></style>
