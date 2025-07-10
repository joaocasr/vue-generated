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
 <div class="grid-item container28792096" v-on:click="gotoHomePagePage28792096()">
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
import Topheader from '@/components/Topheader.vue';
import Line3 from '@/components/Line3.vue';
import Header from '@/components/Header.vue';
export default {
    components:{
        Footer,
        Topheader,
        Line3,
        Header
    },
    data(){
        return {
            inputsearch2879871:"",
            inputsearch2879798:""    
                
        }
    },
    methods:{
        gotoHomePagePage28792096(){
            this.$router.push({path:"/homepagepage"});
        },
        gotoHomePagePage2879859(){
            this.$router.push({path:"/homepagepage"});
        },
        gotoContactPage2879863(){
            this.$router.push({path:"/contactpage"});
        },
        gotoAboutPage2879865(){
            this.$router.push({path:"/aboutpage"});
        },
        gotoSignUpPage2879867(){
            this.$router.push({path:"/signuppage"});
        },
        gotoWishlistPage2879873(){
            this.$router.push({path:"/wishlistpage"});
        },
        gotoCartPage2879874(){
            this.$router.push({path:"/cartpage"});
        },
        gotoAccountPage2879808(){
            this.$router.push({path:"/accountpage"});
        },
        gotoLogInPage2879809(){
            this.$router.push({path:"/loginpage"});
        },
        gotoCartPage2879810(){
            this.$router.push({path:"/cartpage"});
        },
        gotoWishlistPage2879811(){
            this.$router.push({path:"/wishlistpage"});
        }
	}
}
</script>
<style lang="css" scoped>
@import '../assets/errorpage.css';
</style>