<template>
  <a :href="to" target="_blank" rel="noopener noreferrer"><slot></slot><icon-outbound class="deemph"/></a>
</template>

<script>
import IconOutbound from '@/components/IconOutbound.vue';

export default {
  name: 'LinkOutbound',
  props: {
    to: {
      type: String
    }
  },
  components: {
    IconOutbound
  }
}
</script>

<style lang="less">
.icon.deemph {
  color: #cccccccc;
  width: 1em;
}
</style>
