<template>
  <div :class="[`read-only-rating-4`, className || ``]">
    <img
      class="star-1"
      src="https://cdn.animaapp.com/projects/686ea1d35e13e10175fc90b1/releases/686ea3d0637921489cf67a29/img/star.svg"
      alt="Star"
    />
    <img
      class="star-1"
      src="https://cdn.animaapp.com/projects/686ea1d35e13e10175fc90b1/releases/686ea3d0637921489cf67a29/img/star-2.svg"
      alt="Star"
    />
    <img
      class="star-1"
      src="https://cdn.animaapp.com/projects/686ea1d35e13e10175fc90b1/releases/686ea3d0637921489cf67a29/img/star-3.svg"
      alt="Star"
    />
    <img
      class="star-1"
      src="https://cdn.animaapp.com/projects/686ea1d35e13e10175fc90b1/releases/686ea3d0637921489cf67a29/img/star-4.svg"
      alt="Star"
    />
    <img
      class="star-1"
      src="https://cdn.animaapp.com/projects/686ea1d35e13e10175fc90b1/releases/686ea3d0637921489cf67a29/img/star-5.svg"
      alt="Star"
    />
  </div>
</template>

<script>
export default {
  name: "ReadOnlyRating",
  props: ["className"],
};
</script>

<style>
.read-only-rating-4 {
  align-items: flex-start;
  display: inline-flex;
  gap: 3px;
  left: 0;
  position: absolute;
  top: 39px;
}

.star-1 {
  height: 15px;
  position: relative;
  width: 15px;
}

.read-only-rating-4.read-only-rating .star-1,
.read-only-rating-4.read-only-rating-1 .star-1 {
  width: 15px;
}

.read-only-rating-4.read-only-rating-1 {
  align-items: flex-start;
  display: inline-flex;
  gap: 3px;
  left: 0;
  position: absolute;
  top: 60px;
}

.read-only-rating-4.read-only-rating-2 {
  align-items: flex-start;
  display: inline-flex;
  gap: 3px;
  margin-left: 9px;
  margin-top: 10px;
  position: relative;
}

.read-only-rating-4.read-only-rating-3 {
  align-items: flex-start;
  display: inline-flex;
  gap: 3px;
  margin-top: 32px;
  position: relative;
}
</style>
