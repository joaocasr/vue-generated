<template>
<div>
 <div class="grid-item-27702769 container27702770" v-on:click="goto()">
  <p class="grid-item-27702769 text27702771">
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
        goto(){
            this.$router.push({path:"/"});
        }
	}
}
</script>
<style lang="css" scoped>
@import '../assets/homehomehoveryes.css';
</style>