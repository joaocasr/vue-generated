import Vue from "vue";
import Router from "vue-router";
import Deletionwatchlistmodal from "./components/Deletionwatchlistmodal";
import HomePage from "./components/HomePage";
import Confirmationwatchlistmodal from "./components/Confirmationwatchlistmodal";
import WatchlistPage from "./components/WatchlistPage";
import ReviewPage from "./components/ReviewPage";
import MoviePage from "./components/MoviePage";
import { homePageData, watchlistPageData, reviewPageData, moviePageData } from "./data";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/deletionwatchlistmodal",
      component: Deletionwatchlistmodal,
      props: {
        title: "Clear Watchlist",
        areYouSureYouWan: "Are you sure you want to delete all the movies from your watchlist?",
        yesDelete: "Yes, Delete",
        noCancel: "No, Cancel",
      },
    },
    {
      path: "/homeu35page",
      component: HomePage,
      props: { ...homePageData },
    },
    {
      path: "/watchlistu35page",
      component: WatchlistPage,
      props: { ...watchlistPageData },
    },
    {
      path: "/reviewu35page",
      component: ReviewPage,
      props: {
        title: "AVATAR (2022)",
        rate: "Rate",
        writeDownYourReview: "Write down your review...",
        image12:
          "https://cdn.animaapp.com/projects/686ea1d35e13e10175fc90b1/releases/686ea3d0637921489cf67a29/img/image-11@2x.png",
        publish: "PUBLISH",
        navBarProps: reviewPageData.navBarProps,
        xFooterProps: reviewPageData.xFooterProps,
      },
    },
    {
      path: "/movieu35page",
      component: MoviePage,
      props: { ...moviePageData },
    },
    {
      path: "*",
      component: Confirmationwatchlistmodal,
      props: {
        title: "Insert to Watchlist",
        areYouSureYouWan: "Are you sure you want to add this movie to watchlist?",
        yesInsert: "Yes, Insert",
        noCancel: "No, Cancel",
      },
    },
  ],
});
