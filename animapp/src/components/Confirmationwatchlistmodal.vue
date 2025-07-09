<template>
  <div class="confirmationwatchlistmodal screen">
    <div class="confirmationwatchlistmodal-1">
      <h1 class="title-1 poppins-bold-white-33px">{{ title }}</h1>
      <p class="are-you-sure-you-wan-1 poppins-medium-black-haze-16px">{{ areYouSureYouWan }}</p>
      <div class="button-container-1">
        <div class="delete-button-1">
          <div class="yes-insert poppins-medium-black-12px">{{ yesInsert }}</div>
        </div>
        <div class="cancel-button-1">
          <div class="no-cancel-1 poppins-medium-black-12px-2">{{ noCancel }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Confirmationwatchlistmodal",
  props: ["title", "areYouSureYouWan", "yesInsert", "noCancel"],
};
</script>

<style>
.confirmationwatchlistmodal {
  align-items: flex-start;
  border-radius: 22px;
  display: flex;
  overflow: hidden;
  width: 555px;
}

.confirmationwatchlistmodal-1 {
  align-items: center;
  background-color: var(--oxford-blue);
  border-radius: 22px;
  display: flex;
  flex-direction: column;
  height: 222px;
  margin-left: 28px;
  margin-top: 2455px;
  overflow: hidden;
  padding: 26px 0;
  width: 555px;
}

.title-1 {
  letter-spacing: 0;
  line-height: normal;
  min-height: 50px;
  text-align: center;
  width: 555px;
}

.are-you-sure-you-wan-1 {
  letter-spacing: 0;
  line-height: normal;
  min-height: 24px;
  text-align: center;
  width: 555px;
}

.button-container-1 {
  align-items: flex-start;
  display: flex;
  gap: 106px;
  margin-left: 5px;
  margin-top: 38px;
  min-width: 282px;
}

.delete-button-1 {
  align-items: flex-start;
  background-color: #9be897;
  border-radius: 11px;
  box-shadow: 0px 4px 4px #00000040;
  cursor: pointer;
  display: flex;
  height: 44px;
  min-width: 88px;
  padding: 11px 13px;
}

.yes-insert,
.no-cancel-1 {
  letter-spacing: 0;
  line-height: normal;
  min-height: 18px;
}

.cancel-button-1 {
  align-items: flex-start;
  background-color: var(--quill-gray);
  border-radius: 11px;
  box-shadow: 0px 4px 4px #00000040;
  display: flex;
  height: 44px;
  justify-content: flex-end;
  min-width: 88px;
  padding: 12px 10.7px;
}
</style>
