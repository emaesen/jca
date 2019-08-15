<template>
  <ul class="nav menu" role="menu">
    <li class="nav item" role="menuitem">
      <router-link to="/" exact>Welcome</router-link>
    </li>
    <li
      @click="onNavClick('events')"
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
          <router-link to="/music">Music</router-link>
        </li>
        <li class="nav item" role="menuitem">
          <router-link to="/theater">Theater</router-link>
        </li>
        <li class="nav item" role="menuitem">
          <router-link to="/visual-arts">Visual Arts</router-link>
        </li>
        <li class="nav item" role="menuitem">
          <router-link to="/venue-info-booking">Venue Info &amp; Booking</router-link>
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
      isNavEventsExpanded: false
    }
  },
  mounted() {
  },
  methods: {
    onNavMouseOver(event) {
      this.isNavEventsExpanded = true;
    },
    onNavMouseLeave(event) {
      this.isNavEventsExpanded = false;
    },
    onNavClick(event) {
      // TODO: toggle expansion (but take hover into account)
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
}
.nav.submenu {
  background-color: @color_bg;
  position: absolute;
  left: 0;
}
.nav.submenu .nav.item {
  float: none;
}
.collapsed {
  visibility: hidden;
}
</style>
