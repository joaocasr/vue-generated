<template>
<div class="grid-container">
 <Homebanner @show-from27702933-to27702925="show27702925=true" class="grid-item-27702787 component27702787"></Homebanner>
 <Footer class="grid-item-27702788 component27702788"></Footer>
 <div class="grid-item container27702789">
  <Movie1 class="grid-item-27702790 component27702790"></Movie1>
  <Movie2 class="grid-item-27702791 component27702791"></Movie2>
  <Movie3 class="grid-item-27702792 component27702792"></Movie3>
  <Movie4 class="grid-item-27702793 component27702793"></Movie4>
  <Movie5 class="grid-item-27702794 component27702794"></Movie5>
  <Movie6 class="grid-item-27702795 component27702795"></Movie6>
  <Movie7 class="grid-item-27702796 component27702796"></Movie7>
  <Movie8 class="grid-item-27702797 component27702797"></Movie8>
 </div>
 <IconField class="ssearchinputfilter27702798">
  <InputIcon class="pi pi-search">
  </InputIcon>
  <InputText placeholder="Search . . ." v-model="inputsearch27702798">
  </InputText>
 </IconField>
 <div class="grid-item container27702799">
  <p class="grid-item text27702800">
   Upcoming Movies
  </p>
  <div class="grid-item container27702801">
   <img alt="container27702802" class="grid-item container27702802" src="/joker27702802.png"/>
   <div class="grid-item container27702803">
    <p class="grid-item text27702804">
     Joker: Folie à Deux
    </p>
   </div>
   <div class="grid-item container27702805">
    <p class="grid-item text27702806">
     Oct 02, 2024
    </p>
   </div>
  </div>
  <div class="grid-item container27702807">
   <img alt="container27702808" class="grid-item container27702808" src="/wolverine27702808.png"/>
   <div class="grid-item container27702809">
    <p class="grid-item text27702810">
     Deadpool &amp; Wolverine
    </p>
   </div>
   <div class="grid-item container27702811">
    <p class="grid-item text27702812">
     Jul 24, 2024
    </p>
   </div>
  </div>
 </div>
 <div class="grid-item container27702813">
  <img alt="container27702814" class="grid-item container27702814" src="/tapevector27702814.svg"/>
  <p class="grid-item text27702815">
   BROWSE ALL MOVIES
  </p>
  <img alt="container27702816" class="grid-item container27702816" src="/govector27702816.svg"/>
 </div>
 <v-pagination :length="68" :total-visible="3" class="spaginator27702817" v-model="currentPage27702817">
 </v-pagination>
 <Navbar class="grid-item-27702818 component27702818 posnavbar"></Navbar>
</div>

</template>

<script>
import Footer from '@/components/Footer.vue';
import Movie4 from '@/components/Movie4.vue';
import Movie2 from '@/components/Movie2.vue';
import Movie5 from '@/components/Movie5.vue';
import Movie3 from '@/components/Movie3.vue';
import Movie7 from '@/components/Movie7.vue';
import Movie8 from '@/components/Movie8.vue';
import Navbar from '@/components/Navbar.vue';
import Movie1 from '@/components/Movie1.vue';
import Homebanner from '@/components/Homebanner.vue';
import Movie6 from '@/components/Movie6.vue';
export default {
    components:{
        Footer,
        Movie4,
        Movie2,
        Movie5,
        Movie3,
        Movie7,
        Movie8,
        Navbar,
        Movie1,
        Homebanner,
        Movie6
    },
    data(){
        return {
            starsSeletec27702881:"3",
            starsSeletec27702890:"3",
            starsSeletec27702836:"3",
            starsSeletec27702845:"3",
            starsSeletec27702827:"3",
            starsSeletec27702872:"3",
            starsSeletec27702854:"3",
            starsSeletec27702863:"3",
            inputsearch27702798:"",
            currentPage27702817:1,
            menuoptions27702922:[{'option': 'Login', 'destination': '2770:3033'}, {'option': 'Sign Up'}]    
                
        }
    },
    methods:{
		changeVisibility27702925(){
            this.show27702925 = !this.show27702925;
        },
        gotoMoviePage(){
            this.$router.push({path:"/moviepage"});
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
@import '../assets/homepage.css';
</style>