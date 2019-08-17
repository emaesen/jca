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

    <p>
      <img src="/img/jca-logo.png" alt="JCA logo" class="logo_lg">
    </p>

    <p class="emph">
      Welcome! We invite you to visit and ‘like’ our <router-link to="/on-facebook">Facebook ‘vision’ page</router-link>.
    </p>

    <h2>Get Involved!</h2>

    <p>
      <span class="emph">The only way to be successful in our community is to have YOU involved in the process. We’re here to support community!</span><br class="spacer">
      We will be opening the JCA Educational Center in September of 2019 and will be actively raising money to build out the space to include a state of the art sound and lighting system, thrust stage, backstage area and costume shop.<br class="spacer"> 
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
  </div>
</template>

<script>
export default {
  name: 'Home'
};
</script>

<style lang="less" scoped>
@import '../assets/variab.less';

img.logo_lg {
  width: 100%;
  background-color: #00000080;
  border-radius: 10px;
}
</style>
