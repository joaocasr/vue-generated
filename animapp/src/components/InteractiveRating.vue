<template>
  <div class="interactive-rating">
    <star />
    <star />
    <star />
    <star />
    <star />
  </div>
</template>

<script>
import Star from "./Star";
export default {
  name: "InteractiveRating",
  components: {
    Star,
  },
};
</script>

<style>
.interactive-rating {
  align-items: flex-start;
  display: inline-flex;
  gap: 3px;
  height: 27px;
  position: relative;
}
</style>
