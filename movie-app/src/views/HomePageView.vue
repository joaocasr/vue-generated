<template>
<div class="grid-container">
 <Homebanner class="grid-item-3367163 component3367163"></Homebanner>
 <Footer class="grid-item-3367164 component3367164"></Footer>
 <div class="grid-item container3367165">
  <Movie1 class="grid-item-3367166 component3367166"></Movie1>
  <Movie2 class="grid-item-3367167 component3367167"></Movie2>
  <Movie3 class="grid-item-3367168 component3367168"></Movie3>
  <Movie4 class="grid-item-3367169 component3367169"></Movie4>
  <Movie5 class="grid-item-3367170 component3367170"></Movie5>
  <Movie6 class="grid-item-3367171 component3367171"></Movie6>
  <Movie7 class="grid-item-3367172 component3367172"></Movie7>
  <Movie8 class="grid-item-3367173 component3367173"></Movie8>
 </div>
 <IconField class="ssearchinputfilter3367174">
  <InputIcon class="pi pi-search">
  </InputIcon>
  <InputText placeholder="Search . . ." v-model="inputsearch3367174">
  </InputText>
 </IconField>
 <div class="grid-item container3367175">
  <p class="grid-item text3367176">
   Upcoming Movies
  </p>
  <div class="grid-item container3367177">
   <img alt="container3367178" class="grid-item container3367178" src="/joker3367178.png"/>
   <div class="grid-item container3367179">
    <p class="grid-item text3367180">
     Joker: Folie à Deux
    </p>
   </div>
   <div class="grid-item container3367181">
    <p class="grid-item text3367182">
     Oct 02, 2024
    </p>
   </div>
  </div>
  <div class="grid-item container3367183">
   <img alt="container3367184" class="grid-item container3367184" src="/wolverine3367184.png"/>
   <div class="grid-item container3367185">
    <p class="grid-item text3367186">
     Deadpool &amp; Wolverine
    </p>
   </div>
   <div class="grid-item container3367187">
    <p class="grid-item text3367188">
     Jul 24, 2024
    </p>
   </div>
  </div>
 </div>
 <div class="grid-item container3367189">
  <img alt="container3367190" class="grid-item container3367190" src="/tapevector3367190.svg"/>
  <p class="grid-item text3367191">
   BROWSE ALL MOVIES
  </p>
  <img alt="container3367192" class="grid-item container3367192" src="/govector3367192.svg"/>
 </div>
 <v-pagination :length="68" :total-visible="3" class="spaginator3367193" v-model="currentPage3367193">
 </v-pagination>
 <Navbar class="grid-item-3367194 component3367194 posnavbar"></Navbar>
</div>

</template>

<script>
import Homebanner from '@/components/Homebanner.vue';
import Navbar from '@/components/Navbar.vue';
import Movie1 from '@/components/Movie1.vue';
import Varianthome from '@/components/Varianthome.vue';
import Variantseries from '@/components/Variantseries.vue';
import Movie2 from '@/components/Movie2.vue';
import Movie7 from '@/components/Movie7.vue';
import Movie4 from '@/components/Movie4.vue';
import Movie3 from '@/components/Movie3.vue';
import Movie5 from '@/components/Movie5.vue';
import Movie6 from '@/components/Movie6.vue';
import Variantmovies from '@/components/Variantmovies.vue';
import Footer from '@/components/Footer.vue';
import Movie8 from '@/components/Movie8.vue';
export default {
    components:{
        Homebanner,
        Navbar,
        Movie1,
        Varianthome,
        Variantseries,
        Movie2,
        Movie7,
        Movie4,
        Movie3,
        Movie5,
        Movie6,
        Variantmovies,
        Footer,
        Movie8
    },
    data(){
        return {
            starsSeletec3367257:"3",
            starsSeletec3367266:"3",
            starsSeletec3367212:"3",
            starsSeletec3367221:"3",
            starsSeletec3367203:"3",
            starsSeletec3367248:"3",
            starsSeletec3367230:"3",
            starsSeletec3367239:"3",
            inputsearch3367174:"",
            currentPage3367193:1,
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
        gotoMoviePage3367250(){
            this.$router.push({path:"/moviepage"});
        },
        gotoMoviePage3367252(){
            this.$router.push({path:"/moviepage"});
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
@import '../assets/homepage.css';
</style>