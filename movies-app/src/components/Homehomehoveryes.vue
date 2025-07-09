<template>
<div>
 <div class="grid-item-3367145 container3367146" v-on:click="gotoHomePage3367146()">
  <p class="grid-item-3367145 text3367147">
   HOME
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
        gotoHomePage3367146(){
            this.$router.push({path:"/homepage"});
        }
	}
}
</script>
<style lang="css" scoped>
@import '../assets/homehomehoveryes.css';
</style>