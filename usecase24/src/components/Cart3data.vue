<template>
<div>
 <div class="grid-item-28792814 container2879656">
  <div class="grid-item-28792814 container2879657">
   <div class="grid-item-28792814 container2879658">
    <div class="grid-item-28792814 ellipse2879659">
     <div class="grid-item-28792814 container2879660">
      <img alt="container2879661" class="grid-item-28792814 container2879661" src="/Vector2879661.svg"/>
     </div>
    </div>
   </div>
   <div class="grid-item-28792814 container2879662">
    <div class="grid-item-28792814 ellipse2879663">
     <div class="grid-item-28792814 container2879664">
      <div class="grid-item-28792814 container2879665">
       <img alt="container2879666" class="grid-item-28792814 container2879666" src="/Vector2879666.svg"/>
       <img alt="container2879667" class="grid-item-28792814 container2879667" src="/Vector2879667.svg"/>
      </div>
     </div>
    </div>
   </div>
  </div>
  <div class="grid-item-28792814 container2879668">
   <p class="grid-item-28792814 text2879669">
    {{atributes.atr2879669}}
   </p>
  </div>
  <div class="grid-item-28792814 container2879670">
   <img :src="atributes.atr2879671" alt="container2879671" class="grid-item-28792814 container2879671"/>
  </div>
 </div>
 <div class="grid-item-28792814 container2879672">
  <p class="grid-item-28792814 text2879673">
   {{atributes.atr2879673}}
  </p>
  <div class="grid-item-28792814 container2879674">
   <div class="grid-item-28792814 container2879675">
    <p class="grid-item-28792814 text2879676">
     {{atributes.atr2879676}}
    </p>
   </div>
   <div class="grid-item-28792814 container2879677">
    <v-rating :length="5" :model-value="starsSeletec2879678" :size="25" class="grid-item-28792814 srating2879678"  half-increments hover readonly >
    </v-rating>
    <p class="grid-item-28792814 text2879679">
     {{atributes.atr2879679}}
    </p>
   </div>
  </div>
  <div class="grid-item-28792814 container2879680">
   <div class="grid-item-28792814 container2879681">
    <div class="grid-item-28792814 ellipse2879682">
    </div>
    <div class="grid-item-28792814 ellipse2879683">
    </div>
   </div>
   <div class="grid-item-28792814 ellipse2879684">
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
        starsSeletec2879678:"3"   
        }
    }
}
</script>
<style lang="css" scoped>
@import '../assets/cart3data.css';
</style>