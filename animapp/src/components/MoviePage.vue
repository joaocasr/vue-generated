<template>
  <div class="container-center-horizontal">
    <div class="movieu35page abel-normal-gray-32px screen">
      <nav-bar
        :className="navBarProps.className"
        :home1Props="navBarProps.home1Props"
        :home2Props="navBarProps.home2Props"
        :home3Props="navBarProps.home3Props"
        :xMenuProps="navBarProps.xMenuProps"
      />
      <div class="flex-row-5">
        <img class="image-11" :src="image11" alt="image 11" />
        <div class="flex-col-2">
          <div class="flex-row-6">
            <h1 class="title-4 valign-text-middle lato-bold-bon-jour-36px">
              <span
                ><span class="lato-bold-bon-jour-36px">{{ spanText1 }}</span
                ><span class="span1-1">{{ spanText2 }}</span>
              </span>
            </h1>
            <div class="duration1-3 lato-bold-hint-of-red-17px">{{ duration1 }}</div>
          </div>
          <p class="name valign-text-middle lato-normal-bon-jour-16px">{{ name }}</p>
          <div class="flex-row-7">
            <div class="overlap-group2-1">
              <div class="score valign-text-middle lato-bold-bon-jour-20px">{{ score }}</div>
              <div class="text-6 valign-text-middle">{{ text6 }}</div>
            </div>
            <router-link to="/confirmationwatchlistmodal" className="align-self-flex-end">
              <div class="addwatchlistbtn">
                <div class="add-to-watchlist valign-text-middle">{{ addToWatchlist }}</div>
              </div></router-link
            >
          </div>
          <read-only-rating :className="readOnlyRatingProps.className" />
          <div class="address-3 lato-bold-hint-of-red-17px">{{ address }}</div>
        </div>
      </div>
      <div class="watch-container-1">
        <div class="watch-movie-btn-1">
          <img
            class="playmovie-2"
            src="https://cdn.animaapp.com/projects/686ea1d35e13e10175fc90b1/releases/686ea3d0637921489cf67a29/img/playmovie.svg"
            alt="playmovie"
          />
          <div class="watch-1 alegreyasanssc-medium-white-16px">{{ watchOnlineNow }}</div>
        </div>
        <a href="#video">
          <div class="watch-trailer-btn-1">
            <img
              class="playmovie-3"
              src="https://cdn.animaapp.com/projects/686ea1d35e13e10175fc90b1/releases/686ea3d0637921489cf67a29/img/playmovie.svg"
              alt="playmovie"
            />
            <div class="watch-1 alegreyasanssc-medium-white-16px">{{ watchTrailer }}</div>
          </div></a
        >
      </div>
      <x-video :overlapGroup1="xVideoProps.overlapGroup1" :titleHere="xVideoProps.titleHere" :time="xVideoProps.time" />
      <div class="reviews">{{ reviews }}</div>
      <img
        class="line-18"
        src="https://cdn.animaapp.com/projects/686ea1d35e13e10175fc90b1/releases/686ea3d0637921489cf67a29/img/line-18.svg"
        alt="Line 18"
      />
      <router-link to="/reviewu35page">
        <div class="my-review">
          <div class="insert-my-review">{{ insertMyReview }}</div>
        </div></router-link
      ><review :interactiveRating2Props="review1Props.interactiveRating2Props" />
      <review :className="review2Props.className" :interactiveRating2Props="review2Props.interactiveRating2Props" />
      <paginator :className="paginatorProps.className" />
      <div class="related-movies">{{ relatedMovies }}</div>
      <img
        class="line-19"
        src="https://cdn.animaapp.com/projects/686ea1d35e13e10175fc90b1/releases/686ea3d0637921489cf67a29/img/line-18.svg"
        alt="Line 19"
      />
      <div class="related-section">
        <related1 :related2Props="related1Props.related2Props" />
        <related2
          :boyheron="related21Props.boyheron"
          :theBoyAndTheHeron="related21Props.theBoyAndTheHeron"
          :className="related21Props.className"
        />
        <related2
          :boyheron="related22Props.boyheron"
          :theBoyAndTheHeron="related22Props.theBoyAndTheHeron"
          :className="related22Props.className"
        />
      </div>
      <x-footer :className="xFooterProps.className" />
    </div>
  </div>
</template>

<script>
import NavBar from "./NavBar";
import ReadOnlyRating from "./ReadOnlyRating";
import XVideo from "./XVideo";
import Review from "./Review";
import Paginator from "./Paginator";
import Related1 from "./Related1";
import Related2 from "./Related2";
import XFooter from "./XFooter";
export default {
  name: "MoviePage",
  components: {
    NavBar,
    ReadOnlyRating,
    XVideo,
    Review,
    Paginator,
    Related1,
    Related2,
    XFooter,
  },
  props: [
    "image11",
    "spanText1",
    "spanText2",
    "duration1",
    "name",
    "score",
    "text6",
    "addToWatchlist",
    "address",
    "watchOnlineNow",
    "watchTrailer",
    "reviews",
    "insertMyReview",
    "relatedMovies",
    "navBarProps",
    "readOnlyRatingProps",
    "xVideoProps",
    "review1Props",
    "review2Props",
    "paginatorProps",
    "related1Props",
    "related21Props",
    "related22Props",
    "xFooterProps",
  ],
};
</script>

<style>
.movieu35page {
  align-items: flex-start;
  background-color: var(--black);
  display: flex;
  flex-direction: column;
  height: 3493px;
  position: relative;
  width: 1540px;
}

