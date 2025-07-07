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
 <Iconi @openoverlay2250422238="changeVisibility22238" class="grid-item-22504 component22504" v-on:click="changeVisibility22238()"></Iconi>
 <IconField class="ssearchinputfilter23041263">
  <InputIcon class="pi pi-search">
  </InputIcon>
  <InputText placeholder="Search . . ." v-model="inputsearch23041263">
  </InputText>
 </IconField>
 <DatePicker :showonfocus="false" class="sdatepicker23201811"  showIcon fluid  v-model="datepicker23201811">
 </DatePicker>
</div>

</template>

<script>
import Popup from '@/components/Popup.vue';
import Iconi from '@/components/Iconi.vue';
export default {
    components:{
        Popup,
        Iconi
    },
    data(){
        return {
            show22238:false,
            inputsearch23041263:"",
            datepicker23201811:""    
                
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