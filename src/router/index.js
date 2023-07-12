import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/Metas_Prog_Prod_Micro',
      name: 'Metas_Prog_Prod_Micro',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Metas_Prog_Prod_Micro.vue')
    },
    {
      path: '/Metas_Subpro_MR',
      name: 'Metas_Subpro_MR',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Metas_Subpro_MR.vue')
    },
    {
      path: '/Metas_Subpro_EESS',
      name: 'Metas_Subpro_EESS',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Metas_Subpro_EESS.vue')
    },
    {
      path: '/Metas_EESS_Producto',
      name: 'Metas_EESS_Producto',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Metas_EESS_Producto.vue')
    }

  ]
})

export default router
