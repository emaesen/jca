<template>
  <div>
    <h1>Classes at JCA</h1>

    <h2>Class schedule</h2>

    <class-schedule/>

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
    }
  }
};
</script>

<style lang="less" scoped>
@import '../assets/variab.less';
  
</style>
