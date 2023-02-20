// Composables
import { createRouter, createWebHistory } from 'vue-router'
import store from '@/store'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
      },
      {
        path: '/anime/:id',
        name: 'AnimeDetails',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "AnimeDetails" */ '@/views/AnimeDetails.vue'),
        beforeEnter: async (to, from, next) => {
      const animeId = parseInt(to.params.id);
      try {
        await store.dispatch('fetchAnimeDetails', animeId);
            next()
          } catch (error) {
            console.error(error)
            next('/not-found')
          }
        }
      },
      {
        path: '/about',
        name: 'AboutUs',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "AboutUs" */ '@/views/AboutUs.vue'),
      },
      {
        path: '/watchlist',
        name: 'WatchList',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "WatchList" */ '@/views/WatchList.vue'),
      },
    ],
  },
  {
    path: '/:catchAll(.*)',
    component: () => import('@/views/NotFound.vue'),
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
