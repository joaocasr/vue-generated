<template>
<div>
 <div class="grid-item-28792780 container2879855">
  <div class="grid-item-28792780 container2879856">
   <p class="grid-item-28792780 text2879857">
    Exclusive
   </p>
  </div>
  <div class="grid-item-28792780 container2879858">
   <div class="grid-item-28792780 container2879859" v-on:click="gotoHomePagePage()">
    <p class="grid-item-28792780 text2879860">
     Home
    </p>
    <div class="grid-item-28792780 container2879861">
     <div class="grid-item-28792780 line2879862">
     </div>
    </div>
   </div>
   <div class="grid-item-28792780 container2879863" v-on:click="gotoContactPage()">
    <p class="grid-item-28792780 text2879864">
     Contact
    </p>
   </div>
   <div class="grid-item-28792780 container2879865" v-on:click="gotoAboutPage()">
    <p class="grid-item-28792780 text2879866">
     About
    </p>
   </div>
   <div class="grid-item-28792780 container2879867" v-on:click="gotoSignUpPage()">
    <p class="grid-item-28792780 text2879868">
     Sign Up
    </p>
   </div>
  </div>
 </div>
 <div class="grid-item-28792780 container2879869">
  <div class="grid-item-28792780 container2879870">
   <IconField class="ssearchinputfilter2879871">
    <InputIcon class="pi pi-search">
    </InputIcon>
    <InputText placeholder="what are you looking for?" v-model="inputsearch2879871">
    </InputText>
   </IconField>
   <div class="grid-item-28792780 container2879872">
    <img alt="container2879873" class="grid-item-28792780 container2879873" src="/Vector2879873.svg" v-on:click="gotoWishlistPage()"/>
   </div>
   <div class="grid-item-28792780 container2879874" v-on:click="gotoCartPage()">
    <div class="grid-item-28792780 container2879875">
     <img alt="container2879876" class="grid-item-28792780 container2879876" src="/Vector2879876.svg"/>
     <img alt="container2879877" class="grid-item-28792780 container2879877" src="/Vector2879877.svg"/>
     <img alt="container2879878" class="grid-item-28792780 container2879878" src="/Vector2879878.svg"/>
     <img alt="container2879879" class="grid-item-28792780 container2879879" src="/Vector2879879.svg"/>
    </div>
   </div>
   <div class="grid-item-28792780 container2879880">
    <img alt="container2879881" class="grid-item-28792780 container2879881" src="/Vector2879881.svg"/>
    <img alt="container2879882" class="grid-item-28792780 container2879882" src="/Vector2879882.svg"/>
   </div>
  </div>
 </div>
</div>

</template>
    
<script>
export default {

    data(){
        return {
        inputsearch2879871:"",
            selectedClass2734735:'',
            currentVariant2734735:'',
            selectedClass2734736:'',
            currentVariant2734736:'',
            selectedClass2734737:'',
            currentVariant2734737:'',
            selectedClass2734738:'',
            currentVariant2734738:'',
            selectedClass2734740:'',
            currentVariant2734740:'',
            selectedClass2734742:'',
            currentVariant2734742:'',
            selectedClass2734743:'',
            currentVariant2734743:'',
            selectedClass2734744:'',
            currentVariant2734744:''   
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
        }
	}
}
</script>
<style lang="css" scoped>
@import '../assets/header.css';
</style>