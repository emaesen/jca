<template>
  <div class="calendar-container">
    <calendar-head
      :hideControls="hideControls"/>
    <calendar-body 
      :nrWeeksToShow="nrWeeksToShow"
      :events="events" 
      :eventCategories="eventCategories"
    />
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
    },
    nrWeeksToShow: {
      type: Number
    },
  },
  data() {
    return {};
  },
  mounted() {},
  watch: {},
  computed: {
    hideControls() {
      //hide calendar navigation controls
      // if a fixed number of weeks is to be shown
      return this.nrWeeksToShow > 0;
    }
  }
};
</script>

<style lang="less" scoped>
.calendar-container {
  margin: 0 auto;
  padding: 3px;
}
</style>