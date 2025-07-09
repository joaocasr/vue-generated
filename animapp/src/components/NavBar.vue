<template>
  <div :class="[`nav-bar`, className || ``]">
    <img
      class="x4831192-1"
      src="https://cdn.animaapp.com/projects/686ea1d35e13e10175fc90b1/releases/686ea3d0637921489cf67a29/img/4831192-1.png"
      alt="4831192 1"
    />
    <router-link to="/homeu35page"><div class="moviestv alatsi-normal-white-20px">MOVIESTV</div> </router-link>
    <div class="nav-container1">
      <home :place="home1Props.place" />
      <home :place="home2Props.place" :className="home2Props.className" />
      <home :place="home3Props.place" :className="home3Props.className" />
      <div class="nav-container2">
        <router-link to="/watchlistu35page">
          <div class="list">
            <img
              class="list-vector"
              src="https://cdn.animaapp.com/projects/686ea1d35e13e10175fc90b1/releases/686ea3d0637921489cf67a29/img/listvector.svg"
              alt="listVector"
            /></div></router-link
        ><img
          class="wishlist"
          src="https://cdn.animaapp.com/projects/686ea1d35e13e10175fc90b1/releases/686ea3d0637921489cf67a29/img/wishlist.svg"
          alt="Wishlist"
        />
        <x-menu :option1Props="xMenuProps.option1Props" />
      </div>
    </div>
  </div>
</template>

<script>
import Home from "./Home";
import xMenu from "./xMenu";
export default {
  name: "NavBar",
  components: {
    Home,
    xMenu,
  },
  props: ["className", "home1Props", "home2Props", "home3Props", "xMenuProps"],
};
</script>

<style>
.nav-bar {
  align-items: center;
  background-color: var(--licorice);
  display: flex;
  height: 121px;
  left: 0;
  padding: 0 42px;
  position: fixed;
  top: 0;
  width: 1540px;
  z-index: 7;
}

.x4831192-1 {
  height: 50px;
  margin-bottom: 13px;
  object-fit: cover;
  width: 50px;
}

.moviestv {
  cursor: pointer;
  letter-spacing: 0;
  line-height: normal;
  margin-bottom: 5px;
  margin-left: 25px;
  min-height: 26px;
  min-width: 86px;
}

.nav-container1 {
  align-items: center;
  display: flex;
  height: 121px;
  margin-left: 508px;
  position: relative;
  width: 739px;
}

.nav-container2 {
  align-items: center;
  display: flex;
  justify-content: flex-end;
  margin-left: 64px;
  margin-top: 1px;
  min-width: 232px;
  position: relative;
}

.list {
  align-items: center;
  cursor: pointer;
  display: flex;
  height: 24px;
  padding: 0 3px;
  width: 24px;
}

.list-vector {
  height: 10px;
  width: 18px;
}

.wishlist {
  height: 32px;
  margin-left: 63px;
  width: 32px;
}

.nav-bar.nav-bar-1 {
  z-index: 5;
}

.nav-bar.nav-bar-2 {
  z-index: 3;
}

.nav-bar.nav-bar-3 {
  z-index: 14;
}
</style>
