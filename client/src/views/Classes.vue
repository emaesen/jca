<template>
  <div>
    <h1>Classes at JCA</h1>

    <h2>Class schedule</h2>

    <p>Classes at the JCA for the coming {{ nrWeeksToShow }} weeks:

    <class-schedule :nrWeeksToShow="nrWeeksToShow"/>

    <p>
    </p>

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
