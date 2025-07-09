<template>
  <article class="web-buttons-1">
    <div class="icon-frame">
      <div class="ellipse-1"></div>
      <div class="ellipse-1"></div>
      <div class="ellipse-1"></div>
    </div>
  </article>
</template>

<script>
export default {
  name: "WebButtons",
};
</script>

<style>
.web-buttons-1 {
  height: 48px;
  position: relative;
  width: 48px;
}

.icon-frame {
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 3px;
  left: 14px;
  min-height: 20px;
  padding: 1px 0;
  position: relative;
  top: 14px;
  width: 20px;
}

.ellipse-1 {
  background-color: var(--primary);
  border-radius: 2px;
  height: 4px;
  width: 4px;
}
</style>
