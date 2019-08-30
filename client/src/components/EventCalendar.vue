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


export default {
  name: "EventCalendar",
  components: {
    Calendar,
  },
  props: {
  },
  data() {
    return { 
      nrWeeksToShow: 4,
      eventCategories: [],
    };
  },
  mounted() {
  },
  created() {
    
  },
  computed: {

    events() {
//      return this.user ? this.findEventsInStore({ query: {} }).data : [];
      return [];
    },
  },
  methods: {
    setEventCategories() {
      // get list of user-defined eventCategories and remove duplicates
      this.eventCategories = this.events
        .map(e => e.category)
        .filter((c, i, s) => s.indexOf(c) === i)
        .sort();
      //console.log({ eventCategories: this.eventCategories });
    }
  }
};
</script>

<style lang="less" scoped>

</style>
