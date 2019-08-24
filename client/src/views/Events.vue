<template>
  <div>
    <h1>Events at JCA</h1>

    <div>
      <grid
        :center="false"
        :draggable="true"
        :sortable="true"
        :items="events"
        :cellHeight="200"
        :cellWidth="300"
        :flexCellWidth="true"
        @change="change"
        @remove="remove"
        @click="click"
        @sort="sort"
        class="event-list"
      >
        <template v-slot:cell="{ item: event }">
          <div :class="'event event_cat-'+event.cat">
            <div class="event_date">
              {{ event.date }}
            </div>
            <div class="event_time">
              {{ event.time }}
            </div>
            <div class="event_title">
              {{ event.title }}
            </div>
            <div class="event_desc">
              {{ event.desc }}
            </div>
          </div>
        </template>
      </grid>
    </div>



    <form-email-list/>

  </div>
</template>

<script>
import Grid from '@/components/Grid';
import FormEmailList from '@/components/FormEmailList';

export default {
  name: 'Events',
  components: {
    Grid,
    FormEmailList
  },
  data() {
    return {
      events: [],
      cat: ["music", "theater", "class", "arts"]
    }
  },
  mounted () {
    this.events = [
      {title:"music event title", date:"Aug 06", time:"5pm to 8pm", cat:this.cat[0], desc:"A short music event description"}, 
      {title:"theater event title", date:"Aug 19", cat:this.cat[1], desc:"A theater event description"},
      {title:"visual arts event title", date:"Aug 19", cat:this.cat[3], desc:"A visual arts event description"},
      {title:"class event title", date:"Aug 19", cat:this.cat[2], desc:"A class event description. You can learn a lot in this class because we will practice many different things"},
      {title:"music event title", date:"Aug 07", cat:this.cat[0], desc:"A longer music event description because it uses more words than the short description"}, 
      {title:"theater event title", date:"Aug 09", cat:this.cat[1]},
      {title:"event title 4", date:"Aug 11", cat:this.cat[1], desc:"A short event description"}, 
      {title:"music event title", date:"Aug 12", cat:this.cat[0], desc:"An even longer music event description because it uses many many many more words than the short description"}, 
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