.flex-row-5 {
  align-items: flex-start;
  align-self: center;
  display: flex;
  gap: 67px;
  height: 361px;
  margin-right: 315px;
  margin-top: 295px;
  min-width: 889px;
  z-index: 1;
}

.image-11 {
  align-self: flex-end;
  height: 358px;
  object-fit: cover;
  width: 242px;
}

.flex-col-2 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  min-height: 342px;
  position: relative;
  width: 580px;
}

.flex-row-6 {
  align-items: center;
  display: flex;
  gap: 34px;
  min-width: 340px;
}

.title-4 {
  height: 43px;
  letter-spacing: 0;
  line-height: normal;
  min-width: 216px;
  white-space: nowrap;
}

.span1-1 {
  color: var(--gray-degreesgray-5);
  font-family: var(--font-family-lato);
  font-size: 36px;
  font-weight: 300;
}

.duration1-3 {
  letter-spacing: 0;
  line-height: normal;
  margin-top: 5.47px;
  min-height: 22px;
  width: 90px;
}

.name {
  height: 75px;
  letter-spacing: 0;
  line-height: normal;
  margin-top: 16px;
  width: 580px;
}

.flex-row-7 {
  align-items: flex-start;
  display: flex;
  gap: 57px;
  height: 72px;
  margin-top: 48px;
  min-width: 327px;
}

.overlap-group2-1 {
  align-items: flex-start;
  background-color: #181818;
  border: 1px solid;
  border-color: #060955;
  display: flex;
  flex-direction: column;
  gap: 5px;
  min-height: 72px;
  padding: 4px 9px;
  width: 70px;
}

.score {
  height: 24px;
  letter-spacing: 0;
  line-height: normal;
  margin-top: 3px;
  min-width: 50px;
  text-align: center;
  white-space: nowrap;
}

.text-6 {
  color: #23266d;
  font-family: var(--font-family-lato);
  font-size: 25px;
  font-weight: 700;
  height: 32px;
  letter-spacing: 0;
  line-height: normal;
  text-align: center;
  width: 50px;
}

.addwatchlistbtn {
  align-items: flex-start;
  align-self: flex-end;
  background-color: var(--black-russian);
  border-radius: 12px;
  cursor: pointer;
  display: flex;
  height: 63px;
  min-width: 200px;
  padding: 22px 15px;
}

.add-to-watchlist {
  color: var(--primary);
  font-family: var(--font-family-lato);
  font-size: var(--font-size-xl);
  font-weight: 700;
  height: 18px;
  letter-spacing: 0;
  line-height: normal;
  text-align: center;
  white-space: nowrap;
  width: 169px;
}

.address-3 {
  letter-spacing: 0;
  line-height: normal;
  margin-top: 17px;
  min-height: 22px;
  width: 254px;
}

.watch-container-1 {
  align-items: flex-start;
  display: flex;
  gap: 34px;
  margin-left: 168px;
  margin-top: 66px;
  min-width: 394px;
  z-index: 2;
}

.watch-movie-btn-1 {
  align-items: flex-start;
  background-color: var(--blue-charcoal);
  border-radius: 40px;
  box-shadow: 0px 4px 4px #00000040;
  display: flex;
  gap: 7px;
  height: 60px;
  overflow: hidden;
  padding: 17px 15px;
  width: 180px;
}

.playmovie-2 {
  align-self: center;
  height: 12px;
  margin-left: 4px;
  width: 10px;
}

.watch-1 {
  letter-spacing: 0;
  line-height: 24px;
  white-space: nowrap;
}

.watch-trailer-btn-1 {
  align-items: flex-start;
  background-color: var(--black-russian);
  border-radius: 40px;
  cursor: pointer;
  display: flex;
  gap: 18px;
  height: 60px;
  overflow: hidden;
  padding: 17px 26px;
  width: 180px;
}

.playmovie-3 {
  align-self: center;
  height: 12px;
  margin-left: 2px;
  width: 10px;
}

.reviews {
  letter-spacing: 0;
  line-height: normal;
  margin-left: 173px;
  margin-top: 39px;
  min-height: 41px;
  z-index: 4;
}

.line-18 {
  align-self: center;
  height: 1px;
  margin-right: 194px;
  margin-top: 40px;
  object-fit: cover;
  width: 1000px;
  z-index: 6;
}

.my-review {
  align-items: flex-start;
  background-color: #5b5e64;
  border-radius: 20px;
  box-shadow: 0px 4px 4px #00000040;
  cursor: pointer;
  display: flex;
  height: 68px;
  margin-left: 173px;
  margin-top: 28px;
  overflow: hidden;
  padding: 25px 12px;
  width: 198px;
  z-index: 3;
}

.insert-my-review {
  color: var(--primary);
  font-family: var(--font-family-raleway);
  font-size: var(--font-size-xxl);
  font-weight: 400;
  letter-spacing: 0;
  line-height: 18px;
  min-height: 15px;
  white-space: nowrap;
}

.related-movies {
  letter-spacing: 0;
  line-height: normal;
  margin-left: 173px;
  margin-top: 35px;
  min-height: 41px;
  z-index: 5;
}

.line-19 {
  align-self: center;
  height: 1px;
  margin-right: 194px;
  margin-top: 17px;
  object-fit: cover;
  width: 1000px;
  z-index: 7;
}

.related-section {
  align-items: flex-start;
  display: flex;
  gap: 35px;
  height: 351px;
  margin-left: 173px;
  margin-top: 41px;
  min-width: 627px;
  padding: 18px 0;
  position: relative;
  z-index: 9;
}
</style>
