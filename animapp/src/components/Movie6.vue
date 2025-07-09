<template>
  <div class="movie6">
    <div class="overlap-group12" :style="{ 'background-image': 'url(' + overlapGroup12 + ')' }">
      <div class="rectangle-11-2"></div>
      <div class="x45-4 lato-semi-bold-black-20px">{{ x45 }}</div>
    </div>
    <div class="overlap-group11">
      <div class="movie1desc-2">
        <div class="title1-2 lato-semi-bold-white-22px">{{ title1 }}</div>
        <div class="overlap-group-5 lato-bold-hint-of-red-15px">
          <div class="duration1-2">{{ duration1 }}</div>
          <div class="address-2">{{ address }}</div>
        </div>
      </div>
      <read-only-rating :className="readOnlyRatingProps.className" />
    </div>
  </div>
</template>

<script>
import ReadOnlyRating from "./ReadOnlyRating";
export default {
  name: "Movie6",
  components: {
    ReadOnlyRating,
  },
  props: ["overlapGroup12", "x45", "title1", "duration1", "address", "readOnlyRatingProps"],
};
</script>

<style>
.movie6 {
  align-items: flex-end;
  display: flex;
  flex-direction: column;
  gap: 5px;
  left: 0;
  min-height: 461px;
  padding: 14px 15px;
  position: absolute;
  top: 460px;
  width: 214px;
}

.overlap-group12 {
  background-position: 50% 50%;
  background-size: cover;
  height: 255px;
  margin-right: 12px;
  margin-top: 50px;
  position: relative;
  width: 166px;
}

.rectangle-11-2 {
  background-color: var(--my-sin);
  border-radius: 0px 17px 0px 17px;
  box-shadow: 0px 4px 9px #00000040;
  height: 33px;
  left: 111px;
  position: absolute;
  top: 0;
  width: 55px;
}

.x45-4 {
  left: 113px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  text-align: right;
  top: 2px;
  white-space: nowrap;
  width: 40px;
}

.overlap-group11 {
  height: 123px;
  position: relative;
  width: 178px;
}

.movie1desc-2 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 34px;
  left: 1px;
  min-height: 123px;
  position: absolute;
  top: 0;
  width: 177px;
}

.title1-2 {
  letter-spacing: 0;
  line-height: normal;
  min-height: 60px;
  width: 165px;
}

.overlap-group-5 {
  height: 29px;
  position: relative;
  width: 171px;
}

.duration1-2 {
  left: 96px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 0;
  width: 75px;
}

.address-2 {
  left: 0;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 0;
  white-space: nowrap;
  width: 165px;
}
</style>
