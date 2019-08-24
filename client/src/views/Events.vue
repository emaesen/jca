<template>
  <div>
    <h1>Events at JCA</h1>

    <event-list/>

    <email-list-section/>

  </div>
</template>

<script>
import EventList from '@/components/EventList';
import EmailListSection from '@/components/EmailListSection';

export default {
  name: 'Events',
  components: {
    EventList,
    EmailListSection
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
@import '../assets/variab.less';

</style>
