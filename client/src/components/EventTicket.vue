<template>
  <div>
    <a :href="href" 
      title="click to buy ticket" 
      target="_blank" rel="noopener noreferrer"
    >
      <icon-ticket class="action"/>
    </a>
  </div>
</template>

<script>
import IconTicket from '@/components/icons/IconTicket.vue';

export default {
  name: 'EventTicket',
  components: {
    IconTicket,
  },
  props: {
    id: {
      type: String
    },
  },
  data() {
    return {
      baseUrl: "https://jeffersoncenterforthearts.thundertix.com/events/",
    }
  },
  computed: {
    href() {
      return this.baseUrl + this.id;
    }
  }
};
</script>

<style lang="less" scoped>

</style>
