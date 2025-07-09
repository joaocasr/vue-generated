<template>
<div class="grid-container">
 <Footer class="grid-item-3367396 component3367396"></Footer>
 <img alt="container3367397" class="grid-item container3367397" src="/image123367397.png"/>
 <div class="grid-item container3367398">
  <p class="grid-item text3367399">
   PUBLISH
  </p>
 </div>
 <p class="grid-item text3367400">
  AVATAR (2022)
 </p>
 <div class="grid-item container3367401">
  <div class="grid-item rectangle3367402">
   <p class="grid-item text3367403">
    Write down your review...
   </p>
  </div>
 </div>
 <div class="grid-item container3367404">
  <div class="grid-item container3367405">
   <p class="grid-item text3367406">
    Rate
   </p>
   <v-rating :length="5" :model-value="starsSeletec3367407" :size="25" class="srating3367407" half-increments="" hover="">
   </v-rating>
  </div>
 </div>
 <Navbar class="grid-item-3367408 component3367408 posnavbar"></Navbar>
</div>

</template>

<script>
import Navbar from '@/components/Navbar.vue';
import Varianthome from '@/components/Varianthome.vue';
import Variantmovies from '@/components/Variantmovies.vue';
import Footer from '@/components/Footer.vue';
import Variantseries from '@/components/Variantseries.vue';
export default {
    components:{
        Navbar,
        Varianthome,
        Variantmovies,
        Footer,
        Variantseries
    },
    data(){
        return {
            starsSeletec3367407:"0",
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
        gotoHomePage(){
            this.$router.push({path:"/homepage"});
        },
        gotoWatchlistPage(){
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
		gotoHomePage(){
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
@import '../assets/reviewpage.css';
</style>