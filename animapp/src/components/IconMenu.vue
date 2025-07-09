<template>
  <div class="icon-menu">
    <img
      class="head-vector"
      src="https://cdn.animaapp.com/projects/686ea1d35e13e10175fc90b1/releases/686ea3d0637921489cf67a29/img/headvector.svg"
      alt="headVector"
    />
    <img
      class="body-vector"
      src="https://cdn.animaapp.com/projects/686ea1d35e13e10175fc90b1/releases/686ea3d0637921489cf67a29/img/bodyvector.svg"
      alt="bodyVector"
    />
  </div>
</template>

<script>
export default {
  name: "IconMenu",
};
</script>

<style>
.icon-menu,
.icon-menu-1,
.icon-menu-2,
.icon-menu-3 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-height: 32px;
  padding: 4.2px 6.2px;
  width: 32px;
}

.head-vector,
.head-vector-1,
.head-vector-2,
.head-vector-3 {
  align-self: flex-end;
  height: 10px;
  margin-right: 5px;
  margin-top: 2px;
  width: 10px;
}

.body-vector,
.body-vector-1,
.body-vector-2,
.body-vector-3 {
  height: 10px;
  width: 18px;
}
</style>
