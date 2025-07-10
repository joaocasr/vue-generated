<template>
<div>
 <p class="grid-item-29531688 text29531689">
  This page was created by João Castro.
 </p>
 <div class="grid-item-29531688 container29531690" v-on:click="close2953169029531688()">
  <div class="grid-item-29531688 line29531691">
  </div>
  <div class="grid-item-29531688 line29531692">
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
		close2953169029531688(){
            this.$emit('close-from29531690-to29531688');
        }
	}
}
</script>
<style lang="css" scoped>
@import '../assets/popup.css';
</style>