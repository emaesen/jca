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
import Classes from './views/Classes.vue';
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
    },
    {
      path: '/events',
      name: 'events',
      component: Events,
    },
    {
      path: '/events/music',
      name: 'music',
      component: Music,
    },
    {
      path: '/events/theater',
      name: 'theater',
      component: Theater,
    },
    {
      path: '/events/visual-arts',
      name: 'visual-arts',
      component: VisualArts,
    },
    {
      path: '/events/classes',
      name: 'classes',
      component: Classes,
    },
    {
      path: '/events/venue-info-booking',
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
    },
    {
      // catch all - show home page
      path: "*",
      redirect: "/"
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    return new Promise((resolve) => {
      setTimeout(() => {
        if (to.hash) {
          resolve( {
            selector: to.hash
          } );
        } else if (savedPosition) {
          resolve( savedPosition );
        } else if (from.path.startsWith("/on-facebook")) {
          resolve( {
            selector: null
          } );
        } else {
          resolve( { x: 0, y: 0 } );
        }
      }, 500)
    })
  }
})
