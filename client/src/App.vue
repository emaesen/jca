<template>
  <div id="app">
    <img src="/img/jca-logo-sm.png" alt="JCA logo" class="logo_sm"/>
    <nav :class="['nowrap', {vert:hasVerticalMenu}]">
      <icon-three-bars class="menubars"/>
      <site-nav/>
    </nav>
    <main>
      <transition name="fade" mode="out-in">
        <router-view/>
      </transition>
    </main>
    <footer>
      © 2019, Jefferson Center for the Arts. All rights reserved. 
      <span class="version">{{ version }}</span>
    </footer>
  </div>
</template>

<script>
import IconThreeBars from '@/components/IconThreeBars.vue';
import SiteNav from '@/components/SiteNav.vue';

export default {
  name: 'App',
  components: {
    IconThreeBars,
    SiteNav
  },
  data() {
    return {
      version: "V0.0.1",
      hasVerticalMenu: false
    }
  },
  created() {
    if (this.isInStandaloneMode) {
      // Site is running stand-alone as installed webapp
      this.version += ".A";
    } else {
      // Site is running in web browser
      this.version += ".B";
    }
  },
  computed: {
    isInStandaloneMode() {
      return (window.matchMedia('(display-mode: standalone)').matches) || (window.navigator.standalone);
    }
  }
}
</script>

<style lang="less">
@import './assets/variab.less';

html {
  background-color: @color_bg;
  background-image: url(@img_bg);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  background-attachment: fixed;
}
body,html {
  margin: 0;
  padding: 0;
}
body {
  margin: 0 auto;
  min-width: @min_width;
  max-width: @max_width;
  overflow: scroll;
}
h1,h2,h3,h4,h5,h6 {
  font-family: @font_family_header, serif;
  font-weight: 400;
  letter-spacing: 1px;
  color: @color_text_header;
}
h1, h2.h1 {
  text-align: center;
  margin-top: 1.5em;
  font-size: 210%;
}
h2 {
  margin: 2em 0 0.5em 0;
  font-size: 170%;
}
h3 {
  margin: 2em 0 0.5em 0;
  font-size: 140%;
}
body,
input,
textarea,
select,
button {
  font-family: @font_family_body, sans-serif;
  font-size: @font_size;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: @color_text_body;
  text-shadow: 2px 2px 10px #000;
}
button {
  margin: 1em .5em 1em 1em;
  background-color: #18213290;
  border: 1px solid #6ab5ea;
  border-radius: 9px;
  box-shadow: 0 0 5px #d9f0ff;
  line-height: 1.7em;
}
input,
textarea,
select {
  font-family: monospace;
  background-color: #18213290;
  border: 1px solid #6ab5ea90;
  border-radius: 5px;
  line-height: 1.3em;
  width: 15em;
}
cite {
  font-family: @font_family_cursive;
  display: block;
  font-style: normal;
}
a,
.action {
  cursor: pointer;
  text-decoration: none;
  font-weight: 400;
  color: @color_text_action;
}
.action.selected {
  cursor: default;
  color: @color_text_action_selected;
}
a.external {
  text-decoration: underline;
}
a.expand:after { 
  content: " \00A0 (" attr(href) ") "; 
  font-weight: 400;
  font-family: sans-serif;
  font-size: 85%;
}
a.expand.external:after { 
  content: " \00A0 (" attr(href) ") \02197"; 
}
ul, ol {
  padding-left: 0;
}
ul {
  padding-inline-start: 0;
  margin-block-start: 0.5em;
}
ol {
  padding-inline-start: 1em;
  margin-block-start: 0.5em;
}
ul ul {
  padding-inline-start: 1em;
  margin-block-start: 0;
  margin-block-end: 0.2em;
}
ul li {
  list-style-type: none;
}
ul.bullet {
  padding-left: 1em;
  padding-inline-start: 1em;
  margin-block-start: 0.5em;
}
ul.bullet li {
  list-style-type: circle;
}
.menubars {
  position: fixed;
  top: 8px;
  right: 50px;
}
nav {
  position: fixed;
  line-height: 120%;
  top: 0;
  width: @max_width - 75;
  z-index: 999;
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
svg {
  fill: currentColor;
  display: inline-block;
}
img.logo_sm {
  position: fixed;
  z-index: 99999;
  background-color: #000;
  border-radius: 27px;
  box-shadow: 0 0 15px #d9f0ff;
}
hr {
  margin: 5em 0;
  border-color: #6ab5ea;
  box-shadow: 0 0 20px #d9f0ff;
}
footer {
  left: 0;
  position: fixed;
  bottom: 0;
  width: 100%;
  text-align: center;
  font-size:75%;
  opacity: 0.85;
  background-color: @color_bg;
  padding-top:5px;
  border-top: 1px solid #80afe481;
}
#app {
  height: 100%;
  padding: 5px 10px 200px;
}
.bg-img{
  position:fixed;
  bottom:0;
  z-index:-1;
  right:20%;
}
.center {
  text-align: center;
}
.nowrap {
  white-space: nowrap
}
.emph {
  font-family: @font_family_emph;
  font-weight: 700;
}
.version {
  position: fixed;
  right: 5px;
  color: #a9bbd262;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s ease;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
.zoom-enter-active,
.zoom-leave-active {
  animation-duration: 0.5s;
  animation-fill-mode: both;
  animation-name: zoom;
}
.zoom-leave-active {
  animation-direction: reverse;
}
@keyframes zoom {
  from {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }
  100% {
    opacity: 1;
  }
}
</style>