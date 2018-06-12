export default [
  {
    path: '/',
    redirect: 'welcome',
  },
  {
    path: '/welcome',
    name: 'welcome',
    component: fn => import('@/pages/welcome/index.vue')
  },
  {
    path: '/asset',
    name: 'asset',
    component: fn => import('@/pages/asset/index.vue')
  }
];
