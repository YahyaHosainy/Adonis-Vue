export default [
  // your routes here
  {
    path: '/',
    component: () => import('../pages/Home.vue'),
    name: 'home'
  },
  {
    path: '/about',
    component: () => import('../pages/About.vue'),
    name: 'about'
  },

  // define your 404 route
  {
    path: '/:pathMatch(.*)*',
    name: 'notfound',
    component: () => import('../pages/NotFound.vue')
  },
]
