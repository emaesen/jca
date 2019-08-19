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

    <h2>We would love to hear from you!</h2>

    <div v-if="isSubmitDone">
      Thank you!! Your email has been sent and we look forward to contacting you soon!
    </div>

    <div v-if="!isSubmitDone">
      <form method="post" action="mailto:info@jeffersoncenterforthearts.com">
        <p data-id="name" data-type="input">
          <label for="contact_name">Name</label>
          <input type="text" id="contact_name" value="" name="contact_name" data-required_mark="required" data-field_type="input" data-original_id="name" placeholder="Name">
        </p>
        
        <p data-id="email" data-type="email">
          <label for="contact_email">Email Address</label>
          <input type="text" id="contact_email" value="" name="contact_email" data-required_mark="required" data-field_type="email" data-original_id="email" placeholder="Email Address">
        </p>
        
        <p data-id="message" data-type="text">
          <label for="contact_message">Message</label>
          <textarea name="contact_message" id="contact_message" data-required_mark="required" data-field_type="text" data-original_id="message" placeholder="Message"></textarea>
        </p>

        <input type="hidden" value="contact_proccess" name="contactform_submit">

        <div>
          <button type="submit">SEND</button>
        </div>
      </form>
    </div>

    <h2>Find Us</h2>
    <p>
      <link-outbound to="https://www.google.com/maps/place/1124+Pine+Grove+Dr,+Mt+Shasta,+CA+96067/@41.3204589,-122.3353857,17z">1124 Pine Grove Dr, Mt Shasta, CA  96067</link-outbound> 🔹 <a href="tel:+15309188383">(530) 918-8383</a>
    </p>
  </div>
</template>

<script>
import LinkOutbound from '@/components/LinkOutbound.vue';

export default {
  name: 'Contact',
  data() {
    return {
      isSubmitDone: false
    }
  },
  components: {
    LinkOutbound
  },
};
</script>

<style lang="less" scoped>
label, input, textarea {
  display: block;
}
</style>
