<template>
  <calendar :nrWeeksToShow="nrCalenderWeeks"/>
</template>

<script>
import Calendar from "@/components/Calendar.vue";

export default {
  name: 'ClassSchedule',
  components: {
    Calendar,
  },
  props: {
  },
  data() {
    return {
      nrCalenderWeeks: 5,
    }
  },
  mounted () {
  },
  methods: {
  }
};
</script>

<style lang="less" scoped>
@import '../assets/variab.less';

</style>
