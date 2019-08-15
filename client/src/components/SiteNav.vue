<template>
  <ul class="nav menu" role="menu"
    @click="onNavClick('menu')">
    <li class="nav item" role="menuitem">
      <router-link to="/" exact>Welcome</router-link>
    </li>
    <li
      @click.stop="onNavClick('events')"
      @mouseover="onNavMouseOver('events')"
      @mouseleave="onNavMouseLeave('events')"
      class="nav item"
      role="menuitem"
    >
      <router-link to="/events">
        Events
        <svg version="1.1" role="presentation" width="9" height="14.4" viewBox="0 0 320 512" :class="['svg-icon icon_transition', {flip:isNavEventsExpanded}]">
          <path d="M31.3 192H288.6C306.4 192 315.3 213.5 302.7 226.1L174.1 354.8C166.3 362.6 153.6 362.6 145.8 354.8L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"></path>
        </svg>
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
export default {
  name: 'SiteNav',
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
      this.isNavEventsExpanded = true;
      this.isMouseOverNavEvents = true;
    },
    onNavMouseLeave(target) {
      this.isNavEventsExpanded = false;
      this.isMouseOverNavEvents = false;
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
ul ul.nav {

  .nav.item {
    
  }
}

.nav.submenu {
  background-color: @color_bg;
  position: absolute;
  left: 0;
  transition: opacity 0.3s linear;
}
.nav.submenu .nav.item {
  float: none;
}
.collapsed {
  visibility: hidden;
  opacity:0;
}
</style>
