<template>
  <div>
    <h1>Contact Us</h1>

    <div>
      You may contact Wendy James at JCA:<br class="spacer">
      <ul>
        <li class="anima__fade-in-right del1">
          by phone at <a href="tel:+15309188383">(530) 918-8383</a>
        </li>
        <li class="anima__fade-in-right del2">
          by email at <a href="mailto:TheJCA@yahoo.com">TheJCA@yahoo.com</a>
        </li>
        <li class="anima__fade-in-right del3">
          via facebook at the 
          <link-outbound to="https://www.facebook.com/JeffersonCenterfortheArts/">JCA page</link-outbound> 
          or at 
          <link-outbound to="https://www.facebook.com/wendybirdfly">Wendy's page</link-outbound>
        </li>
        <li class="anima__fade-in-right del4">
          by postal mail at:
          <postal-address/>
        </li>
      </ul>
    </div>

    <contact-us-section>
      <h2>We would love to hear from you!</h2>
    </contact-us-section>

    <location-section/>
  </div>
</template>

<script>
import LinkOutbound from '@/components/LinkOutbound.vue';
import PostalAddress from '@/components/PostalAddress.vue';
import ContactUsSection from '@/components/ContactUsSection.vue';
import LocationSection from '@/components/LocationSection.vue';

export default {
  name: 'Contact',
  components: {
    LinkOutbound,
    PostalAddress,
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
@import '../assets/variab.less';

li {
  margin-bottom: .5em;
}
li::before {
  content: "⩺"; 
  color: @color_text_header;
}
.del1 {
  animation-delay: .5s;
}
.del2 {
  animation-delay: .8s;
}
.del3 {
  animation-delay: 1.1s;
}
.del4 {
  animation-delay: 1.4s;
}
</style>
