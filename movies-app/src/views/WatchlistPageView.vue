<template>
<div class="grid-container">
 <div class="grid-item container3367357">
  <div class="grid-item rectangle3367358">
   <p class="grid-item text3367359">
    AVERAGE SCORE
   </p>
   <p class="grid-item text3367360">
    4.5
   </p>
  </div>
 </div>
 <Deletionwatchlistmodal @close-from3367389-to3367388="show3367388=false" class="grid-item-3367388 component3367388" v-if="show3367388"></Deletionwatchlistmodal>
 <div class="grid-item container3367361" v-on:click="changeVisibility3367388()">
  <p class="grid-item text3367362">
   Clear Watchlist
  </p>
  <div class="grid-item container3367363">
   <img alt="container3367364" class="grid-item container3367364" src="/trashVector3367364.svg"/>
  </div>
 </div>
 <div class="grid-item container3367365">
  <div class="grid-item rectangle3367366">
   <p class="grid-item text3367367">
    ITEMS ON LIST
   </p>
   <p class="grid-item text3367368">
    1
   </p>
  </div>
 </div>
 <p class="grid-item text3367369">
  WATCHLIST
 </p>
 <div class="grid-item container3367370">
  <div class="grid-item rectangle3367371">
   <img alt="container3367372" class="grid-item container3367372" src="/poster313367372.png"/>
   <p class="grid-item text3367373">
    Fantastic Beasts: The Secrets of Dumbledore
    <br/>
    (2022)
   </p>
   <v-rating :length="5" :model-value="starsSeletec3367374" :size="25" class="srating3367374"  half-increments hover readonly >
   </v-rating>
  </div>
 </div>
 <Footer class="grid-item-3367375 component3367375"></Footer>
 <Navbar class="grid-item-3367376 component3367376 posnavbar"></Navbar>
</div>

</template>

<script>
import Varianthome from '@/components/Varianthome.vue';
import Navbar from '@/components/Navbar.vue';
import Deletionwatchlistmodal from '@/components/Deletionwatchlistmodal.vue';
import Variantmovies from '@/components/Variantmovies.vue';
import Footer from '@/components/Footer.vue';
import Variantseries from '@/components/Variantseries.vue';
export default {
    components:{
        Varianthome,
        Navbar,
        Deletionwatchlistmodal,
        Variantmovies,
        Footer,
        Variantseries
    },
    data(){
        return {
            show3367388:false,
            starsSeletec3367374:"3",
            menuoptions3367298:[{'option': 'Login', 'destination': '3367:409'}, {'option': 'Sign Up'}],
            componentclass33671262:"grid-item-33671262 component33671262",
            componentclass3367145:"grid-item-3367145 component3367145",
            componentclass33671333:"grid-item-33671333 component33671333",
            componentclass3367152:"grid-item-3367152 component3367152",
            componentclass33671416:"grid-item-33671416 component33671416",
            componentclass3367159:"grid-item-3367159 component3367159",
            selectedClass33671262:'',
            currentVariant33671262:'',
            selectedClass33671333:'',
            currentVariant33671333:'',
            selectedClass33671416:'',
            currentVariant33671416:''    
                
        }
    },
    methods:{
		changeVisibility3367388(){
            this.show3367388 = true;
            
        },
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
@import '../assets/watchlistpage.css';
</style>