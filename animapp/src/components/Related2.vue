<template>
  <div :class="[`norm-movie-box`, className || ``]">
    <img class="boyheron" :src="boyheron" alt="boyheron" />
    <p class="the-boy-and-the-heron poppins-normal-bon-jour-14px">{{ theBoyAndTheHeron }}</p>
  </div>
</template>

<script>
export default {
  name: "Related2",
  props: ["boyheron", "theBoyAndTheHeron", "className"],
};
</script>

<style>
.norm-movie-box {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 8px;
  height: 213px;
  position: relative;
  width: 160px;
}

.boyheron {
  height: 220px;
  margin-bottom: -7px;
  object-fit: cover;
  position: relative;
  width: 160px;
}

.the-boy-and-the-heron {
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  display: -webkit-box;
  height: 45px;
  letter-spacing: 0;
  line-height: normal;
  margin-bottom: -59px;
  overflow: hidden;
  position: relative;
  text-overflow: ellipsis;
  width: 155px;
}

.norm-movie-box.related,
.norm-movie-box.related-1 {
  height: 220px;
  margin-top: 10px;
}

.norm-movie-box.related-1 .boyheron,
.norm-movie-box.related .boyheron {
  margin-bottom: unset;
}

.norm-movie-box.related-1 .the-boy-and-the-heron {
  -webkit-line-clamp: 1;
  height: unset;
  margin-bottom: -28px;
  width: fit-content;
}

.norm-movie-box.related .the-boy-and-the-heron {
  height: 42px;
  margin-bottom: -49px;
  width: 160px;
}
</style>
