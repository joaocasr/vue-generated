<template>
<div class="grid-container">
 <p class="grid-item text31862920">
  THIS IS THE SECONDARY PAGE
 </p>
 <div class="grid-item container31862921" v-on:click="goBack31862921()">
  <p class="grid-item text31862922">
   Previous
  </p>
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
    goBack31862921(){
        this.$router.back()
	}
	}
}
</script>
<style lang="css" scoped>
@import '../assets/secondpage.css';
</style>