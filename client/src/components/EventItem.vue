<template>
  <div :class="'event event_cat-'+event.cat">
    <div class="event_date_emph">
        <div class="month">{{ month }}</div>
        <div class="dayNr">{{ dayNr }}</div>
    </div>
    <h4 class="event_title">
      {{ event.title }}
    </h4>
    <div class="event_date">
      {{ date }}
    </div>
    <div class="event_time">
      {{ time }}
    </div>
    <div class="event_desc">
      {{ event.desc }}
    </div>
  </div>
</template>

<script>
import date from './mixins/date.js'

export default {
  name: 'EventItem',
  mixins: [date],
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
  computed: {
    date() {
      let opts = {shortForm:false, showYear:false};
      let text = this.formattedDate(this.event.date.start, opts);
      if (this.event.date.end) {
        text += " - " + this.formattedDate(this.event.date.end, opts);
      }
      return text;
    },
    time() {
      let opts = {ampm:true};
      let text = this.formattedTime(this.event.time.start, opts);
      if (this.event.time.end) {
        text += " - " + this.formattedTime(this.event.time.end, opts);
      }
      return text;
    },
    month() {
      let opts = {shortForm:true, obj:true};
      return this.formattedDate(this.event.date.start, opts).monthStr;
    },
    dayNr() {
      let opts = {shortForm:true, obj:true};
      return this.formattedDate(this.event.date.start, opts).dayNrStr;
    }
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
  padding: 5px 8px;
  font-size: 80%;
  text-shadow: none;
  border-radius: 8px;
  width: 100%;
  border: 5px solid #ccc;
  box-shadow: 0 0 10px -2px @color-primary-2;
  overflow: auto;
}
.event_date_emph {
  float: right;
  background-color: @color_bg;
  padding: 5px 15px;
  text-align: center;
  box-shadow: 0 0 4px 0 @color-primary-2;
  border-radius: 6px;
  .dayNr {
    font-size: 150%;
  }
}
.event_desc {
  margin-top: .3em;
  color: @color-secondary-1-1;
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


@media all and (max-width: 650px) {
  .event {
    font-size: 100%;
  }
}
</style>
