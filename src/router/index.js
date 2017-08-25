import Vue from 'vue';
import Router from 'vue-router';
import PostsList from '@/components/PostsList';
import PostDetail from '@/components/PostDetail';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'PostsList',
      component: PostsList,
    },
    {
      path: '/detail/:id',
      name: 'PostDetail',
      component: PostDetail,
      props: true,
    },
  ],
});
