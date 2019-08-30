<template>
  <div>

    <p> 
      All events and classes at the JCA in the coming {{ nrWeeksToShow }} weeks:
    </p>

    <calendar 
      :nrWeeksToShow="nrWeeksToShow"
      :events="events"
    />

  </div>
</template>

<script>
import Calendar from "./Calendar";

import eventsJson from '@/data/events.json';
import classesJson from '@/data/classes.json';

import date from './mixins/date.js'

export default {
  name: "EventCalendar",
  mixins: [date],
  components: {
    Calendar,
  },
  props: {
  },
  data() {
    return { 
      nrWeeksToShow: 4,
      eventCategories: [],
      eventTypes: [],
    };
  },
  mounted() {
    this.setEventCategories();
    this.setEventTypes();
  },
  created() {
    
  },
  computed: {
    events() {
      return eventsJson.events
        .filter(e => !this.isPastDate(e.date.end ? e.date.end : e.date.start) )
        .map(e => {if(!e.date.end){e.date.end=e.date.start} return e;});
    },
    weeklyEvents() {
      return classesJson.classes.weekly;
    },
    noWeeklyEventDates() {
      return classesJson.classes.noClassesDates;
    }
  },
  methods: {
    setEventCategories() {
      // get list of eventCategories and remove duplicates
      this.eventCategories = this.events
        .map(e => e.category)
        .filter((c, i, s) => s.indexOf(c) === i)
        .sort();
      console.log({ eventCategories: this.eventCategories });
    },
    setEventTypes() {
      // get list of eventTypes and remove duplicates
      this.eventTypes = this.events
        .map(e => e.type)
        .filter((c, i, s) => s.indexOf(c) === i)
        .sort();
      console.log({ eventTypes: this.eventTypes });
    },
  }
};
</script>

<style lang="less" scoped>

</style>
