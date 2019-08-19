<template>
  <div class="overlay">
    <div class="inner">
      <a
        class="close"
        href="#"
        aria-label="close"
        @click.prevent="$router.back()"
      >
        <icon-x class="actionicon"/>
      </a>
      <h1>Our Facebook ‘vision’ page.</h1>
      <p>
        We're so incredibly excited to have the opportunity to provide this most amazing community in Mount Shasta with a venue to celebrate the Arts!!!
      </p>
      <p class="emph">
        The JCA would like to ask everyone to please help us spread the word by ‘liking /following’ us on Facebook, and sharing our vision with others who would be just as excited about it as we are.
      </p>
      <p>
        We're a community-based operation and we simply couldn't create the magic unless you were involved!
      </p>
      <p>
        We invite you to visit and ‘like’ our <link-outbound to="https://www.facebook.com/JeffersonCenterfortheArts/">Facebook ‘vision’ page</link-outbound>!
      </p>
      <p>
        <img src="/img/jca-logo.png" alt="JCA logo" class="logo_lg">
      </p>
    </div>
  </div>
</template>

<script>
import IconX from '@/components/IconX.vue';
import LinkOutbound from '@/components/LinkOutbound.vue';

export default {
  name: 'OverlayFacebook',
  components: {
    IconX,
    LinkOutbound
  },
};
</script>

<style lang="less" scoped>
@import '../assets/variab.less';

.overlay {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: auto;
  background: @color_bg;
  z-index: 999;
  opacity: .95;
  border: 15px solid #99999970;

  .inner {
    position: relative;
    max-width: @max_width/2;
    margin-right: auto;
    margin-left: auto;
    padding: 1em;
  }

  .close {
    position: absolute;
    top: 1em;
    right: 1em;
    text-decoration: none;
    color: #999;
    transition: color 0.2s;

    &:hover,
    &:focus {
      color: #fff;
    }
  }
  
  .actionicon {
    width: 1.5em;
    height: 1.5em;
  }

  img.logo_lg {
    width: 100%;
    border-radius: 10px;
  }
}
</style>
