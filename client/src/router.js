import Vue from 'vue'
import Router from 'vue-router'

import Home from './views/Home.vue';
import GetInvolved from './views/GetInvolved.vue';
import AboutMore from './views/AboutMore.vue';
import Contact from './views/Contact.vue';
import OverlayFacebook from './views/OverlayFacebook.vue';

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/get-involved',
      name: 'get-involved',
      component: GetInvolved,
    },
    {
      path: '/about/more',
      name: 'about-more',
      component: AboutMore,
      meta: { 
        transitionName: 'slide'
      },
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact,
    },
    {
      path: '/on-facebook',
      name: 'on-facebook',
      component: OverlayFacebook,
      meta: {
        transitionName: 'zoom'
      },
    }
  ]
})
