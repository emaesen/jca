<template>
  <div>
    <h1>Theater at JCA</h1>

    <p>
      <cite>
        "A stage play ought to be the point of intersection between the visible and invisible worlds”
      </cite>
      ~Arthur Adamov
    </p>
    <p>
      Jefferson Center for the Arts is the home for original works as well as traveling productions, plays, musicals, melodramas, children’s theatre and more. 
    </p>
    <p>
      We are currently planning our opening season. 
      Stay tuned!
    </p>

    <img class="img-hero anima__zoom" src="/img/temp/kyle-head-p6rNTdAPbuk-unsplash.jpg" alt="theater category"/>

    <event-list category="theater"/>

  </div>
</template>

<script>
import EventList from '@/components/EventList';

export default {
  name: 'Theater',
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
.quote {
  display: block;
}
</style>
