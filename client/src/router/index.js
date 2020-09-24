import Vue from 'vue';
import Router from 'vue-router';
import Profile from '@/components/Profile';
import Signin from '@/components/Signin';
import Signup from '@/components/SignUp';
import ForgotPassword from '@/components/ForgotPassword';
import Test from '@/components/test';

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/user',
      name: 'profile',
      component: Profile
    },
    {
      path: '/login',
      name: 'signin',
      component: Signin
    },
    {
      path: '/register',
      name: 'signup',
      component: Signup
    },
    {
      path: '/forgotpassword',
      name: 'forgotpassword',
      component: ForgotPassword
    },
    {
      path: '/test',
      name: 'test',
      component: Test
    },
  ]
})
