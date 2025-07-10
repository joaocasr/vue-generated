import { createRouter, createWebHistory } from 'vue-router';
import FirstPageView from '@/views/FirstPageView.vue';
import SecondPageView from '@/views/SecondPageView.vue';
import ErrorPageView from '@/views/ErrorPageView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 }
  },
  routes: [
  {
    "path": "/firstpage",
    "name": "FirstPage",
    "component": FirstPageView
},
{
    "path": "/secondpage",
    "name": "SecondPage",
    "component": SecondPageView
},
{
    "path": "/:catchAll(.*)",
    "name": "ErrorPage",
    "component": ErrorPageView
},
  ]
})
export default router
