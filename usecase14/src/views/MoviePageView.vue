<template>
<div class="grid-container">
 <img alt="container27702942" class="grid-item container27702942" src="/image1127702942.png"/>
 <p class="grid-item text27702943">
  Avatar (2022)
 </p>
 <p class="grid-item text27702944">
  Jake Sully lives with his newfound family formed on the extrasolar moon  Pandora. Once a familiar threat returns to finish what was previously  started, Jake must work with Neytiri and the army of the Na'vi race to  protect their home.
 </p>
 <div class="grid-item rectangle27702945">
  <p class="grid-item text27702946">
   3.0
  </p>
  <p class="grid-item text27702947">
   Score
  </p>
 </div>
 <Confirmationwatchlistmodal @close-from27703002-to27703001="show27703001=false" @close-from27703004-to27703001="show27703001=false" class="grid-item-27703001 component27703001" v-if="show27703001"></Confirmationwatchlistmodal>
 <div class="grid-item container27702948" v-on:click="changeVisibility27703001()">
  <p class="grid-item text27702949">
   Add to Watchlist
  </p>
 </div>
 <div class="grid-item container27702950" v-on:click="scrollTo27702950()">
  <p class="grid-item text27702951">
   Watch Trailer
  </p>
  <div class="grid-item regular_polygon27702952">
  </div>
 </div>
 <div class="grid-item container27702953">
  <p class="grid-item text27702954">
   Watch Online Now
  </p>
  <div class="grid-item regular_polygon27702955">
  </div>
 </div>
 <p class="grid-item text27702956">
  1h,34min
 </p>
 <p class="grid-item text27702957">
  10 Oct 2022
 </p>
 <div class="grid-item container27702958" v-on:click="gotoReviewPage()">
  <p class="grid-item text27702959">
   Insert My Review
  </p>
 </div>
 <p class="grid-item text27702960">
  REVIEWS
 </p>
 <p class="grid-item text27702961">
  Related Movies
 </p>
 <div class="grid-item line27702962">
 </div>
 <div class="grid-item line27702963">
 </div>
 <Footer class="grid-item-27702964 component27702964"></Footer>
 <div class="grid-item container27702965">
  <Related1 class="grid-item-27702966 component27702966"></Related1>
  <Related2 class="grid-item-27702967 component27702967"></Related2>
  <Related3 class="grid-item-27702968 component27702968"></Related3>
 </div>
 <Review class="grid-item-27702969 component27702969"></Review>
 <Review class="grid-item-27702970 component27702970"></Review>
 <v-rating :length="5" :model-value="starsSeletec27702971" :size="25" class="srating27702971"  half-increments hover readonly >
 </v-rating>
 <v-pagination :length="68" :total-visible="3" class="spaginator27702972" v-model="currentPage27702972">
 </v-pagination>
 <div class="svideo27702973" ref="ref27702973">
  <iframe controls="1" height="500.0px" src="https://www.youtube.com/embed/9ZIgQFKaK4Y" title="svideo27702973" width="934.0px">
  </iframe>
 </div>
 <Navbar class="grid-item-27702974 component27702974 posnavbar"></Navbar>
</div>

</template>

<script>
import Footer from '@/components/Footer.vue';
import Navbar from '@/components/Navbar.vue';
import Related2 from '@/components/Related2.vue';
import Confirmationwatchlistmodal from '@/components/Confirmationwatchlistmodal.vue';
import Review from '@/components/Review.vue';
import Related1 from '@/components/Related1.vue';
import Related3 from '@/components/Related3.vue';
export default {
    components:{
        Footer,
        Navbar,
        Related2,
        Confirmationwatchlistmodal,
        Review,
        Related1,
        Related3
    },
    data(){
        return {
            show27703001:false,
            starsSeletec27702979:"0",
            starsSeletec27702971:"3",
            currentPage27702972:1,
            menuoptions27702922:[{'option': 'Login', 'destination': '2770:3033'}, {'option': 'Sign Up'}]    
                
        }
    },
    methods:{
		changeVisibility27703001(){
            this.show27703001 = true;
            
        },
        scrollTo27702950(){
            this.$refs.ref27702973?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
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
        selectedItem27702922(){
               this.$router.push({path:"/loginpage"});

            }
	}
}
</script>
<style lang="css" scoped>
@import '../assets/moviepage.css';
</style>