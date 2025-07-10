<template>
<div>
 <div class="grid-item-2879505 container2879757">
  <div class="grid-item-2879505 container2879758">
   <div class="grid-item-2879505 container2879759">
    <div class="grid-item-2879505 ellipse2879760">
     <div class="grid-item-2879505 container2879761">
      <img alt="container2879762" class="grid-item-2879505 container2879762" src="/Vector2879762.svg"/>
     </div>
    </div>
   </div>
   <div class="grid-item-2879505 container2879763">
    <div class="grid-item-2879505 ellipse2879764">
     <div class="grid-item-2879505 container2879765">
      <div class="grid-item-2879505 container2879766">
       <img alt="container2879767" class="grid-item-2879505 container2879767" src="/Vector2879767.svg"/>
       <img alt="container2879768" class="grid-item-2879505 container2879768" src="/Vector2879768.svg"/>
      </div>
     </div>
    </div>
   </div>
  </div>
  <div class="grid-item-2879505 container2879769">
   <img :src="atributes.atr2879770" alt="container2879770" class="grid-item-2879505 container2879770"/>
  </div>
 </div>
 <div class="grid-item-2879505 container2879771">
  <p class="grid-item-2879505 text2879772">
   {{atributes.atr2879772}}
  </p>
  <div class="grid-item-2879505 container2879773">
   <div class="grid-item-2879505 container2879774">
    <p class="grid-item-2879505 text2879775">
     {{atributes.atr2879775}}
    </p>
   </div>
   <div class="grid-item-2879505 container2879776">
    <v-rating :length="5" :model-value="starsSeletec2879777" :size="25" class="grid-item-2879505 srating2879777"  half-increments hover readonly >
    </v-rating>
    <p class="grid-item-2879505 text2879778">
     {{atributes.atr2879778}}
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
        starsSeletec2879777:"3"   
        }
    }
}
</script>
<style lang="css" scoped>
@import '../assets/cart1data.css';
</style>