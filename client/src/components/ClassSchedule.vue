<template>
  <div>
    <h3>JCA's weekly class schedule:</h3>

    <week-schedule :classes="classes.weekly"/>

  </div>
</template>

<script>
import WeekSchedule from "@/components/WeekSchedule.vue";

import classesJson from '@/data/classes.json';

export default {
  name: 'ClassSchedule',
  components: {
    WeekSchedule,
  },
  props: {
  },
  data() {
    return {
      classes: classesJson.classes,
      categories: ["music", "theater", "class", "arts"]
    }
  },
  mounted () {
     /* class: {
     *   title: "",
     *   presenter: "",
     *   price: "",
     *   description: "",
     *   date: { start: "", end: "" },
     *   time: { start: "", end: "" },
     *   cat: "",
     * }
     */
  },
  methods: {
  }
};
</script>

<style lang="less" scoped>
@import '../assets/variab.less';

</style>
