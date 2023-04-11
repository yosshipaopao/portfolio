import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import("@/views/Works.vue")
    },{
      path: '/work',
      name: 'Work',
      component: () => import("@/views/works.vue")
    },{
      path: '/portfolio',
      name: 'Portfolio',
      component: () => import("@/views/portfoilo.vue")
    },{
      path: '/contact',
      name: 'Contact',
      component: () => import("@/views/contact.vue")
    }
  ]
})

export default router
