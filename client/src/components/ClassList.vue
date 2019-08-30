<template>
  <div class="class-list">
    <p v-if="noClasses" class="compact">
      No weekly classes on this day.
    </p>
    <event-item  v-for="cl in classes" v-bind:key="cl.title + cl.time.start" :event="cl" type="class" recurrence="weekly"/>
  </div>
</template>

<script>
import EventItem from '@/components/EventItem'

export default {
  name: 'ClassList',
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
  computed: {
    noClasses() {
      return this.classes.length === 0;
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
}
@media all and (max-width: 650px) {
  .class-list {
    flex-direction: column;
    align-items: center;
    .event {
      box-sizing: border-box;
    }
  }
}
</style>
