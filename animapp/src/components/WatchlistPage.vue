<template>
  <div class="container-center-horizontal">
    <div class="watchlistu35page screen">
      <nav-bar
        :className="navBarProps.className"
        :home1Props="navBarProps.home1Props"
        :home2Props="navBarProps.home2Props"
        :home3Props="navBarProps.home3Props"
        :xMenuProps="navBarProps.xMenuProps"
      />
      <h1 class="title-2 valign-text-middle">{{ title }}</h1>
      <div class="flex-row-3">
        <div class="overlap-group1-1">
          <div class="items-on-list valign-text-middle lato-bold-bon-jour-20px">{{ itemsOnList }}</div>
          <div class="number-12 valign-text-middle lato-bold-royal-blue-38px">{{ number }}</div>
        </div>
        <div class="overlap-group-6">
          <div class="average-score valign-text-middle lato-bold-bon-jour-20px">{{ averageScore }}</div>
          <div class="text-5 valign-text-middle lato-bold-royal-blue-38px">{{ text5 }}</div>
        </div>
        <router-link to="/deletionwatchlistmodal">
          <div class="frame-825">
            <div class="clear-watchlist valign-text-middle lato-bold-bon-jour-20px">{{ clearWatchlist }}</div>
            <img
              class="huge-icon"
              src="https://cdn.animaapp.com/projects/686ea1d35e13e10175fc90b1/releases/686ea3d0637921489cf67a29/img/huge-icon.svg"
              alt="Huge-icon"
            /></div
        ></router-link>
      </div>
      <div class="poster-1">
        <img class="poster3-1" :src="poster31" alt="poster3 1" /><read-only-rating
          :className="readOnlyRatingProps.className"
        />
        <p class="fantastic-beasts-th lato-normal-bon-jour-16px">
          <span class="lato-normal-bon-jour-16px">{{ spanText1 }}</span
          ><span class="span1">{{ spanText2 }}</span>
        </p>
      </div>
      <x-footer :className="xFooterProps.className" />
    </div>
  </div>
</template>

<script>
import NavBar from "./NavBar";
import ReadOnlyRating from "./ReadOnlyRating";
import XFooter from "./XFooter";
export default {
  name: "WatchlistPage",
  components: {
    NavBar,
    ReadOnlyRating,
    XFooter,
  },
  props: [
    "title",
    "itemsOnList",
    "number",
    "averageScore",
    "text5",
    "clearWatchlist",
    "poster31",
    "spanText1",
    "spanText2",
    "navBarProps",
    "readOnlyRatingProps",
    "xFooterProps",
  ],
};
</script>

<style>
.watchlistu35page {
  align-items: flex-start;
  background-color: var(--black);
  display: flex;
  flex-direction: column;
  height: 3493px;
  position: relative;
  width: 1540px;
}

.title-2 {
  color: var(--primary);
  font-family: var(--font-family-lato);
  font-size: 66px;
  font-weight: 400;
  height: 79px;
  letter-spacing: 0;
  line-height: normal;
  margin-left: 123px;
  margin-top: 201px;
  white-space: nowrap;
  z-index: 2;
}

.flex-row-3 {
  align-items: flex-end;
  align-self: center;
  display: flex;
  height: 121px;
  margin-left: 48px;
  margin-top: 45px;
  min-width: 1312px;
  z-index: 1;
}

.overlap-group1-1 {
  align-items: flex-start;
  background-color: var(--alto);
  border: 1px solid;
  border-color: var(--blueberry);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 21px;
  margin-bottom: -1px;
  margin-left: -1px;
  min-height: 123px;
  padding: 14px 15px;
  width: 170px;
}

.items-on-list {
  height: 24px;
  letter-spacing: 0;
  line-height: normal;
  white-space: nowrap;
}

.number-12 {
  align-self: center;
  height: 46px;
  letter-spacing: 0;
  line-height: normal;
  margin-right: 7px;
  min-width: 23px;
}

.overlap-group-6 {
  align-items: flex-start;
  background-color: var(--alto);
  border: 1px solid;
  border-color: var(--blueberry);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 17px;
  margin-bottom: -1px;
  margin-left: 38px;
  min-height: 123px;
  padding: 14.3px 15px;
  width: 192px;
}

.average-score,
.clear-watchlist {
  height: 23px;
  letter-spacing: 0;
  line-height: normal;
  white-space: nowrap;
}

.text-5 {
  align-self: center;
  height: 44px;
  letter-spacing: 0;
  line-height: normal;
  margin-left: 13px;
  white-space: nowrap;
  width: 63px;
}

.frame-825 {
  align-items: flex-start;
  background-color: #333333;
  border-radius: 11px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  gap: 21px;
  margin-left: 723px;
  min-height: 99px;
  padding: 10px 24px;
  width: 190px;
}

.huge-icon {
  align-self: center;
  height: 33px;
  margin-right: 1px;
  width: 33px;
}

.poster-1 {
  align-items: flex-start;
  background-color: #1f1f1f;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  margin-left: 156px;
  margin-top: 97px;
  min-height: 340px;
  position: relative;
  width: 150px;
  z-index: 3;
}

.poster3-1 {
  height: 225px;
  object-fit: cover;
  width: 150px;
}

.fantastic-beasts-th {
  align-self: center;
  letter-spacing: 0;
  line-height: normal;
  margin-top: 1px;
  min-height: 76px;
  width: 130px;
}

.span1 {
  color: var(--gray-degreesgray-5);
  font-family: var(--font-family-lato);
  font-size: var(--font-size-m);
  font-weight: 300;
}
</style>
