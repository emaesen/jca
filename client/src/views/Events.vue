<template>
  <div>
    <h1>Events</h1>

    <p>
      Coming soon...
    </p>

    <div>
      <grid
        :center="false"
        :draggable="true"
        :sortable="true"
        :items="events"
        :cellHeight="200"
        :cellWidth="200"
        @change="change"
        @remove="remove"
        @click="click"
        @sort="sort">
        <template v-slot:cell="{ item: event }">
          <div :class="'event event_cat-'+event.cat">
            <div class="event_title">
              {{ event.title }}
            </div>
            <div class="event_date">
              {{ event.date }}
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
      events: []
    }
  },
  mounted () {
    this.events = [
      {title:"event1", date:"Aug 06", cat:"music"}, 
      {title:"event2", date:"Aug 07", cat:"music"}, 
      {title:"event3", date:"Aug 09", cat:"theater"}
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
  color: @color_bg;
  text-shadow: none;
}

</style>
