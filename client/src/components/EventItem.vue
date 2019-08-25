<template>
  <div :class="'event event_cat-'+event.cat">
    <h4 class="event_title">
      {{ event.title }}
    </h4>
    <div class="event_date">
      {{ event.date }}
    </div>
    <div class="event_time">
      {{ event.time }}
    </div>
    <div class="event_desc">
      {{ event.desc }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'EventItem',
  components: {
  },
  props: {
    event: {
      type: Object
    }
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

h4 {
  margin: 0 0 1em;
}
.event {
  background: @color-primary-1;
  margin: 5px;
  padding: 10px 30px;
  text-shadow: none;
  border-radius: 8px;
  width: 100%;
  border: 5px solid #ccc;
  box-shadow: 0 0 10px -2px @color-primary-2;
}

.event_cat-music {
  @color: hsl(336, 49%, 10%);
  border-color: @color;
  background: lighten(@color,40%);
  background: linear-gradient(to bottom, 
    @color 0%, 
    lighten(@color,15%) 20%, 
    lighten(@color,20%) 45%, 
    lighten(@color,20%) 55%, 
    lighten(@color,10%) 80%, 
    @color 100%);
 }
.event_cat-theater {
  @color: hsl(201, 49%, 10%);
  border-color: @color;
  background: lighten(@color,40%);
  background: linear-gradient(to bottom, 
    @color 0%, 
    lighten(@color,15%) 20%, 
    lighten(@color,20%) 45%, 
    lighten(@color,20%) 55%, 
    lighten(@color,10%) 80%, 
    @color 100%);
}
.event_cat-class {
  @color: hsl(162, 49%, 10%);
  border-color: @color;
  background: lighten(@color,40%);
  background: linear-gradient(to bottom, 
    @color 0%, 
    lighten(@color,15%) 20%, 
    lighten(@color,20%) 45%, 
    lighten(@color,20%) 55%, 
    lighten(@color,10%) 80%, 
    @color 100%);
}
.event_cat-arts {
  @color: hsl(269, 49%, 10%);
  border-color: @color;
  background: lighten(@color,40%);
  background: linear-gradient(to bottom, 
    @color 0%, 
    lighten(@color,15%) 20%, 
    lighten(@color,20%) 45%, 
    lighten(@color,20%) 55%, 
    lighten(@color,10%) 80%, 
    @color 100%);
}

</style>
