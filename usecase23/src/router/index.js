import { createRouter, createWebHistory } from 'vue-router';
import HomePageView from '@/views/HomePageView.vue';
import SecondaryPageView from '@/views/SecondaryPageView.vue';
import ThirdPageView from '@/views/ThirdPageView.vue';
import ErrorPageView from '@/views/ErrorPageView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 }
  },
  routes: [
  {
    "path": "/homepage",
    "name": "HomePage",
    "component": HomePageView
},
{
    "path": "/secondarypage",
    "name": "SecondaryPage",
    "component": SecondaryPageView
},
{
    "path": "/thirdpage",
    "name": "ThirdPage",
    "component": ThirdPageView
},
{
    "path": "/:catchAll(.*)",
    "name": "ErrorPage",
    "component": ErrorPageView
},
  ]
})
export default router
