<template>
<div>
 <img alt="container27702928" class="grid-item-27702787 container27702928" src="/maxresdefault127702928.png"/>
 <div class="grid-item-27702787 container27702929">
 </div>
 <p class="grid-item-27702787 text27702930">
  Movie from 2017
 </p>
 <p class="grid-item-27702787 text27702931">
  Online Movie- Duration: 1h, 46min
 </p>
 <p class="grid-item-27702787 text27702932">
  7.8/10
 </p>
 <div @mouseenter="changeVisibility27702925" @mouseleave="changeVisibility27702925" class="grid-item-27702787 container27702933">
  <p class="grid-item-27702787 text27702934">
   Watch Trailer
  </p>
  <div class="grid-item-27702787 regular_polygon27702935">
  </div>
 </div>
 <div class="grid-item-27702787 container27702936">
  <p class="grid-item-27702787 text27702937">
   Watch Online Now
  </p>
  <div class="grid-item-27702787 regular_polygon27702938">
  </div>
 </div>
 <p class="grid-item-27702787 text27702939">
  Allied soldiers from Belgium, the British Commonwealth and Empire, and France  are surrounded by the German Army and evacuated during a fierce battle  in World War II.
 </p>
 <p class="grid-item-27702787 text27702940">
  Dunkirk
 </p>
 <div class="grid-item-27702787 container27702925" v-show="show27702925==true">
  <p class="grid-item-27702787 text27702926">
   HOME
  </p>
 </div>
</div>

</template>
    
<script>
export default {

    data(){
        return {
        show27702925:false   
        }
    },
    methods:{
		changeVisibility27702925(){
            this.show27702925 = !this.show27702925;
        }
	}
}
</script>
<style lang="css" scoped>
@import '../assets/homebanner.css';
</style>