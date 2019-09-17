<template>
  <div>
    <h1>Calendar of classes at JCA</h1>

    <class-calendar/>

  </div>
</template>

<script>
import ClassCalendar from "@/components/ClassCalendar.vue";

export default {
  name: 'ClassesCalendar',
  components: {
    ClassCalendar,
  },
  data() {
    return {
    }
  }
};
</script>

<style lang="less" scoped>

</style>
