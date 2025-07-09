<template>
  <div class="option2">
    <div class="sign-up valign-text-middle alatsi-normal-black-20px">{{ login }}</div>
  </div>
</template>

<script>
export default {
  name: "Option1",
  props: ["login"],
};
</script>

<style>
.option2,
.option2-1,
.option2-2,
.option2-3 {
  align-items: flex-start;
  border: 1px solid;
  border-color: var(--black);
  display: flex;
  height: 47px;
  padding: 10px 19px;
  width: 159px;
}

.sign-up,
.sign-up-1,
.sign-up-2,
.sign-up-3 {
  height: 26px;
  letter-spacing: 0;
  line-height: normal;
  min-width: 64px;
  text-align: center;
}
</style>
