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

import event from './mixins/event.js'

export default {
  name: "ClassCalendar",
  mixins: [event],
  components: {
    CalendarWeek,
  },
  props: {
  },
  data() {
    return { 
    };
  },
  mounted() {
  },
  created() {
  },
  computed: {
    events() {
      return this.evt__filteredEvents(this.weeklyClasses);
    },
    weeklyClasses() {
      return this.evt__recurringEvents(classesJson.classes.weekly);
    },
    noWeeklyEventDates() {
      return classesJson.classes.noClassesDates;
    },
  },
  methods: {
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
