<template>
<div class="grid-container">
 <div class="grid-item container28792083">
  <p class="grid-item text28792084">
   Home
  </p>
  <div class="grid-item line28792085">
  </div>
  <p class="grid-item text28792086">
   404 Error
  </p>
  <div class="grid-item line28792087">
  </div>
  <p class="grid-item text28792088">
   Nothing
  </p>
  <div class="grid-item line28792089">
  </div>
  <p class="grid-item text28792090">
   Nothing
  </p>
  <div class="grid-item line28792091">
  </div>
  <p class="grid-item text28792092">
   Nothing
  </p>
 </div>
 <div class="grid-item container28792093">
  <p class="grid-item text28792094">
   404 Not Found
  </p>
  <p class="grid-item text28792095">
   Your visited page not found. You may go home page.
  </p>
 </div>
 <div class="grid-item container28792096" v-on:click="gotoHomePagePage()">
  <p class="grid-item text28792097">
   Back to home page
  </p>
 </div>
 <Topheader class="grid-item-28792098 component28792098"></Topheader>
 <Line3 class="grid-item-28792099 component28792099"></Line3>
 <Header class="grid-item-28792100 component28792100"></Header>
 <Footer class="grid-item-28792101 component28792101"></Footer>
</div>

</template>

<script>
import Footer from '@/components/Footer.vue';
import Header from '@/components/Header.vue';
import Line3 from '@/components/Line3.vue';
import Topheader from '@/components/Topheader.vue';
export default {
    components:{
        Footer,
        Header,
        Line3,
        Topheader
    },
    data(){
        return {
            inputsearch2879871:"",
            inputsearch2879798:""    
                
        }
    },
    methods:{
        gotoHomePagePage(){
            this.$router.push({path:"/homepagepage"});
        },
        gotoContactPage(){
            this.$router.push({path:"/contactpage"});
        },
        gotoAboutPage(){
            this.$router.push({path:"/aboutpage"});
        },
        gotoSignUpPage(){
            this.$router.push({path:"/signuppage"});
        },
        gotoWishlistPage(){
            this.$router.push({path:"/wishlistpage"});
        },
        gotoCartPage(){
            this.$router.push({path:"/cartpage"});
        },
        gotoAccountPage(){
            this.$router.push({path:"/accountpage"});
        },
        gotoLogInPage(){
            this.$router.push({path:"/loginpage"});
        }
	}
}
</script>
<style lang="css" scoped>
@import '../assets/errorpage.css';
</style>