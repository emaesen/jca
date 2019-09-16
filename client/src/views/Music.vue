<template>
  <div>
    <h1>Music at JCA</h1>

    <p>
      Jefferson Center for the Arts hosts an eclectic mix of musical genres including…
       Classical, Jazz, Americana, Blues, Folk and Other Acoustic musical styles. 
      With only 60 seats, the JCA will bring you up close and personal to the music. 
      The community will often be able to meet the artists in a workshop setting or q&amp;a before/after each show.
      Our programming will cater to you… the community. 
      So, please drop us a line with your suggestions!
      <a href="mailto:info@jeffersoncenterforthearts.com">info@jeffersoncenterforthearts.com</a>
    </p>

    <img class="img-hero anima__zoom" src="/img/temp/tadas-mikuckis-hbnH0ILjUZE-unsplash.jpg" alt="music category"/>

    <event-list category="music"/>

  </div>
</template>

<script>
import EventList from '@/components/EventList';

export default {
  name: 'Music',
  components: {
    EventList,
  },  
  data() {
    return {
    }
  }
};
</script>

<style lang="less" scoped>
@import '../assets/variab.less';
  
</style>
