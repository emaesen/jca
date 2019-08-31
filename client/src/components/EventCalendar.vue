<template>
  <div>

    <p> 
      An overview of upcoming events and classes at the JCA:
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

function uniqueId() {
  return Math.random().toString(36).substr(2, 8) 
    + Math.random().toString(36).substr(2, 8);
}
function mergeArrays(arr1,arr2) {
  let arr = [];
  Array.prototype.push.apply(arr, arr1);
  Array.prototype.push.apply(arr, arr2);
  return arr;
}

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
      let allEvents = mergeArrays(eventsJson.events, this.recurringEvents);
      let preparedEvents = allEvents
        .filter(e => !this.isPastDate(
          e.date && e.date.start ? (e.date.end ? e.date.end : e.date.start) : "2052-01-01") )
        .map(e => {
          if(e.date) {
            if(!e.date.end) {
              e.date.end=e.date.start
            } 
          }
          return e;})
        .map(e => {e._id = uniqueId(); return e});

      return preparedEvents;
    },
    recurringEvents() {
      let events = [];
      let weeklyClasses = classesJson.classes.weekly;
      let weekdays = this.dateNames.days.map(d => d.toLowerCase());

      weekdays.forEach((wd,i) => {
        if (weeklyClasses[wd] && weeklyClasses[wd].length > 0) {
          weeklyClasses[wd].forEach(e => {
            e.weekdays=[i]; 
            e.type="class"; 
            if (!e.date) {
              e.date = {};
            }
            events.push(e);
          })
        }
      })

      return events;
    },
    noWeeklyEventDates() {
      return classesJson.classes.noClassesDates;
    },
  },
  methods: {
    setEventCategories() {
      // get list of eventCategories and remove duplicates
      this.eventCategories = this.events
        .map(e => e.category)
        .filter((c, i, s) => s.indexOf(c) === i)
        .sort();
    },
    setEventTypes() {
      // get list of eventTypes and remove duplicates
      this.eventTypes = this.events
        .map(e => e.type)
        .filter((c, i, s) => s.indexOf(c) === i)
        .sort();
    },
  }
};
</script>

<style lang="less">
@import '../assets/variab.less';

.event_cat-music {
  .gradient-jewel-1-1();
 }
.event_cat-theater {
  .gradient-jewel-2-1();
}
.event_cat-arts {
  .gradient-jewel-3-1();
}
.event_cat-class {
  .gradient-jewel-4-1();
}

</style>
