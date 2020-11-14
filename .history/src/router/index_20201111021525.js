import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Trending from '../views/Login.vue'


Vue.use(VueRouter)

  const routes = [
 
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
   
    
  }
  // {
  //   path: '/Movie/:id',
  //   name: 'Movie',
  //   props: true,
  //   component: Movie
  // },
  // {
  //   path: '/SearchMovie/:id',
  //   name: 'SearchMovie',
  //   props: true,
  //   component: Movie
  // },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
