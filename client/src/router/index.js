import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import demo from '@/components/Abc';
import login from '@/components/Login';

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
      path: '/abc',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/demo',
      name: 'demo',
      component: demo
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
  ]
})
