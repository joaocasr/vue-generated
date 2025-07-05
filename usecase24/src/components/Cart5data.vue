<template>
<div>
 <div class="grid-item-2879513 container2879628">
  <div class="grid-item-2879513 container2879629">
   <div class="grid-item-2879513 container2879630">
    <div class="grid-item-2879513 ellipse2879631">
     <div class="grid-item-2879513 container2879632">
      <img alt="container2879633" class="grid-item-2879513 container2879633" src="/Vector2879633.svg"/>
     </div>
    </div>
   </div>
   <div class="grid-item-2879513 container2879634">
    <div class="grid-item-2879513 ellipse2879635">
     <div class="grid-item-2879513 container2879636">
      <div class="grid-item-2879513 container2879637">
       <img alt="container2879638" class="grid-item-2879513 container2879638" src="/Vector2879638.svg"/>
       <img alt="container2879639" class="grid-item-2879513 container2879639" src="/Vector2879639.svg"/>
      </div>
     </div>
    </div>
   </div>
  </div>
  <div class="grid-item-2879513 container2879640">
   <img :src="atributes.atr2879641" alt="container2879641" class="grid-item-2879513 container2879641"/>
  </div>
 </div>
 <div class="grid-item-2879513 container2879642">
  <p class="grid-item-2879513 text2879643">
   {{atributes.atr2879643}}
  </p>
  <div class="grid-item-2879513 container2879644">
   <div class="grid-item-2879513 container2879645">
    <p class="grid-item-2879513 text2879646">
     {{atributes.atr2879646}}
    </p>
   </div>
   <div class="grid-item-2879513 container2879647">
    <v-rating :length="5" :model-value="starsSeletec2879648" :size="25" class="grid-item-2879513 srating2879648"  half-increments hover readonly >
    </v-rating>
    <p class="grid-item-2879513 text2879649">
     {{atributes.atr2879649}}
    </p>
   </div>
  </div>
  <div class="grid-item-2879513 container2879650">
   <div class="grid-item-2879513 container2879651">
    <div class="grid-item-2879513 ellipse2879652">
    </div>
    <div class="grid-item-2879513 ellipse2879653">
    </div>
   </div>
   <div class="grid-item-2879513 ellipse2879654">
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
        starsSeletec2879648:"3"   
        }
    }
}
</script>
<style lang="css" scoped>
@import '../assets/cart5data.css';
</style>