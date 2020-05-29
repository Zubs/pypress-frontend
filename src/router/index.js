import Vue from 'vue';
import Login from '../components/Login';
import Register from '../components/Register';
import HomePage from '../components/HomePage';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'homepage',
    component: HomePage,
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
  },
  {
    path: '/sign-up',
    name: 'sign-up',
    component: Register,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
