<template>
<div>
 <p class="grid-item-31862963 text31862964">
  This page was created by João Castro.
 </p>
 <div class="grid-item-31862963 container31862965" v-on:click="close3186296531862963()">
  <div class="grid-item-31862963 line31862966">
  </div>
  <div class="grid-item-31862963 line31862967">
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
		close3186296531862963(){
            this.$emit('close-from31862965-to31862963');
        }
	}
}
</script>
<style lang="css" scoped>
@import '../assets/popup.css';
</style>