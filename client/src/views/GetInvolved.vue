<template>
  <div class="section">
    <h1>Get Involved!</h1>

    <submission-section/>

    <h2>Volunteers:</h2>
    <p>
      <span class="emph">Please <router-link to="contact">contact Wendy</router-link> if you are interested in volunteering at the JCA.</span>
      We can always use more help with fund-raising, grant writing, painting, design and the like.<br class="spacer">
      It takes a village…<br class="spacer">
      Lets make some MAGIC!
    </p>
    <h4>…Volunteers for events</h4>
    <p>
      We also ask for volunteers for each event, folks to run the door, concessions etc..<br class="spacer">
      Volunteers get free admission to the event, food, drink and lots of love!<br class="spacer">
      Click on the "volunteer" button in any of the <router-link to="events">event listings</router-link> to send an email to Wendy if you are interested in volunteering for that particlar event.
    </p>


    <h2>Donate:</h2>
    <p>
      TAX-DEDUCTIBLE DONATIONS can be made on behalf of JCA through the Siskiyou County Arts Council, at <link-outbound to="http://siskiyouarts.org/get-involved/donation-form/">siskiyouarts.org</link-outbound>. 
      Siskiyou County Arts Council, as a 501(c)(3) nonprofit organization, is the fiscal sponsor for Jefferson Center for the Arts. 
      Thank you!
    </p>
    <p>
      Or 
      <link-outbound to="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=D5J6TL8C94YE2&source=url">donate via PayPal</link-outbound>
    </p>


  </div>
</template>

<script>
import SubmissionSection from '@/components/SubmissionSection.vue';

import LinkOutbound from '@/components/LinkOutbound.vue';

export default {
  name: 'GetInvolved',
  components: {
    SubmissionSection,
    LinkOutbound,
  },
};
</script>