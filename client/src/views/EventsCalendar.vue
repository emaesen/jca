<template>
  <div>
    <h1>Calendar of events at JCA</h1>

    <event-calendar/>
  </div>
</template>

<script>
import EventCalendar from "@/components/EventCalendar.vue";

export default {
  name: 'EventsCalendar',
  components: {
    EventCalendar,
  },
  data() {
    return {
    }
  }
};
</script>

<style lang="less" scoped>

</style>
