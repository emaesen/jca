<template>
  <div class="class-list">
    <p v-if="noClasses" class="compact">
      No weekly classes on this day of the week.
    </p>
    <event-item 
      v-for="(cl, index) in filteredClasses" 
      :key="cl.title + cl.time.start" 
      :event="cl" 
      type="class" 
      recurrence="weekly" 
      class="anima__zoom"
      :style="'animation-delay:' + index/5 + 's;animation-fill-mode: backwards;'"
    />
  </div>
</template>

<script>
import EventItem from '@/components/EventItem'

import date from './mixins/date.js'

export default {
  name: 'ClassesForWeekday',
  mixins: [date],
  components: {
    EventItem
  },
  props: {
    classes: {
      type: Array
    }
  },
  data() {
    return {
    }
  },
  mounted () {
  },
  methods: {
    sortByTime(a, b) {
      return this.ensureDate(a.time.start, "time") -  this.ensureDate(b.time.start, "time");
    },
  },
  computed: {
    filteredClasses() {
      return this.classes
        .filter(cl => cl.date ? !this.isPastDate(cl.date.end ? cl.date.end : cl.date.start) : true )
        .sort((a, b) => this.sortByTime(a, b));
    },
    noClasses() {
      return this.filteredClasses.length === 0;
    }
  }
};
</script>

<style lang="less" scoped>
@import '../assets/variab.less';

p.compact {
  margin:0 0 .5em 0;
}
.class-list {
  position: relative;
  display: flex;
  flex: 1;
  box-sizing: border-box;
  justify-content: space-between;
  align-items: stretch;
  flex-wrap: wrap;
  .event {
    box-sizing: border-box;
    width: 48%;
    margin: 10px 5px;
  }
}
@media all and (max-width: 650px) {
  .class-list {
    flex-direction: column;
    justify-content: left;
    .event {
      width: 99%;
      margin: 10px 0;
    }
  }
}
</style>
