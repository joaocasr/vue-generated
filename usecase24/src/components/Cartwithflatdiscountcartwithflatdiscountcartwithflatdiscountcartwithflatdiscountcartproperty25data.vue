<template>
<div>
 <div class="grid-item-2879512 container2879686">
  <div class="grid-item-2879512 container2879687">
   <div class="grid-item-2879512 container2879688">
    <div class="grid-item-2879512 ellipse2879689">
     <div class="grid-item-2879512 container2879690">
      <img alt="container2879691" class="grid-item-2879512 container2879691" src="/Vector2879691.svg"/>
     </div>
    </div>
   </div>
   <div class="grid-item-2879512 container2879692">
    <div class="grid-item-2879512 ellipse2879693">
     <div class="grid-item-2879512 container2879694">
      <div class="grid-item-2879512 container2879695">
       <img alt="container2879696" class="grid-item-2879512 container2879696" src="/Vector2879696.svg"/>
       <img alt="container2879697" class="grid-item-2879512 container2879697" src="/Vector2879697.svg"/>
      </div>
     </div>
    </div>
   </div>
  </div>
  <div class="grid-item-2879512 container2879698">
  </div>
  <img :src="atributes.atr2879699" alt="container2879699" class="grid-item-2879512 container2879699"/>
 </div>
 <div class="grid-item-2879512 container2879700">
  <p class="grid-item-2879512 text2879701">
   {{atributes.atr2879701}}
  </p>
  <div class="grid-item-2879512 container2879702">
   <div class="grid-item-2879512 container2879703">
    <p class="grid-item-2879512 text2879704">
     {{atributes.atr2879704}}
    </p>
   </div>
   <div class="grid-item-2879512 container2879705">
    <v-rating :length="5" :model-value="starsSeletec2879706" :size="25" class="grid-item-2879512 srating2879706"  half-increments hover readonly >
    </v-rating>
    <p class="grid-item-2879512 text2879707">
     {{atributes.atr2879707}}
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
        starsSeletec2879706:"3"   
        }
    }
}
</script>
<style lang="css" scoped>
@import '../assets/cartwithflatdiscountcartwithflatdiscountcartwithflatdiscountcartwithflatdiscountcartproperty25data.css';
</style>