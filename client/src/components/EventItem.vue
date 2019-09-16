<template>
  <div :class="containerClasses">
    <div class="event_date_emph" v-if="!(isWeeklyRecurring || highlightTime)">
        <div class="month">{{ month }}</div>
        <div class="dayNr">{{ dayNr }}</div>
    </div>
    <div class="event_date_emph" v-if="isWeeklyRecurring || highlightTime">
        <div class="weekday">{{ weekday }}</div>
        <div class="time">{{ time }}</div>
    </div>
    <div v-if="!atPageLevel" class="event_type_cat">
      ~ {{ event.category }}  {{ event.type || type }} ~
    </div>
    <router-link v-if="!atPageLevel" :to="eventPageUrl">
      <h4 class="event_title">
        <category-icon :category="event.category"/> 
        {{ event.title }}
      </h4>
    </router-link>
    <h1 v-if="atPageLevel" class="event_title">
      <category-icon :category="event.category"/> 
      {{ event.title }}
    </h1>
    <div v-if="event.performer" class="event_performer">
      {{ event.performer }}
    </div>
    <div v-if="event.presenter" class="event_presenter">
      {{ event.presenter }}
    </div>
    <div class="event_image" v-if="event.image">
      <img :src="'/img/event/'+event.image" :alt="event.title" class="anima__zoom"/>
    </div>
    <div v-if="!isWeeklyRecurring" class="event_date">
      {{ date }}
    </div>
    <div v-if="!isWeeklyRecurring && !highlightTime" class="event_time">
      {{ time }}
    </div>
    <div class="event_note">
      {{ event.note }}
    </div>
    <div class="event_price">
      {{ event.price }}
      <event-ticket 
        v-if="event.ticket" 
        :id="event.ticket"
        class="event_ticket" 
      />
    </div>
    <div class="event_desc">
      <span v-html="description"/>
    </div>
    <div v-if="event.ics" class="ics">
      <a :href="'/ics/' + event.ics">Add to calendar</a>
    </div>
    <button-volunteer
      v-if="!isWeeklyRecurring"
      :event="event" 
      class="button_volunteer"
    ></button-volunteer>
  </div>
</template>

<script>
import CategoryIcon from '@/components/CategoryIcon.vue';
import EventTicket from '@/components/EventTicket.vue';
import ButtonVolunteer from '@/components/ButtonVolunteer.vue';

import date from './mixins/date.js'

export default {
  name: 'EventItem',
  mixins: [date],
  components: {
    CategoryIcon,
    EventTicket,
    ButtonVolunteer,
  },
  props: {
    event: {
      type: Object
    },
    highlightTime: {
      type: Boolean
    },
    recurrence: {
      type: String
    },
    type: {
      type: String
    },
    atPageLevel: {
      type: Boolean
    }
  },
  data() {
    return {
    }
  },
  mounted () {
  },
  computed: {
    eventPageUrl() {
      return "/events/" + (this.event.category || "g") + "/" + this.event.url;
    },
    containerClasses() {
      return this.atPageLevel ? "event-page" : "event event_cat event_cat-" + this.event.category;
    },
    isWeeklyRecurring() {
      return this.recurrence==="weekly" || (this.event.weekdays && this.event.weekdays.length > 0);
    },
    weekday() {
      return this.event.weekdays && this.dateNames.days[this.event.weekdays[0]];
    },
    date() {
      let opts = {shortForm:false, showYear:false};
      let text = this.formattedDate(this.event.date.start, opts);
      if (this.event.date.end && this.event.date.end !== this.event.date.start) {
        text += " - " + this.formattedDate(this.event.date.end, opts);
      }
      return text;
    },
    time() {
      if (!this.event.time || !this.event.time.start) {
        return "";
      }
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
    description() {
      return this.event.description
        .replace(/</g, "&lt;")
        .replace(/\n/g, "<br>");
    },
  }
};
</script>

<style lang="less" scoped>
@import '../assets/variab.less';

h4 {
  margin: 0 0 1em;
}
.event-page {
  position: relative;
  width: 100%;
}
.event-page .event_date_emph {
  position: relative;
  top: 2.7em;
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
  position: relative;
  background: @color-primary-1;
  margin: 5px;
  padding: 5px 8px;
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
.event_image {
  width: 40%;
  float: left;
  margin-right: 1em;
  margin-bottom: 1em;
  img {
    width: 100%;
    border-radius: 10px;
    box-shadow: 0 0 4px 0 @color-primary-2;
  }
}
.event_desc {
  margin-top: .3em;
  color: @color-secondary-1-1;
}
.event_price {
  margin: .5em 0;
}
.event_ticket {
  display: inline;
}
.event_cat {
  .gradient-jewel-5();
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
.event_cat-dance {
  .gradient-jewel-4();
}
.ics {
  margin-top: 2em;
}
.button_volunteer {
  float: right;
}
@media all and (max-width: 650px) {
  .event {
    font-size: 90%;
  }
}
</style>
