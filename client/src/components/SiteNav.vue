<template>
  <ul class="nav menu" role="menu"
    @click="onNavClick('menu')">
    <li class="nav item" role="menuitem">
      <router-link to="/" exact><icon-home/> Welcome</router-link>
    </li>
    <li
      @mouseover="onNavMouseOver('events')"
      @mouseleave="onNavMouseLeave('events')"
      class="nav item"
      role="menuitem"
    >
      <router-link to="/events">
        Events
        <span @click.stop.prevent="onNavClick('events')" class="actionicon">
          <icon-arrow-down
            :class="['svg-icon icon_transition', {flip:isNavEventsExpanded}]"
          />
        </span>
      </router-link>
      <ul :class="['nav submenu', {collapsed:!isNavEventsExpanded}]" role="menu">
        <li class="nav item" role="menuitem">
          <router-link to="/events/music">Music</router-link>
        </li>
        <li class="nav item" role="menuitem">
          <router-link to="/events/theater">Theater</router-link>
        </li>
        <li class="nav item" role="menuitem">
          <router-link to="/events/visual-arts">Visual Arts</router-link>
        </li>
        <li class="nav item" role="menuitem">
          <router-link to="/events/venue-info-booking">Venue Info &amp; Booking</router-link>
        </li>
      </ul>
    </li>
    <li class="nav item" role="menuitem">
      <router-link to="/about">About</router-link>
    </li>
    <li class="nav item" role="menuitem">
      <router-link to="/get-involved">Get Involved</router-link>
    </li>
    <li class="nav item" role="menuitem">
      <router-link to="/contact">Contact Us</router-link>
    </li>
  </ul>
</template>

<script>
import IconArrowDown from '@/components/IconArrowDown.vue';
import IconHome from '@/components/IconHome.vue';

export default {
  name: 'SiteNav',
  components: {
    IconArrowDown,
    IconHome
  },
  data() {
    return {
      isNavEventsExpanded: false,
      isMouseOverNavEvents: false,
    }
  },
  mounted() {
  },
  methods: {
    onNavMouseOver(target) {
      if (target==="events") {
        this.isNavEventsExpanded = true;
        this.isMouseOverNavEvents = true;
      }
    },
    onNavMouseLeave(target) {
      if (target==="events") {
        this.isNavEventsExpanded = false;
        this.isMouseOverNavEvents = false;
      }
    },
    onNavClick(target) {
      if (target==="events" && !this.isMouseOverNavEvents) {
        this.isNavEventsExpanded = !this.isNavEventsExpanded;
      }
      if (target==="menu" && this.isNavEventsExpanded) {
        this.isNavEventsExpanded = false;
      }
    }
  }
  
}
</script>

<style lang="less" scoped>
@import '../assets/variab.less';

.icon_transition {
  transition: all 0.3s linear;
}
.actionicon {
  height: 1em;
  width: 1em;
  text-align: right;
  display: inline-block;
  cursor: pointer;
}
.flip {
  transform: rotate(180deg);
}
ul.nav {
  list-style-type: none;
  margin: 0;
  padding: 0;
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}
.nav.item {
  float: left;
  position: relative;
  a {
    padding: 5px 10px;
  }
}
.nav.submenu {
  background-color: @color_bg;
  position: absolute;
  height: auto;
  left: 0;
  transition: opacity 0.3s linear;
 .nav.item {
    display: grid;
    float: none;
 }
}
.nav.submenu.collapsed {
  height: 0;
  opacity:0;
  visibility: hidden;
}
.vert {
  .nav.item {
    float: none;
    display: grid;
  }
  .nav.submenu:not(.collapsed) {
    position: relative;
    padding-left: 1em;
  }
}
</style>
