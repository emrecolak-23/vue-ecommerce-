import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'HomeView',
    component: () => import('../components/appPage.vue'),
    beforeEnter: async (to, from, next) => {
      next('/cream-jacket');
    },
  },
  {
    path: '/:slug',
    name: 'ProductView',
    component: () => import('../components/appPage.vue'),
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

export default router;
