<template>
  <nav :class="['nowrap', {'bar-open':isBarMenuOpen, 'bar-closed':!isBarMenuOpen}]">

    <span @click.stop.prevent="toggleMenu" class="toggle-icons">
      <transition name="fade" mode="out-in">
        <icon-three-bars 
          v-if="!isBarMenuOpen" 
          class="action"
        />
        <icon-x 
          v-if="isBarMenuOpen" 
          class="action"
        />
      </transition>
    </span>

    <ul :class="['nav menu', {'bar-open':isBarMenuOpen, 'bar-closed':!isBarMenuOpen}]" role="menu"
      @click="onNavClick('menu', $event)">
      <li class="nav item" role="menuitem">
        <router-link to="/" exact><icon-home/> Welcome</router-link>
      </li>
      <li
        @mouseover.passive="onNavMouseOver('events', $event)"
        @mouseleave.passive="onNavMouseLeave('events', $event)"
        class="nav item"
        role="menuitem"
      >
        <router-link to="/events">
          Events
          <span @click.stop.prevent="onNavClick('events', $event)" class="actionicon">
            <icon-arrow-down
              :class="['svg-icon icon_transition', {flip:isNavEventsExpanded}]"
            />
          </span>
        </router-link>
        <ul :class="['nav submenu', {collapsed:!isNavEventsExpanded}]" role="menu">
          <li class="nav item event-sub" role="menuitem">
            <router-link to="/events/music">Music</router-link>
          </li>
          <li class="nav item event-sub" role="menuitem">
            <router-link to="/events/theater">Theater</router-link>
          </li>
          <li class="nav item event-sub" role="menuitem">
            <router-link to="/events/visual-arts">Visual Arts</router-link>
          </li>
          <li class="nav item event-sub" role="menuitem">
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
  </nav>
</template>

<script>
import IconArrowDown from '@/components/IconArrowDown.vue';
import IconHome from '@/components/IconHome.vue';
import IconThreeBars from '@/components/IconThreeBars.vue';
import IconX from '@/components/IconX.vue';

import helpers from './mixins/helpers'


export default {
  name: 'SiteNav',
  mixins: [helpers],
  components: {
    IconArrowDown,
    IconHome,
    IconThreeBars,
    IconX,
  },
  data() {
    return {
      isNavEventsExpanded: false,
      isMouseOverNavEvents: false,
      showBarMenu: true,
      isBarMenuOpen: false,
      windowWidth: null,
      windowBreakPoint: 650,
    }
  },
  mounted() {
    this.setWindowDimensions();
    this.addResizeListener(this.onWindowResize);
  },
  beforeDestroy() {
    this.removeResizeListener(this.onWindowResize);
  },
  methods: {
    setWindowDimensions() {
      if (window) {
        this.windowWidth = this.getWindowDimensions().width;
      }
    },
    onWindowResize(event) {
      this.setWindowDimensions();
    },
    onNavMouseOver(target, evt) {
      if (target==="events" && !this.showBarMenu) {
        this.isNavEventsExpanded = true;
        this.isMouseOverNavEvents = true;
      }
    },
    onNavMouseLeave(target, evt) {
      if (target==="events" && !this.showBarMenu) {
        this.isNavEventsExpanded = false;
        this.isMouseOverNavEvents = false;
      }
    },
    onNavClick(target, evt) {
      console.log('onNavClick ' + target, {evt:evt, evt_target:evt.target});
      if (target==="events" && !this.isMouseOverNavEvents) {
        console.log(".... toggle isNavEventsExpanded");
        this.isNavEventsExpanded = !this.isNavEventsExpanded;
      }
      if (target==="menu" && this.isNavEventsExpanded) {
        let isEventSub = evt.target.offsetParent.className.indexOf('event-sub') !== -1;
        if(!this.showBarMenu || !isEventSub) {
          console.log(".... set isNavEventsExpanded to false");
          this.isNavEventsExpanded = false;
        }
      }
      if (target==="menu" && this.showBarMenu) {
        this.isBarMenuOpen = false;
      }
    },
    toggleMenu() {
      this.isBarMenuOpen = !this.isBarMenuOpen;
    }
  },
  watch: {
    windowWidth(newWidth, oldWidth) {
      this.showBarMenu = newWidth < this.windowBreakPoint;
    },
    showBarMenu(newVal, oldVal) {
      if (newVal === false) {
        this.isNavEventsExpanded = false;
      }
    }
  }
  
}
</script>

<style lang="less" scoped>
@import '../assets/variab.less';

nav {
  position: fixed;
  line-height: 120%;
  top: 0;
  width: @max_width - 75;
  z-index: 3;
  padding: 3px;
  padding-left: 75px;
  margin-left: -10px;
  border-bottom: 2px solid #80afe470;
  opacity: 0.85;
  background-color: @color_bg;
}
.menu {
  a {
    opacity: 1;
    padding: 5px 10px;
    display: inline-block;
    border: 2px solid #80afe430;
    &.router-link-active {
      color: @color_text_action_selected;
      box-shadow: 0 0 30px #a7dcff;
    }
  }
  a + a {
    margin-left:0;
    border-left: none;
  }
}
.submenu {
  border-left: 2px solid #80afe430;
  border-right: 2px solid #80afe430;
  a {
    border: none;
  }
}
a.router-link-exact-active {
  cursor: default;
  color: @color_text_action_selected;
  text-decoration: none;
}
a:not(.router-link-exact-active):hover {
  text-decoration: underline;
}
a.router-link-active {
  border-top: 2px solid #80afe4;
  border-bottom: 2px solid #80afe4;
}

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
.actionicon .icon {
  height: 0.9em;
  width: 0.9em;
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

.toggle-icons {
  position: fixed;
  top: 8px;
  right: 10px;
  visibility: hidden;
  z-index: 10;
}
@media all and (max-width: 650px) {
  nav {
    left: 0;
    width: 100%;
    padding-left: 10px;
    margin-left: 0;
    &.bar-open {
      z-index: 99;
      padding-top: 10px;
      height: 100%;
    }
    ul.bar-closed {
      visibility: hidden;
      height: 35px;
    }
    ul.bar-open {
      height: 100%;
    }
    .nav.menu {
      width: 80%;
    }
    .nav.item {
      float: none;
      display: grid;
    }
    .nav.submenu:not(.collapsed) {
      position: relative;
      padding-left: 1em;
    }
    .toggle-icons {
      visibility: visible;
    }
    .actionicon {
      display: block;
      text-align: center;
      float: right;
      width: 2em;
    }
  }
};
</style>
