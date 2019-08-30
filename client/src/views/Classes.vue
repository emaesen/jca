<template>
  <div>
    <h1>Classes at JCA</h1>

    <class-schedule :nrWeeksToShow="nrWeeksToShow"/>

  </div>
</template>

<script>
import ClassSchedule from "@/components/ClassSchedule.vue";

export default {
  name: 'Classes',
  components: {
    ClassSchedule,
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
