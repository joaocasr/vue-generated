<template>
<div>
 <img alt="container3367290" class="grid-item-3367416 container3367290" src="/3367290.png"/>
 <a class="grid-item-3367416 text3367291" href="/HomePage" v-on:click="gotoHomePage3367291()">
  MOVIESTV
 </a>
 <div class="grid-item-3367416 container3367292">
  <div class="grid-item-3367416 container3367293">
   <div class="grid-item-3367416 container3367294" v-on:click="gotoWatchlistPage3367294()">
    <img alt="container3367295" class="grid-item-3367416 container3367295" src="/listVector3367295.svg"/>
   </div>
   <div class="grid-item-3367416 container3367296">
    <img alt="container3367297" class="grid-item-3367416 container3367297" src="/heartVector3367297.svg"/>
   </div>
   <div class="grid-item-3367416 smenu3367298">
    <v-menu>
     <template v-slot:activator="{ props }">
      <div v-bind="props">
       <img src="/iconMenu3367540.png"/>
      </div>
     </template>
     <v-list>
      <v-list-item :key="index" :value="index" v-for="(item, index) in menuoptions3367298">
       <v-list-item-title @click="selectedItem3367298(item)">
        {{ item.option }}
       </v-list-item-title>
      </v-list-item>
     </v-list>
    </v-menu>
   </div>
  </div>
  <Varianthome :componentprops="selectedClass33671262" :variant="currentVariant33671262" @mouseleave="changeToDefault33671262" @mouseover="changeToHovered33671262" v-on:click="gotoHomePage3367145()"></Varianthome>
  <Variantmovies :componentprops="selectedClass33671333" :variant="currentVariant33671333" @mouseleave="changeToDefault33671333" @mouseover="changeToHovered33671333"></Variantmovies>
  <Variantseries :componentprops="selectedClass33671416" :variant="currentVariant33671416" @mouseleave="changeToDefault33671416" @mouseover="changeToHovered33671416"></Variantseries>
 </div>
</div>

</template>
    
<script>
import Variantseries from '@/components/Variantseries.vue';
import Variantmovies from '@/components/Variantmovies.vue';
import Varianthome from '@/components/Varianthome.vue';
export default {
    components:{
        Variantseries,
        Variantmovies,
        Varianthome
    },
    data(){
        return {
        menuoptions3367298:[{'option': 'Login', 'destination': '3367:409'}, {'option': 'Sign Up'}],
            componentclass33671262:"grid-item-33671262 component33671262",
            componentclass3367145:"grid-item-3367145 component3367145",
            componentclass3367149:"grid-item-3367149 component3367149",
            componentclass3367152:"grid-item-3367152 component3367152",
            componentclass3367156:"grid-item-3367156 component3367156",
            componentclass3367159:"grid-item-3367159 component3367159",
            selectedClass33671262:'',
            currentVariant33671262:'',
            componentclass33671333:"grid-item-33671333 component33671333",
            selectedClass33671333:'',
            currentVariant33671333:'',
            componentclass33671416:"grid-item-33671416 component33671416",
            selectedClass33671416:'',
            currentVariant33671416:''   
        }
    },
    methods:{
        gotoHomePage3367291(){
            this.$router.push({path:"/homepage"});
        },
        gotoWatchlistPage3367294(){
            this.$router.push({path:"/watchlistpage"});
        },
        selectedItem3367298(){
               this.$router.push({path:"/loginpage"});

            },
		changeToHovered33671262(){
                this.selectedClass33671262=this.componentclass3367145;
                this.currentVariant33671262= 'homehomehoveryes'
    		},
		changeToDefault33671262(){
            this.selectedClass33671262=this.componentclass33671262;
            this.currentVariant33671262= 'homehomehoverno'
		},
		gotoHomePage3367145(){
            if(this.selectedClass33671262==this.componentclass3367145){
                this.$router.push({path:"/homepage"});
            }
    	},
		changeToHovered33671333(){
                this.selectedClass33671333=this.componentclass3367152;
                this.currentVariant33671333= 'moviesmovieshoveryes'
    		},
		changeToDefault33671333(){
            this.selectedClass33671333=this.componentclass33671333;
            this.currentVariant33671333= 'moviesmovieshoverno'
		},
		changeToHovered33671416(){
                this.selectedClass33671416=this.componentclass3367159;
                this.currentVariant33671416= 'seriesserieshoveryes'
    		},
		changeToDefault33671416(){
            this.selectedClass33671416=this.componentclass33671416;
            this.currentVariant33671416= 'seriesserieshoverno'
		}
	},mounted(){
          this.selectedClass33671262 = this.componentclass33671262;
          this.currentVariant33671262 = 'homehomehoverno';

          this.selectedClass33671333 = this.componentclass33671333;
          this.currentVariant33671333 = 'moviesmovieshoverno';

          this.selectedClass33671416 = this.componentclass33671416;
          this.currentVariant33671416 = 'seriesserieshoverno';
	}
}
</script>
<style lang="css" scoped>
@import '../assets/navbar.css';
</style>