import { createRouter, createWebHistory } from 'vue-router';
import gsap from 'gsap';

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
      path: '/about',
      name: 'About',
      component: () => import("@/views/About.vue")
    },{
      path: '/contact',
      name: 'Contact',
      component: () => import("@/views/Contact.vue")
    }
  ]
})

router.beforeEach((to, from, next) => {
  const tl = gsap.timeline();
  tl.to(".wrapper", {
    duration: 0.2,
    opacity: 0,
    onComplete: () => {
      next();
    }
  }).to(".wrapper", {
    duration: 0.2,
    opacity: 1
  }, 1);
});

export default router
