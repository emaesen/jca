<template>
  <div class="home">
    <h1>Jefferson Center for the Arts (JCA)</h1>

    <cite class="center">Mount Shasta's Premiere Educational Center for Music and the Performing Arts!</cite>

    <p>
      JCA is Mount Shasta's premier arts education venue incorporating the natural beauty of the area for the purpose of improving social, economic and cultural assets.<br class="spacer">
      The JCA is a regional hub for Live Music, Theatre and Visual Arts for local residents and tourists alike.<br class="spacer">
      The gardens of the JCA are growing to host a permaculture learning center, arts playground and local nature trail.<br class="spacer">
      Jefferson Center for the Arts is Mt Shasta's own community arts and culture center.
    </p>

    <!--
    <p>
      <img src="/img/jca-banner.png" alt="JCA banner" class="banner_lg">
    </p>
    -->
    <div class="container-carousel anima__zoom">
      <carousel :nav-buttons="true" :autoplay-speed="10000" :speed="2500" fade pause-on-hover pause-on-dots-hover autoplay>
        <img class="slide" src="/img/jca-banner.png"/>
        <img class="slide" src="/img/temp/khara-woods-KR84RpMCb0w-unsplash.jpg"/>
        <img class="slide" src="/img/temp/kyle-head-p6rNTdAPbuk-unsplash.jpg"/>
        <img class="slide" src="/img/temp/tadas-mikuckis-hbnH0ILjUZE-unsplash.jpg"/>
        <template slot="prevButton"><icon-backward class="action"/></template>
        <template slot="nextButton"><icon-forward class="action"/></template>
      </carousel>
    </div>

    <h2>Get Involved!</h2>

    <p>
      <span class="emph">The only way to be successful in our community is to have YOU involved in the process. We’re here to support community!</span><br class="spacer">
      We will be opening the JCA Educational Center in September of 2019 and are actively raising money to build out the space to include a state of the art sound and lighting system, thrust stage, backstage area and costume shop.<br class="spacer"> 
      We have been granted the use of a pristine concert grand piano… the only one of its kind in the area!<br class="spacer">
      SO, we need to get the theatre built so we can hear its glory! 
    </p>
    
    <p>
      Our structural vision is clear and now <span class="emph">we need the community to decorate that vision with its own unique dreams and ideas.</span><br class="spacer">
      <span class="emph">Please share yours!</span><br class="spacer">
      We look forward to hearing from you.
    </p>

    <p>
      <router-link to="/get-involved">Get Involved</router-link>
    </p>
    <p>
      <router-link to="/contact">Contact Us</router-link>
    </p>

    <hr/>

    <p class="center emph anima__fade-in-bounce">
      <icon-facebook/>
      We invite you to visit and ‘like’ our <router-link to="/on-facebook">Facebook ‘vision’ page</router-link>.
    </p>

  </div>
</template>

<script>
import Carousel from '@/components/Carousel';
import IconBackward from '@/components/IconBackward';
import IconForward from '@/components/IconForward';
import IconFacebook from '@/components/IconFacebook';

export default {
  name: 'Home',
  components: {
    Carousel,
    IconBackward,
    IconForward,
    IconFacebook,
  },
  data() {
    return {
    }
  },
};
</script>

<style lang="less" scoped>
@import '../assets/variab.less';
@import '../assets/anima.less';

img.banner_lg {
  width: 100%;
  background-color: #00000080;
  border-radius: 10px;
}
.icon-forward,
.icon-backward,
.icon-facebook {
  width: 2em;
  height: 2em;
  color: #ccc;
  vertical-align: bottom;
}

.container-carousel {
  margin: 2em 1em 1em 1em;
}

.anima__zoom {
  animation-delay: 1s;
  animation-duration: 1s;
  animation-fill-mode: backwards;
}
</style>
