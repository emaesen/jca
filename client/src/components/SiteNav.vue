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
  </nav>
</template>

<script>
import IconArrowDown from '@/components/IconArrowDown.vue';
import IconHome from '@/components/IconHome.vue';
import IconThreeBars from '@/components/IconThreeBars.vue';
import IconX from '@/components/IconX.vue';

export default {
  name: 'SiteNav',
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
      isBarMenuOpen: false,
    }
  },
  mounted() {
  },
  methods: {
    onNavMouseOver(target) {
      if (target==="events") {
        console.log('onNavMouseOver events')
        this.isNavEventsExpanded = true;
        this.isMouseOverNavEvents = true;
      }
    },
    onNavMouseLeave(target) {
      if (target==="events") {
        console.log('onNavMouseLeave events')
        this.isNavEventsExpanded = false;
        this.isMouseOverNavEvents = false;
      }
    },
    onNavClick(target) {
      console.log(target + " " + this.isMouseOverNavEvents + " " + this.isMouseOverNavEvents)
      if (target==="events" && !this.isMouseOverNavEvents) {
        this.isNavEventsExpanded = !this.isNavEventsExpanded;
      }
      if (target==="menu" && this.isNavEventsExpanded) {
        this.isNavEventsExpanded = false;
      }
    },
    toggleMenu() {
      this.isBarMenuOpen = !this.isBarMenuOpen;
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
      height: 100%;
    }
    ul.bar-closed {
      visibility: hidden;
      height: 35px;
    }
    ul.bar-open {
      height: auto;
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
  }
};
</style>
