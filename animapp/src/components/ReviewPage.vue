<template>
  <div class="container-center-horizontal">
    <div class="reviewu35page screen">
      <nav-bar
        :className="navBarProps.className"
        :home1Props="navBarProps.home1Props"
        :home2Props="navBarProps.home2Props"
        :home3Props="navBarProps.home3Props"
        :xMenuProps="navBarProps.xMenuProps"
      />
      <div class="flex-row-4">
        <div class="flex-col">
          <h1 class="title-3 valign-text-middle">{{ title }}</h1>
          <div class="group-40">
            <div class="rate">{{ rate }}</div>
            <interactive-rating />
          </div>
          <div class="overlap-group-7">
            <div class="write-down-your-review">{{ writeDownYourReview }}</div>
          </div>
        </div>
        <img class="image-12" :src="image12" alt="image 12" />
      </div>
      <div class="flex-col-1">
        <div class="publish-btn">
          <div class="publish">{{ publish }}</div>
        </div>
        <x-footer :className="xFooterProps.className" />
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "./NavBar";
import InteractiveRating from "./InteractiveRating";
import XFooter from "./XFooter";
export default {
  name: "ReviewPage",
  components: {
    NavBar,
    InteractiveRating,
    XFooter,
  },
  props: ["title", "rate", "writeDownYourReview", "image12", "publish", "navBarProps", "xFooterProps"],
};
</script>

<style>
.reviewu35page {
  align-items: center;
  background-color: var(--black);
  display: flex;
  flex-direction: column;
  height: 3493px;
  position: relative;
  width: 1540px;
}

.flex-row-4 {
  align-items: flex-start;
  display: flex;
  gap: 62px;
  height: 526px;
  margin-right: 111px;
  margin-top: 230px;
  min-width: 1203px;
  z-index: 2;
}

.flex-col {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  min-height: 526px;
  width: 899px;
}

.title-3 {
  color: var(--primary);
  font-family: var(--font-family-raleway);
  font-size: 66px;
  font-weight: 400;
  height: 77px;
  letter-spacing: 0;
  line-height: 18px;
  text-align: center;
  width: 449px;
}

.group-40 {
  align-items: flex-start;
  align-self: flex-end;
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-right: 190px;
  margin-top: 124px;
  min-height: 58px;
  position: relative;
  width: 87px;
}

.rate {
  color: #d4dadd;
  font-family: var(--font-family-poppins);
  font-size: 10px;
  font-weight: 500;
  letter-spacing: 0;
  line-height: normal;
  margin-left: 2px;
  min-height: 27px;
  width: 73px;
}

.overlap-group-7 {
  align-items: flex-start;
  background-color: #646769;
  border: 1px solid;
  border-color: #ffffff33;
  border-radius: 20px;
  display: flex;
  height: 229px;
  margin-top: 38px;
  min-width: 897px;
  padding: 33px 52px;
}

.write-down-your-review {
  color: var(--x50-white);
  font-family: var(--font-family-open_sans);
  font-size: var(--font-size-xxl);
  font-weight: 600;
  letter-spacing: 0;
  line-height: normal;
  min-height: 36px;
  width: 312px;
}

.image-12 {
  height: 358px;
  margin-top: 1px;
  object-fit: cover;
  width: 242px;
}

.flex-col-1 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 2223px;
  margin-top: 41px;
  min-height: 2696px;
  position: relative;
  width: 1540px;
  z-index: 1;
}

.publish-btn {
  align-items: flex-start;
  background-color: #2d2d2d;
  border-radius: 10px;
  box-shadow: 0px 4px 4px #00000040;
  display: flex;
  height: 33px;
  margin-left: 113px;
  overflow: hidden;
  padding: 7px 20px;
  width: 88px;
}

.publish {
  color: var(--primary);
  font-family: var(--font-family-raleway);
  font-size: var(--font-size-xxs);
  font-weight: 400;
  letter-spacing: 0;
  line-height: 18px;
  white-space: nowrap;
}
</style>
