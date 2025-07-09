<template>
  <div class="video" id="video">
    <div class="overlap-group1-2" :style="{ 'background-image': 'url(' + overlapGroup1 + ')' }">
      <div class="web-player-controllers">
        <div class="info">
          <div class="titles-episodes">
            <div class="title-here">{{ titleHere }}</div>
          </div>
          <div class="time">{{ time }}</div>
        </div>
        <div class="progress-bar">
          <div class="overlap-group-8">
            <div class="fulltime"></div>
            <div class="progress"></div>
          </div>
        </div>
        <div class="controllers">
          <div class="t-si">
            <article
              class="web-buttons"
              src="https://cdn.animaapp.com/projects/686ea1d35e13e10175fc90b1/releases/686ea3d0637921489cf67a29/img/web---buttons.svg"
              alt="Web / Buttons"
            />
            <article
              class="web-buttons"
              src="https://cdn.animaapp.com/projects/686ea1d35e13e10175fc90b1/releases/686ea3d0637921489cf67a29/img/web---buttons-1.svg"
              alt="Web / Buttons"
            />
            <article
              class="web-buttons"
              src="https://cdn.animaapp.com/projects/686ea1d35e13e10175fc90b1/releases/686ea3d0637921489cf67a29/img/web---buttons-2.svg"
              alt="Web / Buttons"
            />
          </div>
          <div class="t-si">
            <article
              class="web-buttons"
              src="https://cdn.animaapp.com/projects/686ea1d35e13e10175fc90b1/releases/686ea3d0637921489cf67a29/img/web---buttons-3.svg"
              alt="Web / Buttons"
            />
            <article
              class="web-buttons"
              src="https://cdn.animaapp.com/projects/686ea1d35e13e10175fc90b1/releases/686ea3d0637921489cf67a29/img/web---buttons-4.svg"
              alt="Web / Buttons"
            />
            <article
              class="web-buttons"
              src="https://cdn.animaapp.com/projects/686ea1d35e13e10175fc90b1/releases/686ea3d0637921489cf67a29/img/web---buttons-5.svg"
              alt="Web / Buttons"
            />
            <web-buttons />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import WebButtons from "./WebButtons";
export default {
  name: "XVideo",
  components: {
    WebButtons,
  },
  props: ["overlapGroup1", "titleHere", "time"],
};
</script>

<style>
.video {
  align-items: flex-start;
  align-self: center;
  background-color: var(--primary);
  border-radius: 40px;
  display: flex;
  height: 500px;
  margin-right: 272px;
  margin-top: 31px;
  overflow: hidden;
  width: 934px;
  z-index: 13;
}

.overlap-group1-2 {
  align-items: flex-end;
  background-position: 50% 50%;
  background-size: cover;
  display: flex;
  height: 709px;
  margin-left: -3px;
  margin-top: -120px;
  min-width: 963px;
  padding: 89px 3px;
}

.web-player-controllers {
  -webkit-backdrop-filter: blur(1px) brightness(100%);
  align-items: center;
  backdrop-filter: blur(1px) brightness(100%);
  background: linear-gradient(180deg, rgba(8, 9, 13, 0) 0%, rgba(8, 9, 13, 0.9) 100%);
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px 40px;
  position: relative;
  width: 934px;
}

.info {
  align-items: flex-end;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  justify-content: space-between;
  position: relative;
  width: 100%;
}

.titles-episodes {
  align-items: flex-start;
  display: inline-flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 8px;
  position: relative;
}

.title-here {
  color: var(--primary);
  font-family: var(--font-family-helvetica_neue-regular);
  font-size: var(--font-size-24px);
  font-weight: 400;
  letter-spacing: 0;
  line-height: 24px;
  margin-top: -1px;
  position: relative;
  white-space: nowrap;
  width: fit-content;
}

.time {
  color: var(--primary);
  font-family: var(--font-family-helvetica_neue-light);
  font-size: var(--font-size-m);
  font-weight: 300;
  letter-spacing: 0;
  line-height: 16px;
  position: relative;
  white-space: nowrap;
  width: fit-content;
}

.progress-bar {
  align-self: stretch;
  height: 2px;
  position: relative;
  width: 100%;
}

.overlap-group-8 {
  border-radius: 20px;
  height: 2px;
  position: relative;
  width: 850px;
}

.fulltime {
  background-color: #d9d9d9;
  border-radius: 20px;
  height: 2px;
  left: 0;
  opacity: 0.4;
  position: absolute;
  top: 0;
  width: 850px;
}

.progress {
  background-color: var(--primary);
  border-radius: 20px;
  height: 2px;
  left: 0;
  position: absolute;
  top: 0;
  width: 593px;
}

.controllers {
  align-items: center;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  justify-content: space-between;
  position: relative;
  width: 100%;
}

.t-si {
  align-items: flex-start;
  display: inline-flex;
  flex: 0 0 auto;
  gap: 8px;
  position: relative;
}

.web-buttons {
  height: 48px;
  position: relative;
  width: 48px;
}
</style>
