<template>
  <section id="calendar">

    <transition name="fade" mode="out-in">
      <calendar-day
        v-if="dayInFocus"
        key="day"
        :date="dayInFocus"
        :events="events"
        :eventCategories="eventCategories"
      />
      <calendar-month
        v-if="!dayInFocus"
        key="month"
        :events="events"
        :eventCategories="eventCategories"
      />
    </transition>
  </section>
</template>

<script>
import CalendarMonth from "./CalendarMonth";
import CalendarDay from "./CalendarDay";
import { mapState, mapGetters, mapActions } from "vuex";

export default {
  name: "Calendar",
  components: {
    CalendarMonth,
    CalendarDay,
  },
  props: {
  },
  data() {
    return { 
      eventCategories: [] 
    };
  },
  mounted() {
  },
  created() {
    
  },
  computed: {
    ...mapGetters({ calendarState: "calendar" }),
    dayInFocus() {
      return this.calendarState.dayInFocus;
      return null;
    },
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

<style>
h2.calendar {
  display: inline-block;
  margin-right: 1em;
  vertical-align: top;
}
#calendar .controls {
  cursor: pointer;
  display: inline-block;
  position: relative;
  top: -5px;
}
#calendar {
  min-height: 48em;
}
.fade-enter-active,
.fade-leave-active {
  transition: all 0.4s ease-in-out, transform 0.4s ease-in-out;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
  transform: translateY(-9px);
}
</style>
