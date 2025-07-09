<template>
<div class="grid-container">
 <img alt="container3367318" class="grid-item container3367318" src="/image113367318.png"/>
 <p class="grid-item text3367319">
  Avatar (2022)
 </p>
 <p class="grid-item text3367320">
  Jake Sully lives with his newfound family formed on the extrasolar moon  Pandora. Once a familiar threat returns to finish what was previously  started, Jake must work with Neytiri and the army of the Na'vi race to  protect their home.
 </p>
 <div class="grid-item rectangle3367321">
  <p class="grid-item text3367322">
   3.0
  </p>
  <p class="grid-item text3367323">
   Score
  </p>
 </div>
 <Confirmationwatchlistmodal @close-from3367378-to3367377="show3367377=false" @swapfrom3367380to3367384="swap33673773367384" class="grid-item-3367377 component3367377" v-if="show3367377 && showswaped3367377"></Confirmationwatchlistmodal>
 <div class="grid-item container3367324" v-on:click="changeVisibility3367377()">
  <p class="grid-item text3367325">
   Add to Watchlist
  </p>
 </div>
 <div class="grid-item container3367326" v-on:click="scrollTo3367326()">
  <p class="grid-item text3367327">
   Watch Trailer
  </p>
  <div class="grid-item regular_polygon3367328">
  </div>
 </div>
 <div class="grid-item container3367329">
  <p class="grid-item text3367330">
   Watch Online Now
  </p>
  <div class="grid-item regular_polygon3367331">
  </div>
 </div>
 <p class="grid-item text3367332">
  1h,34min
 </p>
 <p class="grid-item text3367333">
  10 Oct 2022
 </p>
 <div class="grid-item container3367334" v-on:click="gotoReviewPage()">
  <p class="grid-item text3367335">
   Insert My Review
  </p>
 </div>
 <p class="grid-item text3367336">
  REVIEWS
 </p>
 <p class="grid-item text3367337">
  Related Movies
 </p>
 <div class="grid-item line3367338">
 </div>
 <div class="grid-item line3367339">
 </div>
 <Footer class="grid-item-3367340 component3367340"></Footer>
 <div class="grid-item container3367341">
  <Related1 class="grid-item-3376721 component3376721"></Related1>
  <Related2 class="grid-item-3376725 component3376725"></Related2>
  <Related3 class="grid-item-3376728 component3376728"></Related3>
 </div>
 <Review class="grid-item-3367345 component3367345"></Review>
 <Review class="grid-item-3367346 component3367346"></Review>
 <v-rating :length="5" :model-value="starsSeletec3367347" :size="25" class="srating3367347"  half-increments hover readonly >
 </v-rating>
 <v-pagination :length="68" :total-visible="3" class="spaginator3367348" v-model="currentPage3367348">
 </v-pagination>
 <div class="svideo3367349" ref="ref3367349">
  <iframe controls="1" height="500.0px" src="https://www.youtube.com/embed/9ZIgQFKaK4Y" title="svideo3367349" width="934.0px">
  </iframe>
 </div>
 <Navbar class="grid-item-3367350 component3367350 posnavbar"></Navbar>
 <Insertstatusmodal @close-from3367385-to3367384="show3367384=false" class="grid-item-3367384 component3367384" v-if="show3367384 && showswaped3367384"></Insertstatusmodal>
</div>

</template>

<script>
import Related3 from '@/components/Related3.vue';
import Confirmationwatchlistmodal from '@/components/Confirmationwatchlistmodal.vue';
import Insertstatusmodal from '@/components/Insertstatusmodal.vue';
import Navbar from '@/components/Navbar.vue';
import Varianthome from '@/components/Varianthome.vue';
import Related1 from '@/components/Related1.vue';
import Variantmovies from '@/components/Variantmovies.vue';
import Footer from '@/components/Footer.vue';
import Related2 from '@/components/Related2.vue';
import Review from '@/components/Review.vue';
import Variantseries from '@/components/Variantseries.vue';
export default {
    components:{
        Related3,
        Confirmationwatchlistmodal,
        Insertstatusmodal,
        Navbar,
        Varianthome,
        Related1,
        Variantmovies,
        Footer,
        Related2,
        Review,
        Variantseries
    },
    data(){
        return {
            show3367377:false,
            starsSeletec3391767:"0",
            starsSeletec3367347:"3",
            currentPage3367348:1,
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
            currentVariant33671416:'',
            show3367384:false,
            showswaped3367377:true,
            showswaped3367384:false    
                
        }
    },
    methods:{
        swap33673773367384(){
            this.showswaped3367377=false
            this.showswaped3367384=true
            this.show3367384= true

        },
		swap33673803367384(){
            this.$emit('swapfrom3367380to3367384');
        },
		changeVisibility3367377(){
            this.show3367377 = true;
            this.showswaped3367377= true

        },
        scrollTo3367326(){
            this.$refs.ref3367349?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
        },
        gotoReviewPage(){
            this.$router.push({path:"/reviewpage"});
        },
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
	},created(){



	}
}
</script>
<style lang="css" scoped>
@import '../assets/moviepage.css';
</style>