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
      component: () => import("@/views/Works.vue")
    },{
      path: '/profile',
      name: 'Profile',
      component: () => import("@/views/Profile.vue")
    },{
      path: '/contact',
      name: 'Contact',
      component: () => import("@/views/Contact.vue")
    }
  ]
})

export default router
