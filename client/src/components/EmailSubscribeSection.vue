<template>
  <div>
    <h2>Join our email list!</h2>

    <p class="script center anima__flicker-subtle">
      Join our list to keep posted on upcoming events you won't want to miss.
    </p>

    <div class="ls-outer group" v-show="!isFormSubmitted" key="form">
      <div class="ls-inner ls-inner-desc group">
        <p class="ls-inner ls-inner-img">
          <img src="/img/jca-logo-lg.png" alt="JCA logo" class="logo_lg anima__flicker-subtle anima__-pause-on-hover"/>
        </p>
        <p class="ls-inner ls-inner-text">
          Join our mailing list to receive the latest events and updates from our team.<br class="spacer">
          <br/>
          We respect your privacy and will not sell or share your personal information.<br class="spacer">
          <br/>
          <span class="deemph">You can unsubscribe at any time by clicking the link in the footer of our emails.</span>
        </p>
      </div>

      <div class="ls-inner ls-inner-form">
        <form 
          method="post" target="form_response_iframe"
          action="TODO"
        >
          <input type="hidden" name="u" value="TODO">
          <input type="hidden" name="id" value="TODO">
          <p>
            <label for="first_name">First Name</label>
            <input 
              type="text" id="first_name" value="" 
              v-model="firstname" 
              name="TODO" 
              autocapitalize="off" autocorrect="off" autocomplete="off"
              placeholder="First Name" maxlength="50"
            />
          </p>

          <p>
            <label for="last_name">Last Name</label>
            <input 
              type="text" id="last_name" value="" 
              v-model="lastname" 
              name="TODO" 
              autocapitalize="off" autocorrect="off" autocomplete="off"
              placeholder="Last Name" maxlength="50"
            />
          </p>

          <p>
            <label for="email">Email Address</label>
            <input 
              type="email" id="email" value="" 
              v-model="email" 
              name="TODO" 
              autocapitalize="off" autocorrect="off" autocomplete="off"
              placeholder="email" maxlength="50"
            />
          </p>

          <div>
            <input 
              type="checkbox" id="gdpr_TODO" name="gdpr[TODO]"
              v-model="permission" 
            /><label for="gdpr_TODO" class="checkbox_container">
              <icon-checkbox-off v-if="!permission" class="checkbox_icon"/>
              <icon-checkbox-on v-if="permission" class="checkbox_icon"/>
              <span class="checkbox_label">I give permission to JCA to send me email newsletters about events at JCA.</span>
            </label>
          </div>

          <div>
            <button 
              @click="submitForm"
              type="submit" 
              :class="['action submit', {disabled:disableSubmit}]"
              :disabled=disableSubmit 
            >JOIN</button>
          </div>
        </form>

      </div>
    </div>

    <div class="ls-outer group" v-show="isFormSubmitted" key="iframe">
      <button class="action return" @click="isFormSubmitted = !isFormSubmitted">Return to subscription form</button>
      <iframe name="form_response_iframe" src="" title="response for email list subscription"></iframe>
    </div>

  </div>
</template>

<script>
import IconCheckboxOff from '@/components/icons/IconCheckboxOff.vue';
import IconCheckboxOn from '@/components/icons/IconCheckboxOn.vue';

export default {
  name: 'FormEmailList',
  components: {
    IconCheckboxOff,
    IconCheckboxOn,
  },
  data() {
    return {
      isFormSubmitted: false,
      firstname: "",
      lastname: "",
      email: "",
      permission: ""
    }
  },
  computed: {
    emailFormatIsValid() {
      const re = /^(?:[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/;
      return re.test(this.email);
    },
    requiredFieldsHaveValue() {
      return this.firstname && this.lastname && this.email && this.permission;
    },
    disableSubmit() {
      return !(this.requiredFieldsHaveValue && this.emailFormatIsValid);
    },
  },
  methods: {
    submitForm(event) {
      console.log("submitForm")
      this.isFormSubmitted = true;
    }
  }
};
</script>

<style lang="less" scoped>
@import '../assets/variab.less';
@import '../assets/anima.less';

iframe {
  width: 100%;
  height: 300px;
  border: none;
  border-radius: 10px;
  background: #7a6b70;
  object-fit: contain;
}
iframe  body {
    padding: 0;
    margin: 0;
  }
label, input, textarea {
  display: block;
}
input[type=checkbox] {
  display: none;
}
button.action {
  margin-left: 0;
}
.action.submit:not(.disabled) {
  .anima__flicker();
}
.action.return {
  float: right;
}
.checkbox_container {
  display: flex;
}
.checkbox_icon {
  flex: none;
  fill: lighten(@color_text_action,10%);
}
.checkbox_label {
  font-weight: 400;
  font-family: @font_family_mono;
  font-size: 70%;
  margin-left: 10px;
}
.ls-outer {
  background-color: rgba(@color_bg, 0.8);
  border: 1px solid @color_formfield_border;
  border-radius: 10px;
}
.ls-inner-desc {
  float: left;
  width: 66%;
}
.ls-inner-form {
  position: relative;
  width: 34%;
  float: left;
}
.ls-inner-form form {
  margin-left: -21px;
  padding-left: 20px;
  border-left: 1px solid @color_formfield_border;
  margin-bottom: 20px;
}
.ls-inner-img {
  float: left;
  width: 40%;
}
.ls-inner-text {
  padding: 1em;
  padding-right: 25px;
}
.logo_lg {
  width: 100%;
}

.ls-inner-form::before {
  position: absolute;
  content: '';
  display: block;
  width: 0;
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;
  border-left: 7px solid @color_formfield_border;
  top: 40%;
  margin-left: -20px;
}

@media all and (max-width: 650px) {
  .ls-inner-desc {
    float: none;
    width: 100%;
  }
  .ls-inner-form {
    position: relative;
    width: 100%;
    float: none;
  }
  .ls-inner-form form {
    margin-left: 0;
    border-left: none;
    border-top: 1px solid @color_formfield_border;
  }
  .ls-inner-form::before {
    top: 0;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-top: 7px solid @color_formfield_border;
    left: 50%;
    margin-top: 0;
    margin-left: 0;
  }
}
</style>
