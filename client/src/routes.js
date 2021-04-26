import Vue from 'vue';
import Router from 'vue-router';
import Login from './views/Login.vue';
import Signup from './views/Signup.vue';
import Home from './views/Home.vue';
import Movie from './views/Movie.vue';
import AddMovie from './views/AddMovie.vue';
import Sale from './views/sales/Sales.vue';
import Clients from './views/clients/Clients.vue';


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
      },
      {
        path: '/movie/:id',
        component: Movie,
      },
      {
        path: '/add-movie',
        component: AddMovie,
      },
      {
        path: '/sales',
        component: Sale,
      },
      {
        path: '/clients',
        component: Clients,
      },
]

const router = new Router({
    mode: 'history',
    routes,
  });

export default router;