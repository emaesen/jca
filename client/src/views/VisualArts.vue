<template>
  <div>
    <h1>Visual Arts at JCA</h1>

    <p>
      Jefferson Center for the Arts presents a wide-variety of rotating exhibitions featuring works by international and regional artists.
      Artists chosen for our gallery space will be encouraged to share their methods and inspirations during gallery openings and workshops.
    </p>
    <p>
      Check back for Show Entry Applications for our opening season!
    </p>

    <event-list cat="arts"/>

  </div>
</template>

<script>
import EventList from '@/components/EventList';

export default {
  name: 'VisualArts',
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
