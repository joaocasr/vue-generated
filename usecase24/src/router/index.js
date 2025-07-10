import { createRouter, createWebHistory } from 'vue-router';
import HomePagePageView from '@/views/HomePagePageView.vue';
import CategoryPageView from '@/views/CategoryPageView.vue';
import SignUpPageView from '@/views/SignUpPageView.vue';
import LogInPageView from '@/views/LogInPageView.vue';
import WishlistPageView from '@/views/WishlistPageView.vue';
import CartPageView from '@/views/CartPageView.vue';
import CheckOutPageView from '@/views/CheckOutPageView.vue';
import AccountPageView from '@/views/AccountPageView.vue';
import AboutPageView from '@/views/AboutPageView.vue';
import ContactPageView from '@/views/ContactPageView.vue';
import ProductDetailsPageView from '@/views/ProductDetailsPageView.vue';
import ErrorPageView from '@/views/ErrorPageView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 }
  },
  routes: [
  {
    "path": "/homepagepage",
    "name": "HomePagePage",
    "component": HomePagePageView
},
{
    "path": "/categorypage",
    "name": "CategoryPage",
    "component": CategoryPageView
},
{
    "path": "/signuppage",
    "name": "SignUpPage",
    "component": SignUpPageView
},
{
    "path": "/loginpage",
    "name": "LogInPage",
    "component": LogInPageView
},
{
    "path": "/wishlistpage",
    "name": "WishlistPage",
    "component": WishlistPageView
},
{
    "path": "/cartpage",
    "name": "CartPage",
    "component": CartPageView
},
{
    "path": "/checkoutpage",
    "name": "CheckOutPage",
    "component": CheckOutPageView
},
{
    "path": "/accountpage",
    "name": "AccountPage",
    "component": AccountPageView
},
{
    "path": "/aboutpage",
    "name": "AboutPage",
    "component": AboutPageView
},
{
    "path": "/contactpage",
    "name": "ContactPage",
    "component": ContactPageView
},
{
    "path": "/productdetailspage",
    "name": "ProductDetailsPage",
    "component": ProductDetailsPageView
},
{
    "path": "/:catchAll(.*)",
    "name": "ErrorPage",
    "component": ErrorPageView
},
  ]
})
export default router
