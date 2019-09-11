<template>
  <div class="spacious">

    <calendar-week 
      :events="events" 
    />

  </div>
</template>

<script>
import CalendarWeek from "./CalendarWeek";

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
  name: "ClassCalendar",
  mixins: [date],
  components: {
    CalendarWeek,
  },
  props: {
  },
  data() {
    return { 
      nrWeeksToShow: 1,
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
      // let allEvents = mergeArrays(eventsJson.events, this.recurringEvents);
      let allEvents = this.recurringEvents;
      let preparedEvents = allEvents
        .filter(e => !this.isPastDate(
          e.date && e.date.start ? (e.date.end ? e.date.end : e.date.start) : "2052-01-01") )
        .map(e => {
          if(e.date) {
            if(!e.date.end && !e.weekdays) {
              e.date.end = e.date.start
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

.event_cat-,
.btn_cat- {
  .gradient-jewel-5-1();
}
.event_cat-music,
.btn_cat-music {
  .gradient-jewel-1-1();
 }
.event_cat-theater,
.btn_cat-theater {
  .gradient-jewel-2-1();
}
.event_cat-arts,
.btn_cat-arts {
  .gradient-jewel-3-1();
}
.event_cat-dance,
.btn_cat-dance {
  .gradient-jewel-4-1();
}

</style>