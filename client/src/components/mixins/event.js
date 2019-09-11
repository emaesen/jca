/**
 * mixin with event methods
 */

import date from './date.js'

export default {
  name: "mixins/event",
  mixins: [date],
  data () {
    return {
      // properties to add to the importer of this mixin
    }
  },
  mounted() {
  },
  methods: {
    evt__filteredEvents(events) {
      return events
        .filter(e => !this.isPastDate(
          e.date && e.date.start ? (e.date.end ? e.date.end : e.date.start) : "2052-01-01") )
        .map(e => {
          if(e.date) {
            if(!e.date.end && !e.weekdays) {
              e.date.end = e.date.start
            } 
          }
          return e;})
        .map(e => {e._id = this.evt__uniqueId(); return e});
    },
    evt__recurringEvents(weeklyEvents) {
      let events = [];
      let weekdays = this.dateNames.days.map(d => d.toLowerCase());

      weekdays.forEach((wd,i) => {
        if (weeklyEvents[wd] && weeklyEvents[wd].length > 0) {
          weeklyEvents[wd].forEach(e => {
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
    evt__eventCategories(events) {
      // get list of eventCategories and remove duplicates
      return events
        .map(e => e.category)
        .filter((c, i, s) => s.indexOf(c) === i)
        .sort();
    },
    evt__eventTypes(events) {
      // get list of eventTypes and remove duplicates
      return events
        .map(e => e.type)
        .filter((c, i, s) => s.indexOf(c) === i)
        .sort();
    },
    evt__uniqueId() {
      return Math.random().toString(36).substr(2, 8) 
        + Math.random().toString(36).substr(2, 8);
    },
    evt__mergeArrays(arr1,arr2) {
      let arr = [];
      Array.prototype.push.apply(arr, arr1);
      Array.prototype.push.apply(arr, arr2);
      return arr;
    }
  },
}

