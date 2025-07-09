<template>
  <div class="input-search">
    <img
      class="vector"
      src="https://cdn.animaapp.com/projects/686ea1d35e13e10175fc90b1/releases/686ea3d0637921489cf67a29/img/vector.svg"
      alt="Vector"
    />
    <p class="inputxt">{{ inputxt }}</p>
  </div>
</template>

<script>
export default {
  name: "InputSearch",
  props: ["inputxt"],
};
</script>

<style>
.input-search {
  align-items: flex-start;
  background-color: var(--black-russian);
  border-radius: 4px;
  display: flex;
  gap: 28px;
  height: 75px;
  margin-left: 62px;
  min-width: 350px;
  padding: 23px;
  z-index: 4;
}

.vector {
  height: 26px;
  width: 26px;
}

.inputxt {
  align-self: center;
  color: #dadada;
  font-family: var(--font-family-poppins);
  font-size: var(--font-size-xl);
  font-weight: 400;
  letter-spacing: 0;
  line-height: 18px;
  margin-bottom: 5px;
  min-width: 209px;
  opacity: 0.5;
  white-space: nowrap;
}
</style>
