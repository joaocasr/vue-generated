<template>
  <div :class="[`movie1desc-1-1`, className || ``]">
    <div class="title1-1 lato-semi-bold-white-22px">{{ title1 }}</div>
    <div class="overlap-group-4 lato-bold-hint-of-red-15px">
      <div class="duration1-1">1h,34min</div>
      <div class="address-1">10 Oct 2021</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Movie1desc",
  props: ["title1", "className"],
};
</script>

<style>
.movie1desc-1-1 {
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

.title1-1 {
  letter-spacing: 0;
  line-height: normal;
  min-height: 21px;
  white-space: nowrap;
}

.overlap-group-4 {
  height: 29px;
  margin-left: 0;
  position: relative;
  width: 169px;
}

.duration1-1 {
  left: 94px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 0;
  width: 75px;
}

.address-1 {
  left: 0;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 0;
  white-space: nowrap;
  width: 165px;
}
</style>
