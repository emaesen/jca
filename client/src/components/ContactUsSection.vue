<template>
  <div>

    <h2>We would love to hear from you!</h2>

    <div>
      <form method="post" :action="mailAction">
        <p>
          <label for="name">Your Name</label>
          <input 
            type="text" 
            id="name" 
            name="name"
            v-model="name" 
            placeholder="Name">
        </p>
        <p>
          <label for="message">Your Message</label>
          <textarea
            id="message"
            name="message"
            v-model="message"
            placeholder="Message"></textarea>
        </p>

        <div>
          <button type="submit" :class="['action', {disabled:disableSubmit}]" :disabled=disableSubmit @click="submitForm">SEND</button><span v-if="!disableSubmit" class="deemph clarify">via your email program</span>
        </div>
      </form>

      <div v-if="isSubmitDone" class="thanks">
        Thank you!! Your email program should open, allowing you to email your message from your current address.
        <div class="deemph">(Re-directing to your email program ensures we get a valid email address to reply to, you get to keep a copy of your send message, and it adds a hurdle for those pesky spam bots)</div>
        <div class="deemph">If your email program did not open, you can contact JCA directly at <a :href="'mailto:' + emailTo">{{ emailTo }}</a></div>
      </div>

    </div>

  </div>
</template>

<script>
export default {
  name: 'FormContactUs',
  components: {
  },
  data() {
    return {
      isSubmitDone: false,
      emailTo: "info@jeffersoncenterforthearts.com",
      name: null,
      message: null
    }
  },
  computed: {
    disableSubmit() {
      return !(this.name && this.message) || this.isSubmitDone;
    },
    emailSubject() {
      return "JCA Contact Request - from " + this.name;
    },
    mailAction() {
      //console.log({subject:this.emailSubject, body:this.message})
      return "mailto:" + this.emailTo 
        + "?subject=" + encodeURIComponent(this.emailSubject) 
        + "&body=" + encodeURIComponent(this.message);
    },
  },
  methods: {
    submitForm() {
      setTimeout(() => {
        this.isSubmitDone = true;
      }, 100);
    }
  },
  watch: {
    name() {
      this.isSubmitDone = false;
    },
    message() {
      this.isSubmitDone = false;
    },
  }
};
</script>

<style lang="less" scoped>
@import '../assets/anima.less';

.action:not(.disabled) {
  .anima__flicker();
}
.clarify {
  display: inline-block;
  .anima__fade-in-bounce();
  animation-delay: 2s;
}
.thanks {
  .anima__zoom();
}

label, input, textarea {
  display: block;
}
</style>
