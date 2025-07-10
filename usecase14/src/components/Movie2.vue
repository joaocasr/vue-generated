<template>
<div>
 <img alt="container27702883" class="grid-item-27702791 container27702883" src="/cloverfieldi7532127702883.png"/>
 <div class="grid-item-27702791 container27702884">
  <p class="grid-item-27702791 text27702885">
   Cloverfield
  </p>
  <p class="grid-item-27702791 text27702886">
   1h,34min
  </p>
  <p class="grid-item-27702791 text27702887">
   10 Oct 2021
  </p>
 </div>
 <div class="grid-item-27702791 rectangle27702888">
  <p class="grid-item-27702791 text27702889">
   4.0
  </p>
 </div>
 <v-rating :length="5" :model-value="starsSeletec27702890" :size="25" class="grid-item-27702791 srating27702890"  half-increments hover readonly >
 </v-rating>
</div>

</template>
    
<script>
export default {

    data(){
        return {
        starsSeletec27702890:"3"   
        }
    }
}
</script>
<style lang="css" scoped>
@import '../assets/movie2.css';
</style>