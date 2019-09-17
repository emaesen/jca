<template>
  <div>
    <h1>Events at JCA</h1>

    <event-list/>

  </div>
</template>

<script>
import EventList from '@/components/EventList';

export default {
  name: 'Events',
  components: {
    EventList,
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
