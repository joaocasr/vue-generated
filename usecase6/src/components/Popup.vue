<template>
<div>
 <p class="grid-item-20538 text20539">
  This page was created by João Castro.
 </p>
 <div class="grid-item-20538 container205310" v-on:click="close20531020538()">
  <div class="grid-item-20538 line205311">
  </div>
  <div class="grid-item-20538 line205312">
  </div>
 </div>
</div>

</template>
    
<script>
export default {

    data(){
        return {
           
        }
    },
    methods:{
		close20531020538(){
            this.$emit('close-from205310-to20538');
        }
	}
}
</script>
<style lang="css" scoped>
@import '../assets/popup.css';
</style>