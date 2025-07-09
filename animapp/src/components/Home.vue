<template>
  <div :class="[`nav-container1-item-1`, className || ``]">
    <div class="place valign-text-middle alatsi-normal-white-20px">{{ place }}</div>
  </div>
</template>

<script>
export default {
  name: "Home",
  props: ["place", "className"],
};
</script>

<style>
.nav-container1-item-1 {
  align-items: flex-start;
  display: flex;
  width: 121px;
}

.place {
  height: 121px;
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  text-align: center;
  width: 121px;
}
</style>
