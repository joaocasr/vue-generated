<template>
  <div class="menu">
    <icon-menu />
    <div class="options-menu">
      <div class="option1"><div class="login valign-text-middle alatsi-normal-black-20px">Login</div></div>
      <option1 :login="option1Props.login" />
    </div>
  </div>
</template>

<script>
import IconMenu from "./IconMenu";
import Option1 from "./Option1";
export default {
  name: "xMenu",
  components: {
    IconMenu,
    Option1,
  },
  props: ["option1Props"],
};
</script>

<style>
.menu,
.menu-1,
.menu-2,
.menu-3 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  margin-left: 72px;
  min-height: 32px;
  position: relative;
  width: 32px;
}

.options-menu,
.options-menu-1,
.options-menu-2,
.options-menu-3 {
  align-items: flex-start;
  background-color: var(--primary);
  display: flex;
  flex-direction: column;
  height: 94px;
  position: relative;
  width: 159px;
}

.option1,
.option1-1,
.option1-2,
.option1-3 {
  align-items: flex-start;
  border: 1px solid;
  border-color: var(--black);
  cursor: pointer;
  display: flex;
  height: 47px;
  padding: 10px 19px;
  width: 159px;
}

.login,
.login-1,
.login-2,
.login-3 {
  height: 26px;
  letter-spacing: 0;
  line-height: normal;
  min-width: 46px;
  text-align: center;
}
</style>
