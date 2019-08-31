<template>
  <div :class="'event event_cat-'+event.category">
    <div class="event_date_emph" v-if="recurrence !== 'weekly'">
        <div class="month">{{ month }}</div>
        <div class="dayNr">{{ dayNr }}</div>
    </div>
    <div class="event_date_emph" v-if="recurrence === 'weekly'">
        {{ time }}
    </div>
    <div class="event_type_cat">
      ~ {{ event.type }} ~ {{ event.category }} ~
    </div>
    <h4 class="event_title">
      {{ event.title }}
    </h4>
    <div v-if="event.performer" class="event_performer">
      {{ event.performer }}
    </div>
    <div v-if="event.presenter" class="event_presenter">
      {{ event.presenter }}
    </div>
    <div v-if="recurrence !== 'weekly'" class="event_date">
      {{ date }}
    </div>
    <div v-if="recurrence !== 'weekly'" class="event_time">
      {{ time }}
    </div>
    <div class="event_price">
      {{ event.price }}
    </div>
    <div class="event_desc">
      {{ event.description }}
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
    },
    recurrence: {
      type: String
    },
    type: {
      type: String
    },
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
      if (this.event.date.end && this.event.date.end !== this.event.date.start) {
        text += " - " + this.formattedDate(this.event.date.end, opts);
      }
      return text;
    },
    time() {
      let opts = {ampm:true,short:true};
      let text = this.formattedTime(this.event.time.start, opts);
      if (this.event.time.end) {
        text = this.formattedTimeRange(this.event.time.start, this.event.time.end, opts);
      }
      return text;
    },
    month() {
      let opts = {shortForm:true, obj:true};
      let text = this.formattedDate(this.event.date.start, opts).monthStr;
      if (this.event.date.end && this.event.date.end > this.event.date.start) {
        let text2 = this.formattedDate(this.event.date.end, opts).monthStr;
        if (text2!==text) {
          text += "," + text2;
        }
      }
      return text;
    },
    dayNr() {
      let opts = {shortForm:true, obj:true};
      let text = this.formattedDate(this.event.date.start, opts).dayNrStr;
      if (this.event.date.end && this.event.date.end > this.event.date.start) {
        text += "-" + this.formattedDate(this.event.date.end, opts).dayNrStr;
      }
      return text;
    },
  }
};
</script>

<style lang="less" scoped>
@import '../assets/variab.less';

h4 {
  margin: 0 0 1em;
}
.event_type_cat {
  opacity:0.5;
}
.event_performer,
.event_presenter {
  position: relative;
  top: -1em;
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
  .gradient-jewel-1();
 }
.event_cat-theater {
  .gradient-jewel-2();
}
.event_cat-arts {
  .gradient-jewel-3();
}
.event_cat-class {
  .gradient-jewel-4();
}


@media all and (max-width: 650px) {
  .event {
    font-size: 100%;
  }
}
</style>
