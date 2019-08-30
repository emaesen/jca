<template>
  <div>
    <h1>Classes at JCA</h1>

    <event-list type="class"/>

    <class-schedule :nrWeeksToShow="nrWeeksToShow"/>
  </div>
</template>

<script>
import ClassSchedule from "@/components/ClassSchedule.vue";
import EventList from "@/components/EventList.vue";

export default {
  name: 'Classes',
  components: {
    ClassSchedule,
    EventList,
  },
  data() {
    return {
      nrWeeksToShow: 5,
    }
  }
};
</script>

<style lang="less" scoped>
@import '../assets/variab.less';
  
</style>
