<template>
  <div>
    <h1>Venue Info &amp; Booking</h1>

    <location-section/>

    <submission-section/>

  </div>
</template>

<script>
import LocationSection from '@/components/LocationSection.vue';
import SubmissionSection from '@/components/SubmissionSection.vue';

export default {
  name: 'VenueInfoBooking',
  components: {
    LocationSection,
    SubmissionSection,
  },
  data() {
    return {
    }
  }
};
</script>

<style lang="less" scoped>
@import '../assets/variab.less';
</style>
