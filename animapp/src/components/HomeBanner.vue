<template>
  <div class="home-banner" :style="{ 'background-image': 'url(' + homebanner + ')' }">
    <div class="overlap-group">
      <p class="durationhome">{{ durationhome }}</p>
      <div class="flex-row actor-normal-white-16px">
        <img
          class="star"
          src="https://cdn.animaapp.com/projects/686ea1d35e13e10175fc90b1/releases/686ea3d0637921489cf67a29/img/star.svg"
          alt="Star"
        />
        <div class="ratinghome">{{ ratinghome }}</div>
        <div class="datehome">{{ datehome }}</div>
      </div>
      <h1 class="titlehome">{{ titlehome }}</h1>
      <p class="plothome valign-text-middle">{{ plothome }}</p>
      <div class="watch-container">
        <div class="watch-movie-btn">
          <img
            class="playmovie"
            src="https://cdn.animaapp.com/projects/686ea1d35e13e10175fc90b1/releases/686ea3d0637921489cf67a29/img/playmovie.svg"
            alt="playmovie"
          />
          <div class="watch alegreyasanssc-medium-white-16px">{{ watchOnlineNow }}</div>
        </div>
        <div class="watch-trailer-btn">
          <img
            class="playmovie-1"
            src="https://cdn.animaapp.com/projects/686ea1d35e13e10175fc90b1/releases/686ea3d0637921489cf67a29/img/playmovie.svg"
            alt="playmovie"
          />
          <div class="watch alegreyasanssc-medium-white-16px">{{ watchTrailer }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeBanner",
  props: [
    "homebanner",
    "durationhome",
    "ratinghome",
    "datehome",
    "titlehome",
    "plothome",
    "watchOnlineNow",
    "watchTrailer",
  ],
};
</script>

<style>
.home-banner {
  align-items: flex-start;
  background-position: 50% 50%;
  background-size: cover;
  display: flex;
  height: 663px;
  margin-top: 121px;
  width: 1540px;
  z-index: 1;
}

.overlap-group {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  min-height: 663px;
  padding: 154px 53px;
  width: 1540px;
}

.durationhome {
  color: var(--primary);
  font-family: var(--font-family-actor);
  font-size: var(--font-size-s);
  font-weight: 400;
  letter-spacing: 0;
  line-height: normal;
  margin-left: 7px;
  min-height: 18px;
  white-space: nowrap;
}

.flex-row {
  align-items: center;
  display: flex;
  height: 19px;
  margin-left: 7.39px;
  margin-top: 22px;
  min-width: 196px;
}

.star {
  height: 15px;
  margin-top: 2px;
  width: 15px;
}

.ratinghome {
  letter-spacing: 0;
  line-height: normal;
  margin-left: 8px;
  min-height: 19px;
  min-width: 42px;
  white-space: nowrap;
}

.datehome {
  letter-spacing: 0;
  line-height: normal;
  margin-left: 18px;
  min-height: 19px;
  min-width: 113px;
  white-space: nowrap;
}

.titlehome {
  color: var(--primary);
  font-family: var(--font-family-alegreya_sans);
  font-size: 66px;
  font-weight: 500;
  letter-spacing: 0;
  line-height: 50px;
  margin-left: 7px;
  margin-top: 26px;
  min-width: 212px;
  text-align: center;
  white-space: nowrap;
}

.plothome {
  color: var(--primary);
  font-family: var(--font-family-alegreya_sans);
  font-size: var(--font-size-l);
  font-weight: 500;
  height: 44px;
  letter-spacing: 0;
  line-height: 22px;
  margin-left: 9px;
  margin-top: 20px;
  width: 607px;
}

.watch-container {
  align-items: flex-start;
  display: flex;
  gap: 52px;
  margin-top: 22px;
  min-width: 412px;
}

.watch-movie-btn {
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

.playmovie {
  align-self: center;
  height: 12px;
  margin-left: 4px;
  width: 10px;
}

.watch {
  letter-spacing: 0;
  line-height: 24px;
  white-space: nowrap;
}

.watch-trailer-btn {
  align-items: flex-start;
  background-color: var(--black-russian);
  border-radius: 40px;
  display: flex;
  gap: 18px;
  height: 60px;
  overflow: hidden;
  padding: 17px 26px;
  width: 180px;
}

.playmovie-1 {
  align-self: center;
  height: 12px;
  margin-left: 2px;
  width: 10px;
}
</style>
