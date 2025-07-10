<template>
<div>
 <div class="grid-item-28792812 container2879732">
  <div class="grid-item-28792812 rectangle2879733">
   <p class="grid-item-28792812 text2879734">
    {{atributes.atr2879734}}
   </p>
  </div>
  <div class="grid-item-28792812 container2879735">
   <div class="grid-item-28792812 container2879736">
    <div class="grid-item-28792812 ellipse2879737">
     <div class="grid-item-28792812 container2879738">
      <img alt="container2879739" class="grid-item-28792812 container2879739" src="/Vector2879739.svg"/>
     </div>
    </div>
   </div>
   <div class="grid-item-28792812 container2879740">
    <div class="grid-item-28792812 ellipse2879741">
     <div class="grid-item-28792812 container2879742">
      <div class="grid-item-28792812 container2879743">
       <img alt="container2879744" class="grid-item-28792812 container2879744" src="/Vector2879744.svg"/>
       <img alt="container2879745" class="grid-item-28792812 container2879745" src="/Vector2879745.svg"/>
      </div>
     </div>
    </div>
   </div>
  </div>
  <div class="grid-item-28792812 container2879746">
   <img :src="atributes.atr2879747" alt="container2879747" class="grid-item-28792812 container2879747"/>
  </div>
 </div>
 <div class="grid-item-28792812 container2879748">
  <p class="grid-item-28792812 text2879749">
   {{atributes.atr2879749}}
  </p>
  <div class="grid-item-28792812 container2879750">
   <div class="grid-item-28792812 container2879751">
    <p class="grid-item-28792812 text2879752">
     {{atributes.atr2879752}}
    </p>
   </div>
   <div class="grid-item-28792812 container2879753">
    <v-rating :length="5" :model-value="starsSeletec2879754" :size="25" class="grid-item-28792812 srating2879754"  half-increments hover readonly >
    </v-rating>
    <p class="grid-item-28792812 text2879755">
     {{atributes.atr2879755}}
    </p>
   </div>
  </div>
 </div>
</div>

</template>
    
<script>
export default {

    props:{
        atributes: Object
    },
    data(){
        return {
        starsSeletec2879754:"3"   
        }
    }
}
</script>
<style lang="css" scoped>
@import '../assets/cart2data.css';
</style>