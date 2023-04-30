import {createRouter, createWebHistory} from 'vue-router';
import gsap from 'gsap';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import("@/views/Home.vue"),
      meta:{title:'Home'}
    },{
      path: '/work',
      name: 'Work',
      component: () => import("@/views/Works.vue"),
      meta:{title:'My Works'}
    },{
      path: '/about',
      name: 'About',
      component: () => import("@/views/About.vue"),
        meta:{title:'About Me'}
    },{
      path: '/work/:id',
      name: 'WorkDetail',
      component: () => import("@/views/Work.vue"),
      props: true,
      meta:{title:'WorkDetail'}
    },{
      path: '/contact',
      name: 'Contact',
      component: () => import("@/views/Contact.vue"),
        meta:{title:'Contact'}
    }
  ]
})
const DEFAULT_TITLE = 'Yosshipaopao';
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
 router.afterEach((to, from) => {
   document.title = to.meta.title+' | yosshipaopao' || DEFAULT_TITLE;
 });

export default router
