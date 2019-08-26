<template>
  <grid
    :center="false"
    :draggable="false"
    :sortable="true"
    :items="filteredEvents"
    :cellHeight="275"
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

import date from './mixins/date.js'

export default {
  name: 'EventList',
  mixins: [date],
  components: {
    Grid,
    EventItem
  },
  props: {
    cat: {
      type: String,
    }
  },
  data() {
    return {
      events: eventsJson.events,
      categories: ["music", "theater", "class", "arts"]
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
  computed: {
    filteredEvents() {
      return this.events
        .filter(event => this.cat? event.cat === this.cat: true)
        .filter(event => !this.isPastDate(event.date.start) )
        .sort((a, b) => this.sortByDate(a, b));
    },
  },
  methods: {
    sortByDate(a, b) {
      // TODO: take event time into account
      return new Date(a.date.start) - new Date(b.date.start);
    },
    click ({ items, index }) {
      let value = items.find(v => v.index === index)
      this.selected = value.item
      //console.log(this.selected)
    },
    change (event) {
      //console.log('change', event)
    },
    remove (event) {
      //console.log('remove', event)
    },
    sort (event) {
      //console.log('sort', event)
    }
  }
};
</script>

<style lang="less" scoped>
@import '../assets/variab.less';


</style>
