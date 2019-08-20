<template>
  <div>
    <h2>Join our email list!</h2>

    <p class="script center">
      Join our list to keep posted on upcoming events you won't want to miss.
    </p>

    <div class="ls-outer group">
      <div class="ls-inner ls-inner-desc group">
        <p class="ls-inner ls-inner-img">
          <img src="/img/jca-logo-lg.png" alt="JCA logo" class="logo_lg"/>
        </p>
        <p class="ls-inner ls-inner-text">
          Join our mailing list to receive the latest events and updates from our team.<br class="spacer">
          <br/>
          We respect your privacy and will not sell or share your personal information.
        </p>
      </div>
      <div class="ls-inner ls-inner-form">
        <form method="post" action="...">
          <p data-id="firstname" data-type="input">
            <label for="first_name">First Name</label>
            <input type="text" id="first_name" value="" name="first_name" data-required_mark="required" data-field_type="input" data-original_id="first_name" placeholder="First Name" maxlength="50">
          </p>

          <p data-id="lastname" data-type="input">
            <label for="last_name">Last Name</label>
            <input type="text" id="last_name" value="" name="last_name" data-required_mark="required" data-field_type="input" data-original_id="last_name" placeholder="Last Name" maxlength="50">
          </p>

          <p data-id="email" data-type="email">
            <label for="email">Email Address</label>
            <input type="text" id="email" value="" name="email" data-required_mark="required" data-field_type="email" data-original_id="email" placeholder="Email Address" maxlength="50">
          </p>

          <div>
            <button type="submit">JOIN</button>
          </div>
        </form>

      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'FormEmailList',
  data() {
    return {
    }
  }
};
</script>

<style lang="less" scoped>
@import '../assets/variab.less';

label, input, textarea {
  display: block;
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
  animation: pulse 3s infinite ease-in-out;
}
@keyframes pulse {
  0%  { transform: scale(1); }
  50%  { transform: scale(1.02); }
	100% { transform: scale(1); }
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
