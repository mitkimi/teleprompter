import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: require('@/views/index').default
    },
    {
      path: '/ppt',
      name: 'ppt',
      component: require('@/views/ppt').default
    },
    {
      path: '/about',
      name: 'about',
      component: require('@/views/about').default
    }
    // {
    //   path: '/',
    //   name: 'landing-page',
    //   component: require('@/components/LandingPage').default
    // },
    // {
    //   path: '*',
    //   redirect: '/'
    // }
  ]
})
