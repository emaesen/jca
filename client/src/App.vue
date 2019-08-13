<template>
  <div id="app">
    <img src="/img/jca-logo-sm.png" alt="JCA logo" class="logo"/>
    <nav class="nowrap">
      <router-link to="/" exact>Home</router-link>
      <router-link to="/about">About JCA</router-link>
      <router-link to="/contact">Contact Us</router-link>
    </nav>
    <main>
      <transition-page>
        <router-view/>
      </transition-page>
    </main>
    <footer>
      © 2019, Jefferson Center for the Arts. All rights reserved. 
      <span class="version">{{ version }}</span>
    </footer>
  </div>
</template>

<script>
import TransitionPage from './transitions/TransitionPage.vue';

export default {
  name: 'App',
  components: {
    TransitionPage
  },
  data() {
    return {
      version: "V0.0.1"
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
@import './assets/variables.less';

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
}
h1,h2,h3,h4,h5,h6 {
  font-family: serif;
  font-weight: 400;
  letter-spacing: 1px;
  color: #f6d65d;
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
  font-family: sans-serif;
  font-size: 17px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #f3f5e7;
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
input {
  font-family: monospace;
  background-color: #18213290;
  border: 1px solid #6ab5ea90;
  border-radius: 5px;
  line-height: 1.3em;
}
a,
.action {
  cursor: pointer;
  text-decoration: none;
  font-weight: 400;
  color: #97fffb;
  font-family: sans-serif;
  font-size: 90%;
}
.action.selected {
  cursor: default;
  color: inherit;
  color: #fbd99a;
}
a.external:after {
  content: " \02197";
  color: #7adaf7;
}
a.expand:after { 
  content: " \00A0 (" attr(href) ") "; 
  font-weight: 400;
  font-family: sans-serif;
  font-size: 85%;
  color: #7adaf7;
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

nav {
  position: fixed;
  line-height: 120%;
  top: 0;
  width: @max_width - 50;
  z-index: 999;
  padding-left: 50px;
  margin-left: -10px;
  border-bottom: 2px solid #80afe470;
  opacity: 0.85;
  background-color: @color_bg;
  a {
    opacity: 1;
    margin-left:2em;
    padding: 5px 10px;
    display: inline-block;
    border-left: 2px solid #80afe4;
    border-right: 2px solid #80afe4;
    &.router-link-active {
      cursor: default;
      color: #f6d65d;
      margin-bottom: -5px;
      padding-bottom: 10px;
      box-shadow: 0 0 30px #a7dcff;
    }
  }
  a + a {
    margin-left:0;
    border-left: none;
  }
}
a.router-link-active {
  cursor: default;
  color: #f6d65d;
}
a.external:hover {
  color: #7adaf7;
}
a:not(.external):hover {
  color: #f6d65d;
}
img.logo {
  position: fixed;
  z-index: 99999;
  background-color: @color_bg;
  border-radius: 25px;
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
  opacity: .72;
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
.nowrap {
  white-space: nowrap
}
.emph {
  font-weight: 800;
}
.version {
  position: fixed;
  right: 5px;
  color: #a9bbd2;
}

</style>