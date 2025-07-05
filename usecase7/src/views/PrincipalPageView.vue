<template>
<div class="grid-container">
 <p class="grid-item text22233">
  THIS IS THE PRINCIPAL PAGE
 </p>
 <div class="grid-item container22234" v-on:click="gotoSecondaryPage()">
  <p class="grid-item text22235">
   Click Me
  </p>
 </div>
 <Popup @close-from222310-to22238="show22238=false" class="grid-item-22238 component22238" v-if="show22238"></Popup>
 <div class="grid-item container22236" v-on:click="changeVisibility22238()">
  <p class="grid-item text22237">
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
            show22238:false    
                
        }
    },
    methods:{
        gotoSecondaryPage(){
            this.$router.push({path:"/secondarypage"});
        },
		changeVisibility22238(){
            this.show22238 = true;
            
        }
	}
}
</script>
<style lang="css" scoped>
@import '../assets/principalpage.css';
</style>