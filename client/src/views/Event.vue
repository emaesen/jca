<template>
  <div class="event-container">

    <event-item v-if="evt" :event="evt" :atPageLevel="true"/>

    <div v-if="!evt" class="center anima__zoom enf">
      <p class="anima__flicker">E V E N T &nbsp; &nbsp; N O T &nbsp; &nbsp; F O U N D</p>
      <p> - - - - - </p>
      <p class="anima__fade-in-bottom delay1">S O</p>
      <p class="anima__fade-in-bottom delay2">S O R R Y</p>
    </div>

  </div>
</template>

<script>
import EventItem from '@/components/EventItem';

import eventsJson from '@/data/events.json';

export default {
  name: 'Event',
  components: {
    EventItem,
  },
  data() {
    return {
      events: eventsJson.events,
      cat: "",
      id: ""
    }
  },
  mounted () {
    this.cat = this.$route.params.cat;
    this.id = this.$route.params.id;
  },
  computed: {
    evt() {
      return this.events
        .filter(e => this.id? e.url === this.id: true)[0];
    },
  },
  methods: {
  },
};
</script>

<style lang="less" scoped>
@import '../assets/variab.less';
.enf {
  margin: 12em 0 30em 0;
}
.delay1 {
  animation-delay: 1s;
}
.delay2 {
  animation-delay: 1.1s;
}

.event-container {
  position: relative;
  display: flex;
  flex: 1;
  box-sizing: border-box;
  justify-content: space-between;
  align-items: stretch;
  flex-wrap: wrap;
  flex-direction: column;
  .event-page {
    box-sizing: border-box;
    margin: .5em 0 4em 0;
  }
}

</style>
