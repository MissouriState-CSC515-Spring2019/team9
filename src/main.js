import Vue from 'vue'
import Router from 'vue-router'
//import VueHead from 'vue-head'
import Meta from 'vue-meta'
import App from './App.vue'
import Home from './components/Home.vue'
import Video from './components/Video.vue'
import Randomcat from './components/Randomcat.vue'
import Notfound from './components/Notfound.vue'

Vue.use(Router)
Vue.use(Meta)

const router = new Router({
 routes: [
   {
     path: '/',
     name:'home',
     component: Home,
   },
   {
     path: '/video',
     name:'video',
     component: Video,
   },
   {
     path: '/randomcat',
     name:'randomcat',
     component: Randomcat,
   },
   {
     path: '/404',
     name:'404',
     component: Notfound,
   },
   {
     path: '*',
     redirect: '/404',
   },
 ],
 scrollBehavior (to, from, savedPosition) {
  if (savedPosition) {
    return savedPosition
  } else {
    return { x: 0, y: 25 }
    }
  },
  mode: 'history'
})

new Vue({
 el: '#app',
 render: h => h(App),
 router
})
