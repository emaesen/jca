import Vue from 'vue'
import Router from 'vue-router'

import Home from './views/Home.vue';
import GetInvolved from './views/GetInvolved.vue';
import AboutMore from './views/AboutMore.vue';
import Contact from './views/Contact.vue';
import Events from './views/Events.vue';
import Music from './views/Music.vue';
import Theater from './views/Theater.vue';
import VisualArts from './views/VisualArts.vue';
import VenueInfoBooking from './views/VenueInfoBooking.vue';
import About from './views/About.vue';
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
      path: '/events',
      name: 'events',
      component: Events,
    },
    {
      path: '/music',
      name: 'music',
      component: Music,
    },
    {
      path: '/theater',
      name: 'theater',
      component: Theater,
    },
    {
      path: '/visual-arts',
      name: 'visual-arts',
      component: VisualArts,
    },
    {
      path: '/venue-info-booking',
      name: 'venue-info-booking',
      component: VenueInfoBooking,
    },
    {
      path: '/about',
      name: 'about',
      component: About,
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
