<template>
  <div>
    <h1>Events at JCA</h1>

    <event-list/>

    <email-subscribe-section/>

  </div>
</template>

<script>
import EventList from '@/components/EventList';
import EmailSubscribeSection from '@/components/EmailSubscribeSection';

export default {
  name: 'Events',
  components: {
    EventList,
    EmailSubscribeSection
  },
  data() {
    return {
    }
  },
  mounted () {
  },
  methods: {
  }
};
</script>

<style lang="less" scoped>

</style>
