<template>
  <div>
    <h1>JCA Sponsors</h1>

    <sponsor 
      v-for="(sponsor, index) in sponsors" 
      :key="sponsor.name" 
      :sponsor="sponsor"
      class="anima__zoom"
      :style="'animation-delay:' + index/5 + 's;animation-fill-mode: backwards;'"
    />

  </div>
</template>

<script>
import Sponsor from '@/components/Sponsor.vue';

import sponsorsJson from '@/data/sponsors.json';

export default {
  name: 'Sponsors',
  components: {
    Sponsor,
  },
  data() {
    return {
      sponsors: sponsorsJson.sponsors,
    }
  }
};
</script>

<style lang="less" scoped>
</style>
