import Vue from 'vue';
import Router from 'vue-router';
import Login from './views/Login.vue';
import Signup from './views/Signup.vue';
import Home from './views/Home.vue';
import Movie from './views/Movie.vue';
import AddMovie from './views/AddMovie.vue';
import Sale from './views/sales/Sales.vue';
import Clients from './views/clients/Clients.vue';
import UserProfile from './views/user/UserProfile.vue';
import AdminPanel from './views/Admin/AdminPanel.vue';

import roles from './helpers/user_helpers';

Vue.use(Router);

const checkRolesAndRedirect = (allowedRoles, next) => {
  const user = JSON.parse(localStorage.getItem('user'));

  let userIsAllowed = false;

  if(allowedRoles.includes(user.role)){
    userIsAllowed = true;
  } 
  if (userIsAllowed) {
    next();
  } else {
    router.push('/login');
  }
};

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
        beforeEnter: (to, from, next) => {
          checkRolesAndRedirect(
            [roles.ADMIN, roles.USER],
            next
          );
        },
      },
      {
        path: '/movie/:id',
        component: Movie,
        beforeEnter: (to, from, next) => {
          checkRolesAndRedirect(
            [roles.ADMIN, roles.USER],
            next
          );
        },
      },
      {
        path: '/my-profile/:id',
        component: UserProfile,
        beforeEnter: (to, from, next) => {
          checkRolesAndRedirect(
            [roles.USER],
            next
          );
        },
      },
      {
        path: '/admin-panel',
        component: AdminPanel,
        beforeEnter: (to, from, next) => {
          checkRolesAndRedirect(
            [roles.ADMIN],
            next
          );
        },
        
      },
      {
        path: '/add-movie',
        component: AddMovie,
        beforeEnter: (to, from, next) => {
          checkRolesAndRedirect(
            [roles.ADMIN],
            next
          );
        },
      },
      {
        path: '/sales',
        component: Sale,
        beforeEnter: (to, from, next) => {
          checkRolesAndRedirect(
            [roles.ADMIN, roles.USER],
            next
          );
        },
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