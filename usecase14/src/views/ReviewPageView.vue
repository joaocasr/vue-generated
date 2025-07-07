<template>
<div class="grid-container">
 <Footer class="grid-item-27703020 component27703020"></Footer>
 <img alt="container27703021" class="grid-item container27703021" src="/image1227703021.png"/>
 <div class="grid-item container27703022" v-on:click="changeVisibility27702925()">
  <p class="grid-item text27703023">
   PUBLISH
  </p>
 </div>
 <p class="grid-item text27703024">
  AVATAR (2022)
 </p>
 <div class="grid-item container27703025">
  <div class="grid-item rectangle27703026">
   <p class="grid-item text27703027">
    Write down your review...
   </p>
  </div>
 </div>
 <div class="grid-item container27703028">
  <div class="grid-item container27703029">
   <p class="grid-item text27703030">
    Rate
   </p>
   <v-rating :length="5" :model-value="starsSeletec27703031" :size="25" class="srating27703031" half-increments="" hover="">
   </v-rating>
  </div>
 </div>
 <Navbar class="grid-item-27703032 component27703032 posnavbar"></Navbar>
 <div class="grid-item container27702925" v-show="show27702925==true">
  <p class="grid-item text27702926">
   HOME
  </p>
 </div>
</div>

</template>

<script>
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';
export default {
    components:{
        Navbar,
        Footer
    },
    data(){
        return {
            show27702925:false,
            starsSeletec27703031:"0",
            menuoptions27702922:[{'option': 'Login', 'destination': '2770:3033'}, {'option': 'Sign Up'}]    
                
        }
    },
    methods:{
		changeVisibility27702925(){
            this.show27702925 = true;
            
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
@import '../assets/reviewpage.css';
</style>