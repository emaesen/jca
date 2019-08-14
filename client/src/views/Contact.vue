<template>
  <div>
    <h1>Contact Us</h1>

    <h2>We would love to hear from you!</h2>

    <div v-if="isSubmitDone">
      Thank you!! Your email has been sent and we look forward to contacting you soon!
    </div>

    <div v-if="!isSubmitDone">
      <form method="post" action="/contact-us/">
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

        <input type="hidden" value="et_contact_proccess" name="contactform_submit">
        <input type="text" value="" name="contactform_validate" />

        <div>
          <button type="submit">SEND</button>
        </div>

        <input type="hidden" id="nonce" name="nonce" value="1acfcda09d" />
      </form>
    </div>

    <h2>Find Us</h2>
    <p>
      1124 Pine Grove Dr, Mt Shasta, CA  96067 🔹 530-918-8383
    </p>
  </div>
</template>

<script>
  export default {
    name: 'Contact',
    data() {
    return {
      isSubmitDone: false
    }
  }
  };
</script>

<style lang="less" scoped>
  label, input, textarea {
    display: block;
  }
</style>
