<template>
  <div class="class-list">
    <p v-if="noClasses" class="compact">
      {{ day }} has no weekly classes.
    </p>
    <event-item 
      v-for="(cl, index) in classes" 
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

export default {
  name: 'ClassesForWeekday',
  components: {
    EventItem
  },
  props: {
    classes: {
      type: Array
    },
    day: {
      type: String
    }
  },
  data() {
    return {
    }
  },
  mounted () {
  },
  methods: {
  },
  computed: {
    noClasses() {
      return this.classes.length === 0;
    }
  }
};
</script>

<style lang="less" scoped>
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
