<template>
  <calendar :nrWeeksToShow="nrWeeksToShow"/>
</template>

<script>
import Calendar from "@/components/Calendar.vue";

export default {
  name: 'ClassSchedule',
  components: {
    Calendar,
  },
  props: {
    nrWeeksToShow: {
      type: Number
    },
  },
  data() {
    return {
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
