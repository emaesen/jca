<template>
  <div>
    <h1>Classes at JCA</h1>

    <event-list type="class"/>

    <class-schedule/>

    <class-calendar/>

  </div>
</template>

<script>
import ClassSchedule from "@/components/ClassSchedule.vue";
import ClassCalendar from "@/components/ClassCalendar.vue";
import EventList from "@/components/EventList.vue";

export default {
  name: 'Classes',
  components: {
    ClassSchedule,
    ClassCalendar,
    EventList,
  },
  data() {
    return {
    }
  }
};
</script>

<style lang="less" scoped>
@import '../assets/variab.less';
  
</style>
