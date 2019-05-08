import Vue from 'vue'
import Router from 'vue-router'
//import VueHead from 'vue-head'
import Meta from 'vue-meta'
import App from './App.vue'
//import Post from './components/Post.vue'
import Home from './components/Home.vue'
import Video from './components/Video.vue'
import Randomcat from './components/Randomcat.vue'

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
     //props: true,
   },
   {
     path: '/randomcat',
     name:'randomcat',
     component: Randomcat,
     //props: true,
   },
 ],
  mode: 'history'
})

new Vue({
 el: '#app',
 render: h => h(App),
 router
})
