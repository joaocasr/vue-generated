<template>
  <div :class="[`review`, className || ``]">
    <div class="flex-row-8">
      <img
        class="generic-user-icon-13"
        src="https://cdn.animaapp.com/projects/686ea1d35e13e10175fc90b1/releases/686ea3d0637921489cf67a29/img/generic-user-icon-13-2622662197-removebg-preview-1.png"
        alt="generic-user-icon-13-2622662197-removebg-preview 1"
      />
      <div class="name-1 abeezee-normal-gray-20px">John H</div>
      <interactive-rating2
        :star1Props="interactiveRating2Props.star1Props"
        :star2Props="interactiveRating2Props.star2Props"
        :star3Props="interactiveRating2Props.star3Props"
        :star4Props="interactiveRating2Props.star4Props"
        :star5Props="interactiveRating2Props.star5Props"
      />
    </div>
    <p class="the-cutwork-poplin-d raleway-normal-gray-11px">
      The Cutwork Poplin Dress is a great mix of stylish and comfortable. The cutwork detailing is beautiful and adds a
      sophisticated touch. It fits well and is versatile enough for casual or semi-formal occasions. A fantastic
      addition to any wardrobe, especially for summer!
    </p>
  </div>
</template>

<script>
import InteractiveRating2 from "./InteractiveRating2";
export default {
  name: "Review",
  components: {
    InteractiveRating2,
  },
  props: ["className", "interactiveRating2Props"],
};
</script>

<style>
.review {
  align-items: flex-start;
  background-color: var(--charade);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  gap: 7px;
  height: 144px;
  margin-left: 173px;
  margin-top: 40px;
  overflow: hidden;
  padding: 1px 29px;
  width: 594px;
  z-index: 10;
}

.flex-row-8 {
  align-items: center;
  display: flex;
  margin-top: 13px;
  min-width: 291px;
  position: relative;
}

.generic-user-icon-13 {
  height: 40px;
  object-fit: cover;
  width: 40px;
}

.name-1 {
  letter-spacing: 0;
  line-height: 24px;
  margin-bottom: 2px;
  margin-left: 15px;
  min-width: 65px;
  white-space: nowrap;
}

.the-cutwork-poplin-d {
  align-self: center;
  letter-spacing: 0;
  line-height: 18px;
  margin-right: 6px;
  min-height: 82px;
  width: 514px;
}

.review.review-1 {
  z-index: 11;
}
</style>
