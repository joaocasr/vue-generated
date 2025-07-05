<template>
<div>
 <img alt="container27702847" class="grid-item-27702796 container27702847" src="/im1127702847.png"/>
 <div class="grid-item-27702796 container27702848">
  <p class="grid-item-27702796 text27702849">
   Area 51
  </p>
  <p class="grid-item-27702796 text27702850">
   1h,34min
  </p>
  <p class="grid-item-27702796 text27702851">
   10 Oct 2021
  </p>
 </div>
 <div class="grid-item-27702796 rectangle27702852">
  <p class="grid-item-27702796 text27702853">
   3.0
  </p>
 </div>
 <v-rating :length="5" :model-value="starsSeletec27702854" :size="25" class="grid-item-27702796 srating27702854"  half-increments hover readonly >
 </v-rating>
</div>

</template>
    
<script>
export default {

    data(){
        return {
        starsSeletec27702854:"3"   
        }
    }
}
</script>
<style lang="css" scoped>
@import '../assets/movie7.css';
</style>