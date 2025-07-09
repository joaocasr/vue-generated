<template>
  <div class="deletionwatchlistmodal screen">
    <div class="deletionwatchlistmodal-1">
      <h1 class="title poppins-bold-white-33px">{{ title }}</h1>
      <p class="are-you-sure-you-wan poppins-medium-black-haze-16px">{{ areYouSureYouWan }}</p>
      <div class="button-container">
        <div class="delete-button">
          <div class="yes-delete poppins-medium-black-12px">{{ yesDelete }}</div>
        </div>
        <div class="cancel-button">
          <div class="no-cancel poppins-medium-black-12px-2">{{ noCancel }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Deletionwatchlistmodal",
  props: ["title", "areYouSureYouWan", "yesDelete", "noCancel"],
};
</script>

<style>
.deletionwatchlistmodal {
  align-items: flex-start;
  border-radius: 22px;
  display: flex;
  overflow: hidden;
  width: 555px;
}

.deletionwatchlistmodal-1 {
  align-items: center;
  background-color: var(--oxford-blue);
  border-radius: 22px;
  display: flex;
  flex-direction: column;
  height: 222px;
  margin-top: 2791px;
  overflow: hidden;
  padding: 26px 0;
  width: 555px;
}

.title {
  letter-spacing: 0;
  line-height: normal;
  min-height: 50px;
  text-align: center;
  width: 555px;
}

.are-you-sure-you-wan {
  letter-spacing: 0;
  line-height: normal;
  min-height: 24px;
  text-align: center;
  width: 555px;
}

.button-container {
  align-items: flex-start;
  display: flex;
  gap: 108px;
  margin-left: 21px;
  margin-top: 38px;
  min-width: 284px;
}

.delete-button {
  align-items: flex-start;
  background-color: #d26565;
  border-radius: 11px;
  box-shadow: 0px 4px 4px #00000040;
  display: flex;
  height: 44px;
  justify-content: flex-end;
  min-width: 88px;
  padding: 11px 9px;
}

.yes-delete,
.no-cancel {
  letter-spacing: 0;
  line-height: normal;
  min-height: 18px;
}

.cancel-button {
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
