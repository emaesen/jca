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

    <week-schedule :classes="classes.weekly"/>

  </div>
</template>

<script>
import LinkOutbound from '@/components/LinkOutbound.vue';
import WeekSchedule from "@/components/WeekSchedule.vue";

import classesJson from '@/data/classes.json';

export default {
  name: 'ClassSchedule',
  components: {
    LinkOutbound,
    WeekSchedule,
  },
  props: {
  },
  data() {
    return {
      classes: classesJson.classes,
    }
  },
  mounted () {
  },
  methods: {
  }
};
</script>

<style lang="less" scoped>
@import '../assets/variab.less';

</style>
