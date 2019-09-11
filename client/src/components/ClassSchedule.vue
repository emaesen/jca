<template>
  <div>
    <h3>JCA's weekly class schedule:</h3>

    <p>
      Studio tuition is $55 per month. Multiple class and family discounts too!
    </p>
    <p>
      Please visit our sister site <link-outbound to="//shastastudios.net/">Shasta Studios School of Theatrical Dance</link-outbound> for additional information and to register.
    </p>

    <p class="spacious">
      Classes for current season (September 3 to June 21):
    </p>

    <week-schedule :classes="classes"/>

  </div>
</template>

<script>
import LinkOutbound from '@/components/LinkOutbound.vue';
import WeekSchedule from "@/components/WeekSchedule.vue";

import classesJson from '@/data/classes.json';

import event from './mixins/event.js'

export default {
  name: 'ClassSchedule',
  mixins: [event],
  components: {
    LinkOutbound,
    WeekSchedule,
  },
  props: {
  },
  data() {
    return {
    }
  },
  mounted () {
    this.weeklyClasses;
  },
  computed: {
    classes() {
      // make a (dummy) call to event functions
      // (without using the result)
      // to set weekdays[] and _id properties
      this.evt__filteredEvents(this.weeklyClasses);
      return classesJson.classes.weekly;
    },
    weeklyClasses() {
      return this.evt__recurringEvents(classesJson.classes.weekly);
    },
  },
  methods: {
  }
};
</script>

<style lang="less" scoped>
@import '../assets/variab.less';

</style>
