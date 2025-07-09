<template>
  <div class="container-center-horizontal">
    <div class="homeu35page screen">
      <nav-bar
        :home1Props="navBarProps.home1Props"
        :home2Props="navBarProps.home2Props"
        :home3Props="navBarProps.home3Props"
        :xMenuProps="navBarProps.xMenuProps"
      />
      <home-banner v-bind="homeBannerProps" />
      <input-search :inputxt="inputSearchProps.inputxt" />
      <div class="overlap-group18">
        <div class="movie-grid">
          <div class="movie-container">
            <movie1
              :image10="movie1Props.image10"
              :x45="movie1Props.x45"
              :title1="movie1Props.title1"
              :duration1="movie1Props.duration1"
              :address="movie1Props.address"
            />
            <movie5
              :overlapGroup9="movie51Props.overlapGroup9"
              :text3="movie51Props.text3"
              :movie1descProps="movie51Props.movie1descProps"
              :readOnlyRatingProps="movie51Props.readOnlyRatingProps"
            />
          </div>
          <div class="movie-container-1">
            <movie5
              :overlapGroup9="movie52Props.overlapGroup9"
              :text3="movie52Props.text3"
              :className="movie52Props.className"
              :movie1descProps="movie52Props.movie1descProps"
              :readOnlyRatingProps="movie52Props.readOnlyRatingProps"
            />
            <movie6
              :overlapGroup12="movie6Props.overlapGroup12"
              :x45="movie6Props.x45"
              :title1="movie6Props.title1"
              :duration1="movie6Props.duration1"
              :address="movie6Props.address"
              :readOnlyRatingProps="movie6Props.readOnlyRatingProps"
            />
          </div>
          <div class="movie-container-2">
            <movie5
              :overlapGroup9="movie53Props.overlapGroup9"
              :text3="movie53Props.text3"
              :className="movie53Props.className"
              :movie1descProps="movie53Props.movie1descProps"
              :readOnlyRatingProps="movie53Props.readOnlyRatingProps"
            />
            <movie5
              :overlapGroup9="movie54Props.overlapGroup9"
              :text3="movie54Props.text3"
              :className="movie54Props.className"
              :movie1descProps="movie54Props.movie1descProps"
              :readOnlyRatingProps="movie54Props.readOnlyRatingProps"
            />
          </div>
          <div class="movie-container-3">
            <movie5
              :overlapGroup9="movie55Props.overlapGroup9"
              :text3="movie55Props.text3"
              :className="movie55Props.className"
              :movie1descProps="movie55Props.movie1descProps"
              :readOnlyRatingProps="movie55Props.readOnlyRatingProps"
            />
            <movie5
              :overlapGroup9="movie56Props.overlapGroup9"
              :text3="movie56Props.text3"
              :className="movie56Props.className"
              :movie1descProps="movie56Props.movie1descProps"
              :readOnlyRatingProps="movie56Props.readOnlyRatingProps"
            />
          </div>
        </div>
        <paginator />
      </div>
      <div class="new-movies">
        <div class="upcoming-movies">{{ upcomingMovies }}</div>
        <div class="upcoming-movie-box-wide-container">
          <div class="upcoming-movie-box-wide">
            <img class="joker" :src="joker" alt="joker" />
            <div class="joker-folie-deux poppins-normal-bon-jour-22px">{{ jokerFolieDeux }}</div>
            <div class="date opensans-normal-bon-jour-16px">{{ date1 }}</div>
          </div>
          <div class="upcoming-movie-box-wide-1">
            <img class="wolverine" :src="wolverine" alt="wolverine" />
            <div class="deadpool-wolverine poppins-normal-bon-jour-22px">{{ deadpoolWolverine }}</div>
            <div class="date-1 opensans-normal-bon-jour-16px">{{ date2 }}</div>
          </div>
        </div>
      </div>
      <div class="frame-42">
        <img
          class="tapevector"
          src="https://cdn.animaapp.com/projects/686ea1d35e13e10175fc90b1/releases/686ea3d0637921489cf67a29/img/tapevector.svg"
          alt="tapevector"
        />
        <div class="browse-all-movies">{{ browseAllMovies }}</div>
        <img
          class="govector"
          src="https://cdn.animaapp.com/projects/686ea1d35e13e10175fc90b1/releases/686ea3d0637921489cf67a29/img/govector.svg"
          alt="govector"
        />
      </div>
      <x-footer />
    </div>
  </div>
</template>

