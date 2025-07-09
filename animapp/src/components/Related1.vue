<template>
  <div class="related1">
    <related2 :boyheron="related2Props.boyheron" :theBoyAndTheHeron="related2Props.theBoyAndTheHeron" />
  </div>
</template>

<script>
import Related2 from "./Related2";
export default {
  name: "Related1",
  components: {
    Related2,
  },
  props: ["related2Props"],
};
</script>

<style>
.related1 {
  align-items: flex-end;
  display: flex;
  height: 230px;
  margin-left: -6px;
  min-width: 180px;
  padding: 7px 10px;
  position: relative;
}
</style>
