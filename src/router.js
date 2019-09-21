import Vue from 'vue';
import Router from 'vue-router';

/**
 * Layouts.
 */
import Main from '@/layouts/Main';

/**
 * Views.
 */
import Home from '@/views/Home';
import PostView from '@/views/PostView';
import U404 from '@/views/U404';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Main,
      children: [
        {
          path: '',
          component: Home,
        },
        {
          path: '404',
          component: U404,
        }
      ],
    },
    {
      path: '/thread/:thread_slug',
      component: Main,
      children: [
        {
          path: '',
          component: PostView, props:true
        },
      ]
    },
    {
      path: '*',
      redirect: '/404',
    },
  ],
});
