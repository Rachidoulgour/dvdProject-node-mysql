import Vue from 'vue';
import Router from 'vue-router';
import Login from './views/Login.vue'


Vue.use(Router);

const routes = [
    {
      path: '/',
      component: Login,
    },
    {
        path: '/login',
        component: Login,
      }
]

const router = new Router({
    mode: 'history',
    routes,
  });

export default router;