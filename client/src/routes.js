import Vue from 'vue';
import Router from 'vue-router';
import Login from './views/Login.vue';
import Signup from './views/Signup.vue';
import Home from './views/Home.vue';


Vue.use(Router);

const routes = [
    {
      path: '/',
      component: Login,
    },
    {
        path: '/login',
        component: Login,
      },
      {
        path: '/signup',
        component: Signup,
      },
      {
        path: '/home',
        component: Home,
      }
]

const router = new Router({
    mode: 'history',
    routes,
  });

export default router;