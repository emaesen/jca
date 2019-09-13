<template>
  <div>
    <a :href="mailAction" title="click to send an email to JCA">
    <button class="action">I'd like to volunteer!</button>
    </a>
  </div>
</template>

<script>
import date from './mixins/date.js'

export default {
  name: 'ButtonVolunteer',
  mixins: [date],
  components: {
  },
  props: {
    event: {
      type: Object
    },
  },
  data() {
    return {
      emailTo: "info@jeffersoncenterforthearts.com",
    }
  },
  computed: {
    date() {
      let opts = {shortForm:false, showYear:false};
      let text = this.formattedDate(this.event.date.start, opts);
      if (this.event.date.end && this.event.date.end !== this.event.date.start) {
        text += " - " + this.formattedDate(this.event.date.end, opts);
      }
      return text.replace(/,/g, "");
    },
    emailSubject() {
      return "JCA Volunteer for " + this.event.title + " on " + this.date;
    },
    emailMessage() {
      return "Hi Wendy,\n\nI'd like to volunteer at Jefferson Center for the Arts for event '" + this.event.title + "' on " + this.date + ".\n\n\n" ;
    },
    mailAction() {
      //console.log({subject:this.emailSubject, body:this.message})
      return "mailto:" + this.emailTo 
        + "?subject=" + encodeURIComponent(this.emailSubject) 
        + "&body=" + encodeURIComponent(this.emailMessage);
    },
  }
}
</script>