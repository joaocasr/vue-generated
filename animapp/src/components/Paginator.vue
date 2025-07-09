<template>
  <div :class="[`paginator`, className || ``]">
    <div class="pagination">
      <div class="flex-row-1">
        <img
          class="arrow-left"
          src="https://cdn.animaapp.com/projects/686ea1d35e13e10175fc90b1/releases/686ea3d0637921489cf67a29/img/arrow-left.svg"
          alt="Arrow left"
        />
        <div class="pagination-list">
          <div class="pagination-page"><div class="number single-linebody-base">1</div></div>
          <div class="number-1 single-linebody-base">2</div>
          <div class="number-2 single-linebody-base">3</div>
          <div class="text-4 bodybasebold">...</div>
          <div class="number-3 single-linebody-base">68</div>
        </div>
        <img
          class="arrow-right"
          src="https://cdn.animaapp.com/projects/686ea1d35e13e10175fc90b1/releases/686ea3d0637921489cf67a29/img/arrow-right.svg"
          alt="Arrow right"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Paginator",
  props: ["className"],
};
</script>

<style>
.paginator {
  align-items: flex-start;
  display: flex;
  left: 323px;
  position: absolute;
  top: 920px;
  width: 304px;
}

.pagination {
  height: 38px;
  position: relative;
  width: 304px;
}

.flex-row-1 {
  align-items: center;
  display: flex;
  min-width: 304px;
  padding: 0 12px;
}

.arrow-left {
  height: 16px;
  width: 16px;
}

.pagination-list {
  align-items: center;
  display: flex;
  height: 38px;
  margin-left: 20px;
  min-width: 216px;
}

.pagination-page {
  align-items: flex-start;
  background-color: var(--heavy-metal);
  border-radius: 8px;
  display: flex;
  height: 32px;
  min-width: 32px;
  padding: 7px 12px;
}

.number {
  color: var(--cultured-pearl);
  font-weight: 400;
  line-height: 16px;
  white-space: nowrap;
}

.number-1 {
  color: var(--cultured-pearl);
  font-weight: 400;
  line-height: 16px;
  margin-bottom: 2px;
  margin-left: 20px;
  min-width: 10px;
  white-space: nowrap;
}

.number-2 {
  color: var(--cultured-pearl);
  font-weight: 400;
  line-height: 16px;
  margin-bottom: 2px;
  margin-left: 32px;
  min-width: 11px;
  white-space: nowrap;
}

.text-4 {
  color: var(--cultured-pearl);
  font-weight: 700;
  line-height: 22.4px;
  margin-bottom: 2px;
  margin-left: 36px;
  min-width: 15px;
  white-space: nowrap;
}

.number-3 {
  color: var(--cultured-pearl);
  font-weight: 400;
  line-height: 16px;
  margin-bottom: 2px;
  margin-left: 28px;
  min-width: 20px;
  white-space: nowrap;
}

.arrow-right {
  height: 16px;
  margin-left: 12px;
  width: 16px;
}

.paginator.paginator-1 {
  left: unset;
  margin-left: 286px;
  margin-top: 37px;
  position: relative;
  top: unset;
  z-index: 12;
}
</style>
