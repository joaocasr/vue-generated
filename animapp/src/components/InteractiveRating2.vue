<template>
  <div class="interactive-rating-1">
    <star :className="star1Props.className" />
    <star :className="star2Props.className" />
    <star :className="star3Props.className" />
    <star :className="star4Props.className" />
    <star :className="star5Props.className" />
  </div>
</template>

<script>
import Star from "./Star";
export default {
  name: "InteractiveRating2",
  components: {
    Star,
  },
  props: ["star1Props", "star2Props", "star3Props", "star4Props", "star5Props"],
};
</script>

<style>
.interactive-rating-1 {
  align-items: flex-start;
  display: flex;
  gap: 3px;
  height: 25px;
  margin-bottom: 1px;
  margin-left: 22px;
  position: relative;
  width: 149px;
}
</style>
