<template>
  <div :class="[`movie5`, className || ``]">
    <div class="overlap-group-2" :style="{ 'background-image': 'url(' + overlapGroup9 + ')' }">
      <div class="rectangle-11-1"></div>
      <div class="text-3 lato-semi-bold-black-20px">{{ text3 }}</div>
    </div>
    <div class="overlap-group-3">
      <movie1desc :title1="movie1descProps.title1" :className="movie1descProps.className" />
      <read-only-rating :className="readOnlyRatingProps.className" />
    </div>
  </div>
</template>

<script>
import Movie1desc from "./Movie1desc";
import ReadOnlyRating from "./ReadOnlyRating";
export default {
  name: "Movie5",
  components: {
    Movie1desc,
    ReadOnlyRating,
  },
  props: ["overlapGroup9", "text3", "className", "movie1descProps", "readOnlyRatingProps"],
};
</script>

<style>
.movie5 {
  align-items: flex-end;
  display: flex;
  flex-direction: column;
  gap: 5px;
  min-height: 461px;
  padding: 36px 17px;
  width: 214px;
}

.overlap-group-2 {
  align-self: center;
  background-position: 50% 50%;
  background-size: cover;
  height: 255px;
  margin-right: 6px;
  margin-top: 28px;
  position: relative;
  width: 166px;
}

.rectangle-11-1 {
  background-color: var(--my-sin);
  border-radius: 0px 17px 0px 17px;
  box-shadow: 0px 4px 9px #00000040;
  height: 33px;
  left: 111px;
  position: absolute;
  top: 0;
  width: 55px;
}

.text-3 {
  left: 113px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  text-align: right;
  top: 2px;
  white-space: nowrap;
  width: 40px;
}

.overlap-group-3 {
  height: 101px;
  position: relative;
  width: 176px;
}

.movie5.movie2 {
  left: 0;
  padding: 36px 17px;
  position: absolute;
  top: 0;
}

.movie5.movie {
  padding: 36px 17px;
}
</style>
