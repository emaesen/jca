<template>
  <div>
    <h3>Sunday</h3>
    <class-list :classes="classes.sunday"/>

    <h3>Monday</h3>
    <class-list :classes="classes.monday"/>

    <h3>Tuesday</h3>
    <class-list :classes="classes.tuesday"/>

    <h3>Wednesday</h3>
    <class-list :classes="classes.wednesday"/>

    <h3>Thursday</h3>
    <class-list :classes="classes.thursday"/>

    <h3>Friday</h3>
    <class-list :classes="classes.friday"/>

    <h3>Saturday</h3>
    <class-list :classes="classes.saturday"/>

  </div>
</template>

<script>
import ClassList from '@/components/ClassList'

export default {
  name: 'WeekSchedule',
  components: {
    ClassList,
  },
  props: {
    classes: {
      type: Object
    },
  },
  data() {
    return {
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

h3 {
  font-size: 120%;
}
</style>
