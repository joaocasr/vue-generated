<template>
<div class="grid-container">
 <div class="grid-item container28792103">
  <div class="grid-item container28792104">
   <div class="grid-item container28792105">
    <div class="grid-item container28792106">
     <div class="grid-item container28792107">
      <p class="grid-item text28792108">
       Product
      </p>
      <p class="grid-item text28792109">
       Price
      </p>
      <p class="grid-item text28792110">
       Quantity
      </p>
      <p class="grid-item text28792111">
       Subtotal
      </p>
     </div>
    </div>
    <div class="grid-item container28792112">
     <p class="grid-item text28792113">
      $650
     </p>
     <p class="grid-item text28792114">
      $650
     </p>
     <div class="grid-item container28792115">
      <div class="grid-item container28792116">
       <p class="grid-item text28792117">
        01
       </p>
       <div class="grid-item container28792118">
        <div class="grid-item container28792119">
         <img alt="container28792120" class="grid-item container28792120" src="/Vector28792120.svg"/>
        </div>
        <div class="grid-item container28792121">
         <img alt="container28792122" class="grid-item container28792122" src="/Vector28792122.svg"/>
        </div>
       </div>
      </div>
     </div>
     <div class="grid-item container28792123">
      <img alt="container28792124" class="grid-item container28792124" src="/g27cq4500x500128792124.png"/>
     </div>
     <p class="grid-item text28792125">
      LCD Monitor
     </p>
     <div class="grid-item container28792126">
      <div class="grid-item ellipse28792127">
       <img alt="container28792128" class="grid-item container28792128" src="/Vector28792128.svg"/>
      </div>
     </div>
    </div>
    <div class="grid-item container28792129">
     <p class="grid-item text28792130">
      $550
     </p>
     <p class="grid-item text28792131">
      $1100
     </p>
     <div class="grid-item container28792132">
      <div class="grid-item container28792133">
       <p class="grid-item text28792134">
        02
       </p>
       <div class="grid-item container28792135">
        <div class="grid-item container28792136">
         <img alt="container28792137" class="grid-item container28792137" src="/Vector28792137.svg"/>
        </div>
        <div class="grid-item container28792138">
         <img alt="container28792139" class="grid-item container28792139" src="/Vector28792139.svg"/>
        </div>
       </div>
      </div>
     </div>
     <div class="grid-item container28792140">
      <img alt="container28792141" class="grid-item container28792141" src="/g922500x500128792141.png"/>
     </div>
     <p class="grid-item text28792142">
      H1 Gamepad
     </p>
     <div class="grid-item container28792143">
      <div class="grid-item ellipse28792144">
       <img alt="container28792145" class="grid-item container28792145" src="/Vector28792145.svg"/>
      </div>
     </div>
    </div>
   </div>
   <div class="grid-item container28792146">
    <div class="grid-item container28792147">
     <p class="grid-item text28792148">
      Return To Shop
     </p>
    </div>
    <div class="grid-item container28792149">
     <p class="grid-item text28792150">
      Update Cart
     </p>
    </div>
   </div>
  </div>
  <div class="grid-item container28792151">
   <div class="grid-item container28792152">
    <IconField class="ssearchinputfilter28792153">
     <InputIcon class="pi pi-search">
     </InputIcon>
     <InputText placeholder="Coupon  Code" v-model="inputsearch28792153">
     </InputText>
    </IconField>
    <div class="grid-item container28792154">
     <p class="grid-item text28792155">
      Apply Coupon
     </p>
    </div>
   </div>
   <div class="grid-item container28792156">
    <p class="grid-item text28792157">
     Cart Total
    </p>
    <div class="grid-item container28792158">
     <p class="grid-item text28792159">
      Subtotal:
     </p>
     <p class="grid-item text28792160">
      $1750
     </p>
    </div>
    <div class="grid-item container28792161">
     <p class="grid-item text28792162">
      Shipping:
     </p>
     <p class="grid-item text28792163">
      Free
     </p>
    </div>
    <div class="grid-item container28792164">
     <p class="grid-item text28792165">
      Total:
     </p>
     <p class="grid-item text28792166">
      $1750
     </p>
    </div>
    <div class="grid-item container28792167" v-on:click="gotoCheckOutPage()">
     <p class="grid-item text28792168">
      Procees to checkout
     </p>
    </div>
    <div class="grid-item container28792169">
     <div class="grid-item line28792170">
     </div>
    </div>
    <div class="grid-item container28792171">
     <div class="grid-item line28792172">
     </div>
    </div>
   </div>
  </div>
 </div>
 <div class="grid-item container28792173">
  <p class="grid-item text28792174">
   Home
  </p>
  <div class="grid-item line28792175">
  </div>
  <p class="grid-item text28792176">
   Cart
  </p>
  <div class="grid-item line28792177">
  </div>
  <p class="grid-item text28792178">
   Nothing
  </p>
  <div class="grid-item line28792179">
  </div>
  <p class="grid-item text28792180">
   Nothing
  </p>
  <div class="grid-item line28792181">
  </div>
  <p class="grid-item text28792182">
   Nothing
  </p>
 </div>
 <Topheader class="grid-item-28792183 component28792183"></Topheader>
 <Line3 class="grid-item-28792184 component28792184"></Line3>
 <Header class="grid-item-28792185 component28792185"></Header>
 <Footer class="grid-item-28792186 component28792186"></Footer>
</div>

</template>

<script>
import Topheader from '@/components/Topheader.vue';
import Line3 from '@/components/Line3.vue';
import Footer from '@/components/Footer.vue';
import Header from '@/components/Header.vue';
export default {
    components:{
        Topheader,
        Line3,
        Footer,
        Header
    },
    data(){
        return {
            inputsearch28792153:"",
            inputsearch2879871:"",
            inputsearch2879798:""    
                
        }
    },
    methods:{
        gotoCheckOutPage(){
            this.$router.push({path:"/checkoutpage"});
        },
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
@import '../assets/cartpage.css';
</style>