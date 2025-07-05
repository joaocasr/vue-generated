<template>
<div>
 <div class="grid-item-2879507 container2879709">
  <div class="grid-item-2879507 container2879710">
   <div class="grid-item-2879507 container2879711">
    <div class="grid-item-2879507 ellipse2879712">
     <div class="grid-item-2879507 container2879713">
      <img alt="container2879714" class="grid-item-2879507 container2879714" src="/Vector2879714.svg"/>
     </div>
    </div>
   </div>
   <div class="grid-item-2879507 container2879715">
    <div class="grid-item-2879507 ellipse2879716">
     <div class="grid-item-2879507 container2879717">
      <div class="grid-item-2879507 container2879718">
       <img alt="container2879719" class="grid-item-2879507 container2879719" src="/Vector2879719.svg"/>
       <img alt="container2879720" class="grid-item-2879507 container2879720" src="/Vector2879720.svg"/>
      </div>
     </div>
    </div>
   </div>
  </div>
  <div class="grid-item-2879507 container2879721">
   <img :src="atributes.atr2879722" alt="container2879722" class="grid-item-2879507 container2879722"/>
  </div>
 </div>
 <div class="grid-item-2879507 container2879723">
  <p class="grid-item-2879507 text2879724">
   {{atributes.atr2879724}}
  </p>
  <div class="grid-item-2879507 container2879725">
   <div class="grid-item-2879507 container2879726">
    <p class="grid-item-2879507 text2879727">
     {{atributes.atr2879727}}
    </p>
   </div>
   <div class="grid-item-2879507 container2879728">
    <v-rating :length="5" :model-value="starsSeletec2879729" :size="25" class="grid-item-2879507 srating2879729"  half-increments hover readonly >
    </v-rating>
    <p class="grid-item-2879507 text2879730">
     {{atributes.atr2879730}}
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
        starsSeletec2879729:"3"   
        }
    }
}
</script>
<style lang="css" scoped>
@import '../assets/cart4data.css';
</style>