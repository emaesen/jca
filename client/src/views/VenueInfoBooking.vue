<template>
  <div>
    <h1>Venue Info &amp; Booking</h1>

    <h2>Location</h2>

    <p>
      Jefferson Center for the Arts is located at just a few minutes drive from Mount Shasta city center:<br/>
      
      <a href="/img/capture-openstreetmap-jca.png" target="_blank" title="click to open map in new tab">
        <img class="streetmap" src="/img/capture-openstreetmap-jca.png" alt="street map Mount Shasta and JCA"/>
      </a>
    </p>

    <h2>Musicians, Visual Artists, Performers:</h2>
    <p class="emph">
      We welcome your submissions year round.
    </p>
    <p>
      Please send demos, bios, photos and anything else that showcases you to <a href="mailto:TheJCA@yahoo.com">TheJCA@yahoo.com</a> - or simply use the form below to start an email message.<br>
    </p>

    <contact-us-section/>

    <p>
      Alternatively, you may contact us directly at <a href="tel:+15309188383">(530) 918-8383</a> or send your submission by postal mail:
      <pre>
   Jefferson Center for the Arts
   1124 Pine Grove Dr
   Mt Shasta, CA 96067
      </pre>

    </p>
  </div>
</template>

<script>
import ContactUsSection from '@/components/ContactUsSection.vue';

export default {
  name: 'VenueInfoBooking',
  components: {
    ContactUsSection,
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
  margin: 2em auto;
  width: 100%;
}
</style>
