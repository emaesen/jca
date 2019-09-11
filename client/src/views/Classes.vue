<template>
  <div>
    <h1>Classes at JCA</h1>

    <event-list type="class"/>

    <class-schedule/>

    <class-calendar/>

  </div>
</template>

<script>
import EventList from "@/components/EventList.vue";
import ClassSchedule from "@/components/ClassSchedule.vue";
import ClassCalendar from "@/components/ClassCalendar.vue";

export default {
  name: 'Classes',
  components: {
    EventList,
    ClassSchedule,
    ClassCalendar,
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
