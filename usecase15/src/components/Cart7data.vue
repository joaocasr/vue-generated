<template>
<div>
 <div class="grid-item-2879511 container2879570">
  <div class="grid-item-2879511 container2879571">
   <div class="grid-item-2879511 container2879572">
    <div class="grid-item-2879511 ellipse2879573">
     <div class="grid-item-2879511 container2879574">
      <img alt="container2879575" class="grid-item-2879511 container2879575" src="/Vector2879575.svg"/>
     </div>
    </div>
   </div>
   <div class="grid-item-2879511 container2879576">
    <div class="grid-item-2879511 ellipse2879577">
     <div class="grid-item-2879511 container2879578">
      <div class="grid-item-2879511 container2879579">
       <img alt="container2879580" class="grid-item-2879511 container2879580" src="/Vector2879580.svg"/>
       <img alt="container2879581" class="grid-item-2879511 container2879581" src="/Vector2879581.svg"/>
      </div>
     </div>
    </div>
   </div>
  </div>
  <div class="grid-item-2879511 container2879582">
   <img :src="atributes.atr2879583" alt="container2879583" class="grid-item-2879511 container2879583"/>
  </div>
 </div>
 <div class="grid-item-2879511 container2879584">
  <p class="grid-item-2879511 text2879585">
   {{atributes.atr2879585}}
  </p>
  <div class="grid-item-2879511 container2879586">
   <div class="grid-item-2879511 container2879587">
    <p class="grid-item-2879511 text2879588">
     {{atributes.atr2879588}}
    </p>
   </div>
   <div class="grid-item-2879511 container2879589">
    <v-rating :length="5" :model-value="starsSeletec2879590" :size="25" class="grid-item-2879511 srating2879590"  half-increments hover readonly >
    </v-rating>
    <p class="grid-item-2879511 text2879591">
     {{atributes.atr2879591}}
    </p>
   </div>
  </div>
  <div class="grid-item-2879511 container2879592">
   <div class="grid-item-2879511 container2879593">
    <div class="grid-item-2879511 ellipse2879594">
    </div>
    <div class="grid-item-2879511 ellipse2879595">
    </div>
   </div>
   <div class="grid-item-2879511 ellipse2879596">
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
        starsSeletec2879590:"3"   
        }
    }
}
</script>
<style lang="css" scoped>
@import '../assets/cart7data.css';
</style>