<script>
import NavBar from "./NavBar";
import HomeBanner from "./HomeBanner";
import InputSearch from "./InputSearch";
import Movie1 from "./Movie1";
import Movie5 from "./Movie5";
import Movie6 from "./Movie6";
import Paginator from "./Paginator";
import XFooter from "./XFooter";
export default {
  name: "HomePage",
  components: {
    NavBar,
    HomeBanner,
    InputSearch,
    Movie1,
    Movie5,
    Movie6,
    Paginator,
    XFooter,
  },
  props: [
    "upcomingMovies",
    "joker",
    "jokerFolieDeux",
    "date1",
    "wolverine",
    "deadpoolWolverine",
    "date2",
    "browseAllMovies",
    "navBarProps",
    "homeBannerProps",
    "inputSearchProps",
    "movie1Props",
    "movie51Props",
    "movie52Props",
    "movie6Props",
    "movie53Props",
    "movie54Props",
    "movie55Props",
    "movie56Props",
  ],
};
</script>

<style>
.homeu35page {
  align-items: center;
  background-color: var(--black);
  display: flex;
  flex-direction: column;
  height: 3493px;
  position: relative;
  width: 1540px;
}

.overlap-group18 {
  height: 958px;
  margin-top: 97px;
  position: relative;
  width: 946px;
  z-index: 3;
}

.movie-grid {
  align-items: flex-start;
  display: flex;
  height: 925px;
  left: 0;
  padding: 0 28px;
  position: absolute;
  top: 0;
  width: 946px;
}

.movie-container {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  margin-left: 34px;
  margin-top: -42px;
  min-height: 922px;
  position: relative;
  width: 214px;
}

.movie-container-1 {
  height: 921px;
  margin-top: -42px;
  position: relative;
  width: 214px;
}

.movie-container-2 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  margin-top: -43px;
  min-height: 922px;
  position: relative;
  width: 214px;
}

.movie-container-3 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 1px;
  margin-top: -43px;
  min-height: 923px;
  position: relative;
  width: 214px;
}

.new-movies {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 65px;
  margin-left: 1px;
  margin-top: 104px;
  min-height: 390px;
  width: 829px;
  z-index: 5;
}

.upcoming-movies {
  color: var(--primary);
  font-family: var(--font-family-poppins);
  font-size: 44px;
  font-weight: 600;
  letter-spacing: 0;
  line-height: normal;
  min-height: 42px;
  white-space: nowrap;
}

.upcoming-movie-box-wide-container {
  align-items: flex-start;
  display: flex;
  height: 283px;
  margin-left: 3px;
  min-width: 824px;
}

.upcoming-movie-box-wide {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  min-height: 283px;
  width: 458px;
}

.joker {
  height: 222px;
  margin-left: 0.44px;
  object-fit: cover;
  width: 333px;
}

.joker-folie-deux {
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  display: -webkit-box;
  letter-spacing: 0;
  line-height: normal;
  margin-top: 5px;
  min-height: 33px;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 200px;
}

.date {
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  display: -webkit-box;
  letter-spacing: 0;
  line-height: normal;
  min-height: 22px;
  overflow: hidden;
  text-overflow: ellipsis;
}

.upcoming-movie-box-wide-1 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  min-height: 283px;
  width: 366px;
}

.wolverine {
  height: 222px;
  object-fit: cover;
  width: 333px;
}

.deadpool-wolverine {
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  display: -webkit-box;
  letter-spacing: 0;
  line-height: normal;
  margin-left: 0.24px;
  margin-top: 5px;
  min-height: 33px;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 244px;
}

.date-1 {
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  display: -webkit-box;
  letter-spacing: 0;
  line-height: normal;
  margin-left: 0.24px;
  min-height: 22px;
  overflow: hidden;
  text-overflow: ellipsis;
}

.frame-42 {
  align-items: center;
  background: linear-gradient(90deg, rgba(97, 97, 97, 1) 0%, rgba(24, 24, 24, 1) 100%);
  border-radius: 20px;
  display: flex;
  gap: 48px;
  height: 129px;
  margin-right: 1px;
  margin-top: 111px;
  min-width: 639px;
  padding: 0 65px;
  z-index: 6;
}

.tapevector {
  height: 103px;
  width: 108px;
}

.browse-all-movies {
  color: var(--primary);
  font-family: var(--font-family-poppins);
  font-size: var(--font-size-xxl);
  font-weight: 600;
  letter-spacing: 0;
  line-height: normal;
  margin-bottom: 2px;
  min-height: 43px;
  width: 264px;
}

.govector {
  height: 31px;
  width: 36px;
}
</style>
