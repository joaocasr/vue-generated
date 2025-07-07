<template>
<div class="grid-container">
 <div class="grid-item container27702981">
  <div class="grid-item rectangle27702982">
   <p class="grid-item text27702983">
    AVERAGE SCORE
   </p>
   <p class="grid-item text27702984">
    4.5
   </p>
  </div>
 </div>
 <Deletionwatchlistmodal @close-from27703013-to27703012="show27703012=false" @close-from27703015-to27703012="show27703012=false" class="grid-item-27703012 component27703012" v-if="show27703012"></Deletionwatchlistmodal>
 <div class="grid-item container27702985" v-on:click="changeVisibility27703012()">
  <p class="grid-item text27702986">
   Clear Watchlist
  </p>
  <div class="grid-item container27702987">
   <img alt="container27702988" class="grid-item container27702988" src="/trashVector27702988.svg"/>
  </div>
 </div>
 <div class="grid-item container27702989">
  <div class="grid-item rectangle27702990">
   <p class="grid-item text27702991">
    ITEMS ON LIST
   </p>
   <p class="grid-item text27702992">
    1
   </p>
  </div>
 </div>
 <p class="grid-item text27702993">
  WATCHLIST
 </p>
 <div class="grid-item container27702994">
  <div class="grid-item rectangle27702995">
   <img alt="container27702996" class="grid-item container27702996" src="/poster3127702996.png"/>
   <p class="grid-item text27702997">
    Fantastic Beasts: The Secrets of Dumbledore
    <br/>
    (2022)
   </p>
   <v-rating :length="5" :model-value="starsSeletec27702998" :size="25" class="srating27702998"  half-increments hover readonly >
   </v-rating>
  </div>
 </div>
 <Footer class="grid-item-27702999 component27702999"></Footer>
 <Navbar class="grid-item-27703000 component27703000 posnavbar"></Navbar>
</div>

</template>

<script>
import Deletionwatchlistmodal from '@/components/Deletionwatchlistmodal.vue';
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';
export default {
    components:{
        Deletionwatchlistmodal,
        Navbar,
        Footer
    },
    data(){
        return {
            show27703012:false,
            starsSeletec27702998:"3",
            menuoptions27702922:[{'option': 'Login', 'destination': '2770:3033'}, {'option': 'Sign Up'}]    
                
        }
    },
    methods:{
		changeVisibility27703012(){
            this.show27703012 = true;
            
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
@import '../assets/watchlistpage.css';
</style>