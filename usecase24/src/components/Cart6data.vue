<template>
<div>
 <div class="grid-item-2879510 container2879598">
  <div class="grid-item-2879510 container2879599">
   <div class="grid-item-2879510 container2879600">
    <div class="grid-item-2879510 ellipse2879601">
     <div class="grid-item-2879510 container2879602">
      <img alt="container2879603" class="grid-item-2879510 container2879603" src="/Vector2879603.svg"/>
     </div>
    </div>
   </div>
   <div class="grid-item-2879510 container2879604">
    <div class="grid-item-2879510 ellipse2879605">
     <div class="grid-item-2879510 container2879606">
      <div class="grid-item-2879510 container2879607">
       <img alt="container2879608" class="grid-item-2879510 container2879608" src="/Vector2879608.svg"/>
       <img alt="container2879609" class="grid-item-2879510 container2879609" src="/Vector2879609.svg"/>
      </div>
     </div>
    </div>
   </div>
  </div>
  <div class="grid-item-2879510 container2879610">
   <p class="grid-item-2879510 text2879611">
    {{atributes.atr2879611}}
   </p>
  </div>
  <div class="grid-item-2879510 container2879612">
   <img :src="atributes.atr2879613" alt="container2879613" class="grid-item-2879510 container2879613"/>
  </div>
 </div>
 <div class="grid-item-2879510 container2879614">
  <a class="grid-item-2879510 text2879615" href="/ProductDetailsPage" v-on:click="gotoProductDetailsPage2879615()">
   {{atributes.atr2879615}}
  </a>
  <div class="grid-item-2879510 container2879616">
   <div class="grid-item-2879510 container2879617">
    <p class="grid-item-2879510 text2879618">
     {{atributes.atr2879618}}
    </p>
   </div>
   <div class="grid-item-2879510 container2879619">
    <v-rating :length="5" :model-value="starsSeletec2879620" :size="25" class="grid-item-2879510 srating2879620"  half-increments hover readonly >
    </v-rating>
    <p class="grid-item-2879510 text2879621">
     {{atributes.atr2879621}}
    </p>
   </div>
  </div>
  <div class="grid-item-2879510 container2879622">
   <div class="grid-item-2879510 container2879623">
    <div class="grid-item-2879510 ellipse2879624">
    </div>
    <div class="grid-item-2879510 ellipse2879625">
    </div>
   </div>
   <div class="grid-item-2879510 ellipse2879626">
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
        starsSeletec2879620:"3"   
        }
    },
    methods:{
        gotoProductDetailsPage2879615(){
            this.$router.push({path:"/productdetailspage"});
        }
	}
}
</script>
<style lang="css" scoped>
@import '../assets/cart6data.css';
</style>