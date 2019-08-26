<template>
  <div class="calendar-container">
    <calendar-head/>
    <calendar-body :events="events" :eventCategories="eventCategories"/>
  </div>
</template>

<script>
import CalendarHead from "./CalendarHead";
import CalendarBody from "./CalendarBody";

export default {
  name: "CalendarMonth",
  components: {
    CalendarHead,
    CalendarBody
  },
  props: {
    events: {
      type: Array
    },
    eventCategories: {
      type: Array
    }
  },
  data() {
    return {};
  },
  mounted() {},
  watch: {},
  methods: {}
};
</script>

<style scoped>
.calendar-container {
  margin: 0 auto;
  border: 1px solid #555;
  padding: 3px;
  border-radius: 5px;
}
</style>