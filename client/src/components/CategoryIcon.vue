<template>
  <span>
    <icon-arts v-if="category==='arts'"/>
    <icon-music v-if="category==='music'"/>
    <icon-theater v-if="category==='theater'"/>
  </span>
</template>


<script>
import IconArts from '@/components/icons/IconArts.vue';
import IconMusic from '@/components/icons/IconMusic.vue';
import IconTheater from '@/components/icons/IconTheater.vue';

export default {
  name: "CategoryIcon",
  components: {
    IconArts,
    IconMusic,
    IconTheater,
  },
  props: {
    category: {
      type: String,
    },
  },
  data() {
    return {
    };
  },
}
</script>