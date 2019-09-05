<template>
  <div>
    <h1>Venue Info &amp; Booking</h1>

    <h2>Location</h2>

    <p>
      JCA is located at just a few minutes drive from Mount Shasta city:
      <pre>
   Jefferson Center for the Arts
   1124 Pine Grove Dr
   Mt Shasta, CA 96067
      </pre>

      <a href="/img/capture-openstreetmap-jca.png" target="_blank" title="click to open map in new tab">
        <img class="streetmap anima__zoom" src="/img/capture-openstreetmap-jca.png" alt="street map Mount Shasta and JCA"/>
      </a>
    </p>
    <h4>Directions:</h4>
    <div>From the center facing North-East:</div>
    <ol>
      <li>Turn left onto West Alma Street</li>
      <li>Turn right onto Pine Street</li>
      <li>Continue onto Lassen Lane</li>
      <li>Turn right onto Pine Grove Drive</li> 
      <li>Destination is immediately on the right</li>
    </ol>
   
    <div>
      ..or get directions on <link-outbound to="https://www.google.com/maps/dir//1124+Pine+Grove+Dr,+Mt+Shasta,+CA+96067/@41.3204503,-122.3419519,15z">Google Maps</link-outbound>
    </div>

    <submission-section/>

  </div>
</template>

<script>
import SubmissionSection from '@/components/SubmissionSection.vue';
import LinkOutbound from '@/components/LinkOutbound.vue';

export default {
  name: 'VenueInfoBooking',
  components: {
    SubmissionSection,
    LinkOutbound,
  },
  data() {
    return {
    }
  }
};
</script>

<style lang="less" scoped>
@import '../assets/variab.less';

.streetmap {
  margin: 0;
  width: 100%;
}
</style>
