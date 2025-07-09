<template>
<div>
 <img alt="container3367250" class="grid-item-3367166 container3367250" src="/image103367250.png" v-on:click="gotoMoviePage3367250()"/>
 <div class="grid-item-3367166 container3367251">
  <a class="grid-item-3367166 text3367252" href="/MoviePage" v-on:click="gotoMoviePage3367252()">
   Avatar
  </a>
  <p class="grid-item-3367166 text3367253">
   1h,34min
  </p>
  <p class="grid-item-3367166 text3367254">
   10 Oct 2021
  </p>
 </div>
 <div class="grid-item-3367166 rectangle3367255">
  <p class="grid-item-3367166 text3367256">
   3.0
  </p>
 </div>
 <v-rating :length="5" :model-value="starsSeletec3367257" :size="25" class="grid-item-3367166 srating3367257"  half-increments hover readonly >
 </v-rating>
</div>

</template>
    
<script>
export default {

    data(){
        return {
        starsSeletec3367257:"3"   
        }
    },
    methods:{
        gotoMoviePage3367250(){
            this.$router.push({path:"/moviepage"});
        },
        gotoMoviePage3367252(){
            this.$router.push({path:"/moviepage"});
        }
	}
}
</script>
<style lang="css" scoped>
@import '../assets/movie1.css';
</style>