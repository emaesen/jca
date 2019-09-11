<template>
  <div>
    <h1>Contact Us</h1>

    <p>
      You may contact us:<br class="spacer">
      ⩺ by phone at <a href="tel:+15309188383">(530) 918-8383</a><br class="spacer">
      ⩺ by email at <a href="mailto:TheJCA@yahoo.com">TheJCA@yahoo.com</a><br class="spacer">
      ⩺ via facebook at the <link-outbound to="https://www.facebook.com/JeffersonCenterfortheArts/">JCA page</link-outbound> or at <link-outbound to="https://www.facebook.com/wendybirdfly">Wendy's page</link-outbound><br class="spacer">
      ⩺ by postal mail at:
      <pre>
   Jefferson Center for the Arts
   1124 Pine Grove Dr
   Mt Shasta, CA 96067
      </pre>

    </p>

    <contact-us-section>
      <h2>We would love to hear from you!</h2>
    </contact-us-section>

    <location-section/>
  </div>
</template>

<script>
import LinkOutbound from '@/components/LinkOutbound.vue';
import ContactUsSection from '@/components/ContactUsSection.vue';
import LocationSection from '@/components/LocationSection.vue';

export default {
  name: 'Contact',
  components: {
    LinkOutbound,
    ContactUsSection,
    LocationSection,
  },
  data() {
    return {
    }
  },
};
</script>

<style lang="less" scoped>

</style>
