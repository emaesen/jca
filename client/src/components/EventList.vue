<template>
  <grid
    :center="false"
    :draggable="false"
    :sortable="true"
    :items="events"
    :cellHeight="250"
    :cellWidth="400"
    :flexCell="true"
    @change="change"
    @remove="remove"
    @click="click"
    @sort="sort"
    class="event-list"
  >
    <template v-slot:cell="{ item: event }">
      <event-item :event="event"/>
    </template>
  </grid>
</template>

<script>
import Grid from '@/components/Grid';
import EventItem from '@/components/EventItem';

import eventsJson from '@/data/events.json';

export default {
  name: 'EventList',
  components: {
    Grid,
    EventItem
  },
  data() {
    return {
      events: eventsJson.events,
      cat: ["music", "theater", "class", "arts"]
    }
  },
  mounted () {
    /* event: {
     *   title: "",
     *   performer: "",
     *   price: "",
     *   description: "",
     *   date: { start: "", end: "" },
     *   time: { start: "", end: "" },
     *   category: "",
     * }
     */
  },
  methods: {
    click ({ items, index }) {
      let value = items.find(v => v.index === index)
      this.selected = value.item
      console.log(this.selected)
    },
    change (event) {
      console.log('change', event)
    },
    remove (event) {
      console.log('remove', event)
    },
    sort (event) {
      console.log('sort', event)
    }
  }
};
</script>

<style lang="less" scoped>
@import '../assets/variab.less';


</style>
