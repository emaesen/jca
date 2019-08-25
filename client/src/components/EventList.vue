<template>
  <grid
    :center="false"
    :draggable="false"
    :sortable="true"
    :items="events"
    :cellHeight="250"
    :cellWidth="400"
    :flexCell="true"
    @change="change"
    @remove="remove"
    @click="click"
    @sort="sort"
    class="event-list"
  >
    <template v-slot:cell="{ item: event }">
      <event-item :event="event"/>
    </template>
  </grid>
</template>

<script>
import Grid from '@/components/Grid';
import EventItem from '@/components/EventItem';

export default {
  name: 'EventList',
  components: {
    Grid,
    EventItem
  },
  data() {
    return {
      events: [],
      cat: ["music", "theater", "class", "arts"]
    }
  },
  mounted () {
    /* event: {
     *   title: "",
     *   description: "",
     *   date: { start: "", end: "" },
     *   time: { start: "", end: "" },
     *   category: "",
     * }
     */
    this.events = [
      {title:"music event title", date:{start:"2019-08-06"}, time:{start:"20:00", end:"23:00"}, cat:this.cat[0], desc:"A short music event description"}, 
      {title:"theater event title", date:{start:"2019-08-07"}, time:{start:"19:00", end:"21:00"}, cat:this.cat[1], desc:"A theater event description"},
      {title:"visual arts event title", date:{start:"2019-08-09"}, time:{start:"20:00", end:"22:00"}, cat:this.cat[3], desc:"A visual arts event description"},
      {title:"a very long music event title because it is awesome!", date:{start:"2019-08-10", end:"2019-08-11"}, time:{start:"10:00", end:"18:00"}, cat:this.cat[0], desc:"An even longer (one might even say 'insanely long!') music event description because it uses many many many more words since it is a two-day event. So many words that it is becoming of a novel almost. I really didn't think a description could have so many words..."}, 
      {title:"class event title", date:{start:"2019-08-14"}, time:{start:"18:00", end:"19:00"}, cat:this.cat[2], desc:"A class event description. You can learn a lot in this class because we will practice many different things"},
      {title:"music event title", date:{start:"2019-08-18"}, time:{start:"20:00", end:"23:00"}, cat:this.cat[0], desc:"A longer music event description because it uses more words than the short description"}, 
      {title:"theater event title", date:{start:"2019-08-20"}, time:{start:"10:00", end:"12:00"}, cat:this.cat[1]},
      {title:"theater event title 4", date:{start:"2019-08-26"}, time:{start:"10:00", end:"16:00"}, cat:this.cat[1], desc:"A short theater event description"}, 
    ]
  },
  methods: {
    click ({ items, index }) {
      let value = items.find(v => v.index === index)
      this.selected = value.item
      console.log(this.selected)
    },
    change (event) {
      console.log('change', event)
    },
    remove (event) {
      console.log('remove', event)
    },
    sort (event) {
      console.log('sort', event)
    }
  }
};
</script>

<style lang="less" scoped>
@import '../assets/variab.less';


</style>
