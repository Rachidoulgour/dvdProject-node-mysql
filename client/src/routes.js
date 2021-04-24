import Vue from 'vue';
import Router from 'vue-router';
import Login from './views/Login.vue'
import Signup from './views/Signup.vue'


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
      }
]

const router = new Router({
    mode: 'history',
    routes,
  });

export default router;