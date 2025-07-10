<template>
<div>
 <p class="grid-item-22238 text22239">
  This page was created by João Castro.
 </p>
 <div class="grid-item-22238 container222310" v-on:click="close22231022238()">
  <div class="grid-item-22238 line222311">
  </div>
  <div class="grid-item-22238 line222312">
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
		close22231022238(){
            this.$emit('close-from222310-to22238');
        }
	}
}
</script>
<style lang="css" scoped>
@import '../assets/mypopup.css';
</style>