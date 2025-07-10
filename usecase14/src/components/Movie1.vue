<template>
<div>
 <img alt="container27702874" class="grid-item-27702790 container27702874" src="/image1027702874.png" v-on:click="gotoMoviePage27702874()"/>
 <div class="grid-item-27702790 container27702875">
  <a class="grid-item-27702790 text27702876" href="/MoviePage" v-on:click="gotoMoviePage27702876()">
   Avatar
  </a>
  <p class="grid-item-27702790 text27702877">
   1h,34min
  </p>
  <p class="grid-item-27702790 text27702878">
   10 Oct 2021
  </p>
 </div>
 <div class="grid-item-27702790 rectangle27702879">
  <p class="grid-item-27702790 text27702880">
   3.0
  </p>
 </div>
 <v-rating :length="5" :model-value="starsSeletec27702881" :size="25" class="grid-item-27702790 srating27702881"  half-increments hover readonly >
 </v-rating>
</div>

</template>
    
<script>
export default {

    data(){
        return {
        starsSeletec27702881:"3"   
        }
    },
    methods:{
        gotoMoviePage27702874(){
            this.$router.push({path:"/moviepage"});
        },
        gotoMoviePage27702876(){
            this.$router.push({path:"/moviepage"});
        }
	}
}
</script>
<style lang="css" scoped>
@import '../assets/movie1.css';
</style>