<template>
  <div class="movie1">
    <div class="overlap-group1">
      <router-link to="/movieu35page"><img class="image-10" :src="image10" alt="image 10" /></router-link>
      <div class="rectangle-11"></div>
      <div class="x45 lato-semi-bold-black-20px">{{ x45 }}</div>
    </div>
    <div class="overlap-group2">
      <div class="movie1desc">
        <router-link to="/movieu35page">
          <div class="title1 lato-semi-bold-white-22px">{{ title1 }}</div>
        </router-link>
        <div class="overlap-group-1 lato-bold-hint-of-red-15px">
          <div class="duration1">{{ duration1 }}</div>
          <div class="address">{{ address }}</div>
        </div>
      </div>
      <read-only-rating />
    </div>
  </div>
</template>

<script>
import ReadOnlyRating from "./ReadOnlyRating";
export default {
  name: "Movie1",
  components: {
    ReadOnlyRating,
  },
  props: ["image10", "x45", "title1", "duration1", "address"],
};
</script>

<style>
.movie1 {
  align-items: flex-end;
  display: flex;
  flex-direction: column;
  gap: 5px;
  min-height: 461px;
  padding: 36px 17px;
  width: 214px;
}

.overlap-group1 {
  align-self: center;
  height: 255px;
  margin-right: 6px;
  margin-top: 28px;
  position: relative;
  width: 166px;
}

.image-10 {
  cursor: pointer;
  height: 255px;
  left: 0;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 166px;
}

.rectangle-11 {
  background-color: var(--my-sin);
  border-radius: 0px 17px 0px 17px;
  box-shadow: 0px 4px 9px #00000040;
  height: 33px;
  left: 111px;
  position: absolute;
  top: 0;
  width: 55px;
}

.x45 {
  left: 119px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  text-align: center;
  top: 2px;
  white-space: nowrap;
}

.overlap-group2 {
  height: 101px;
  position: relative;
  width: 176px;
}

.movie1desc {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 51px;
  left: 1px;
  min-height: 101px;
  position: absolute;
  top: 0;
  width: 175px;
}

.title1 {
  cursor: pointer;
  letter-spacing: 0;
  line-height: normal;
  min-height: 21px;
  white-space: nowrap;
}

.overlap-group-1 {
  height: 29px;
  margin-left: 0;
  position: relative;
  width: 169px;
}

.duration1 {
  left: 94px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 0;
  width: 75px;
}

.address {
  left: 0;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 0;
  white-space: nowrap;
  width: 165px;
}
</style>
