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
 <Mypopup @close-from222310-to22238="show22238=false" class="grid-item-22238 component22238" v-if="show22238"></Mypopup>
 <Iconi @openoverlay2250422238="changeVisibility22238" class="grid-item-22504 component22504" v-on:click="changeVisibility22238()"></Iconi>
 <v-select :items="allOptionValues22801349" :single-line="true" class="grid-item svueselect22801349" label="My Dropdown Filter" v-model="selectedOption22801349">
 </v-select>
</div>

</template>

<script>
import Mypopup from '@/components/Mypopup.vue';
import Iconi from '@/components/Iconi.vue';
export default {
    components:{
        Mypopup,
        Iconi
    },
    data(){
        return {
            show22238:false,
            selectedOption22801349:"",
            allOptions22801349:[{'label': 'Option 1', 'value': 'Label1'}, {'label': 'Option 2', 'value': 'Label2'}, {'label': 'Option 3', 'value': 'Label3'}, {'label': 'Option 4', 'value': 'Label4'}, {'label': 'Option 5', 'value': 'Label5'}],
            allOptionValues22801349:[]    
                
        }
    },
    methods:{
        gotoSecondaryPage(){
            this.$router.push({path:"/secondarypage"});
        },
		changeVisibility22238(){
            this.show22238 = true;
            
        },
        getDropdownOptions22801349(){
            /*Here you can adapt to fetch the data from an API*/
            this.allOptionValues22801349 = this.allOptions22801349.map(x => x.value);
        }
	},mounted(){
          this.getDropdownOptions22801349();
	}
}
</script>
<style lang="css" scoped>
@import '../assets/principalpage.css';
</style>