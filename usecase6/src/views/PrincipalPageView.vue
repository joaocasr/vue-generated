<template>
<div class="grid-container">
 <p class="grid-item text20533">
  THIS IS THE PRINCIPAL PAGE
 </p>
 <div class="grid-item container20534" v-on:click="gotoSecondaryPage()">
  <p class="grid-item text20535">
   Click Me
  </p>
 </div>
 <Popup @close-from205310-to20538="show20538=false" class="grid-item-20538 component20538" v-if="show20538"></Popup>
 <div class="grid-item container20536" v-on:click="changeVisibility20538()">
  <p class="grid-item text20537">
   i
  </p>
 </div>
</div>

</template>

<script>
import Popup from '@/components/Popup.vue';
export default {
    components:{
        Popup
    },
    data(){
        return {
            show20538:false    
                
        }
    },
    methods:{
        gotoSecondaryPage(){
            this.$router.push({path:"/secondarypage"});
        },
		changeVisibility20538(){
            this.show20538 = true;
            
        }
	}
}
</script>
<style lang="css" scoped>
@import '../assets/principalpage.css';
</style>