<template>
<div>
 <p class="grid-item-31862963 text31862964">
  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard  dummy text ever since the 1500s, when an unknown printer took a galley  of type and scrambled it to make a type specimen book. It has survived  not only five centuries, but also the leap into electronic typesetting,  remaining essentially unchanged. It was popularised in the 1960s with  the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker  including versions of Lorem Ipsum.
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