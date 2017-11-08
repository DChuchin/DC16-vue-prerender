import Vue from 'vue';
import Router from 'vue-router';
import ItemList from '@/components/ItemList';
import SingleItem from '@/components/SingleItem';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'item-list',
      component: ItemList,
    },
    {
      path: '/:id',
      name: 'single-item',
      component: SingleItem,
      props: true,
    },
  ],
  mode: 'history',
});
