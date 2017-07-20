import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Features from '@/components/Features'
import About from '@/components/About'
import Faq from '@/components/Faq'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/features',
      name: 'Features',
      component: Features
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/faq',
      name: 'Faq',
      component: Faq
     }
  ]
})
