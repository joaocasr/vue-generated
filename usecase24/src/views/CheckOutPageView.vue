<template>
<div class="grid-container">
 <div class="grid-item container28792299">
  <p class="grid-item text28792300">
   Account
  </p>
  <div class="grid-item line28792301">
  </div>
  <p class="grid-item text28792302">
   My Account
  </p>
  <div class="grid-item line28792303">
  </div>
  <p class="grid-item text28792304">
   Product
  </p>
  <div class="grid-item line28792305">
  </div>
  <p class="grid-item text28792306">
   View Cart
  </p>
  <div class="grid-item line28792307">
  </div>
  <p class="grid-item text28792308">
   CheckOut
  </p>
 </div>
 <div class="grid-item container28792309">
  <p class="grid-item text28792310">
   Billing Details
  </p>
 </div>
 <div class="grid-item container28792311">
  <div class="form28792312">
   <Form  :initialValues="initialValues28792312" :resolver="resolver28792312"  :validateOnBlur="true" @submit="onFormSubmit28792312" v-slot="$form28792312">
    <div class="inputform28792312">
     <label class="label28792312" for="input128792312">
      Email Address
     </label>
     <br/>
     <InputText  fluid  id="input128792312" name="input128792312" placeholder="Email Address" type="text">
     </InputText>
     <Message severity="error" size="small" v-if="$form28792312.input128792312?.invalid" variant="simple">
      {{$form28792312.input128792312?.error.message}}
     </Message>
    </div>
    <div class="inputform28792312">
     <label class="label28792312" for="input228792312">
      Phone Number
     </label>
     <br/>
     <InputText  fluid  id="input228792312" name="input228792312" placeholder="Phone Number" type="text">
     </InputText>
     <Message severity="error" size="small" v-if="$form28792312.input228792312?.invalid" variant="simple">
      {{$form28792312.input228792312?.error.message}}
     </Message>
    </div>
    <div class="inputform28792312">
     <label class="label28792312" for="input328792312">
      Town/City
     </label>
     <br/>
     <InputText  fluid  id="input328792312" name="input328792312" placeholder="Town/City" type="text">
     </InputText>
     <Message severity="error" size="small" v-if="$form28792312.input328792312?.invalid" variant="simple">
      {{$form28792312.input328792312?.error.message}}
     </Message>
    </div>
    <div class="inputform28792312">
     <label class="label28792312" for="input428792312">
      Apartment, floor, etc. (optional)
     </label>
     <br/>
     <InputText  fluid  id="input428792312" name="input428792312" placeholder="Street Adress" type="text">
     </InputText>
     <Message severity="error" size="small" v-if="$form28792312.input428792312?.invalid" variant="simple">
      {{$form28792312.input428792312?.error.message}}
     </Message>
    </div>
    <div class="inputform28792312">
     <label class="label28792312" for="input528792312">
      Street Adress
     </label>
     <br/>
     <InputText  fluid  id="input528792312" name="input528792312" placeholder="Street Adress" type="text">
     </InputText>
     <Message severity="error" size="small" v-if="$form28792312.input528792312?.invalid" variant="simple">
      {{$form28792312.input528792312?.error.message}}
     </Message>
    </div>
    <div class="inputform28792312">
     <label class="label28792312" for="input628792312">
      Company Name
     </label>
     <br/>
     <InputText  fluid  id="input628792312" name="input628792312" placeholder="Company Name" type="text">
     </InputText>
     <Message severity="error" size="small" v-if="$form28792312.input628792312?.invalid" variant="simple">
      {{$form28792312.input628792312?.error.message}}
     </Message>
    </div>
    <div class="inputform28792312">
     <label class="label28792312" for="input728792312">
      First Name
     </label>
     <br/>
     <InputText  fluid  id="input728792312" name="input728792312" placeholder="Username" type="text">
     </InputText>
     <Message severity="error" size="small" v-if="$form28792312.input728792312?.invalid" variant="simple">
      {{$form28792312.input728792312?.error.message}}
     </Message>
    </div>
    <button class="submitbtnform28792312" label="Submit" type="submit">
     Place Order
    </button>
   </Form>
  </div>
  <div class="scheckbox28792313">
   <div :key="box.key" v-for="box of boxes28792313">
    <Checkbox :inputid="box.key" :value="box.name" name="box" v-model="selectedCategories">
    </Checkbox>
    <label :for="box.key" class="labelscheckbox28792313">
     {{ box.name }}
    </label>
   </div>
  </div>
 </div>
 <div class="grid-item container28792314">
  <div class="grid-item container28792315">
   <div class="grid-item container28792316">
    <div class="grid-item container28792317">
     <img alt="container28792318" class="grid-item container28792318" src="/g922500x500128792318.png"/>
    </div>
    <div class="grid-item container28792319">
     <p class="grid-item text28792320">
      LCD Monitor
     </p>
     <p class="grid-item text28792321">
      $650
     </p>
    </div>
   </div>
   <div class="grid-item container28792322">
    <div class="grid-item container28792323">
     <img alt="container28792324" class="grid-item container28792324" src="/g27cq4500x500128792324.png"/>
    </div>
    <div class="grid-item container28792325">
     <p class="grid-item text28792326">
      H1 Gamepad
     </p>
     <p class="grid-item text28792327">
      $1100
     </p>
    </div>
   </div>
  </div>
  <div class="grid-item container28792328">
   <div class="grid-item container28792329">
    <div class="grid-item container28792330">
     <div class="grid-item container28792331">
      <div class="grid-item container28792332">
       <p class="grid-item text28792333">
        Subtotal:
       </p>
       <p class="grid-item text28792334">
        $1750
       </p>
      </div>
      <div class="grid-item container28792335">
       <div class="grid-item line28792336">
       </div>
      </div>
     </div>
     <div class="grid-item container28792337">
      <p class="grid-item text28792338">
       Shipping:
      </p>
      <p class="grid-item text28792339">
       Free
      </p>
     </div>
    </div>
    <div class="grid-item container28792340">
     <div class="grid-item line28792341">
     </div>
    </div>
   </div>
   <div class="grid-item container28792342">
    <p class="grid-item text28792343">
     Total:
    </p>
    <p class="grid-item text28792344">
     $1750
    </p>
   </div>
  </div>
  <div class="grid-item container28792345">
   <div class="grid-item container28792346">
    <div class="grid-item container28792347">
     <div class="grid-item ellipse28792348">
     </div>
    </div>
    <p class="grid-item text28792349">
     Bank
    </p>
   </div>
   <div class="grid-item container28792350">
    <div class="grid-item container28792351">
     <img alt="container28792352" class="grid-item container28792352" src="/image3228792352.png"/>
    </div>
    <div class="grid-item container28792353">
     <img alt="container28792354" class="grid-item container28792354" src="/image3028792354.png"/>
    </div>
    <div class="grid-item container28792355">
     <img alt="container28792356" class="grid-item container28792356" src="/image3128792356.png"/>
    </div>
    <div class="grid-item container28792357">
     <img alt="container28792358" class="grid-item container28792358" src="/image3328792358.png"/>
    </div>
   </div>
  </div>
  <div class="grid-item container28792359">
   <div class="grid-item container28792360">
    <div class="grid-item ellipse28792361">
     <div class="grid-item ellipse28792362">
     </div>
    </div>
   </div>
   <p class="grid-item text28792363">
    Cash on delivery
   </p>
  </div>
  <div class="grid-item container28792364">
   <IconField class="ssearchinputfilter28792365">
    <InputIcon class="pi pi-search">
    </InputIcon>
    <InputText placeholder="Coupon  Code" v-model="inputsearch28792365">
    </InputText>
   </IconField>
   <div class="grid-item container28792366">
    <p class="grid-item text28792367">
     Apply Coupon
    </p>
   </div>
  </div>
 </div>
 <Topheader class="grid-item-28792368 component28792368"></Topheader>
 <Line3 class="grid-item-28792369 component28792369"></Line3>
 <Header class="grid-item-28792370 component28792370"></Header>
 <Footer class="grid-item-28792371 component28792371"></Footer>
</div>

</template>

<script>
import Topheader from '@/components/Topheader.vue';
import Line3 from '@/components/Line3.vue';
import Footer from '@/components/Footer.vue';
import Header from '@/components/Header.vue';
import { ref } from 'vue';
import { useToastStore } from "@/stores/toast";;
export default {
    components:{
        Topheader,
        Line3,
        Footer,
        Header
    },
    data(){
        return {
            boxes28792313:[],
            boxesValues28792313:[{'name': 'Save this information for faster check-out next time', 'key': 'Checkbox'}],
            selectedBoxes28792313:[],
            inputsearch28792365:"",
            inputsearch2879871:"",
            inputsearch2879798:""    
                
        }
    },
    setup(){

        const initialValues28792312 = ref({
           input128792312: '',
           input228792312: '',
           input328792312: '',
           input428792312: '',
           input528792312: '',
           input628792312: '',
           input728792312: '',
        });
    
        const resolver28792312 = ({ values }) => {
            const errors = {};
            if (!values.input128792312){
                errors.input128792312 = [{ message: 'Email Address is required.'}];
            }
        
            if (!values.input228792312){
                errors.input228792312 = [{ message: 'Phone Number is required.'}];
            }
        
            if (!values.input328792312){
                errors.input328792312 = [{ message: 'Town/City is required.'}];
            }
        
            if (!values.input428792312){
                errors.input428792312 = [{ message: 'Street Adress is required.'}];
            }
        
            if (!values.input528792312){
                errors.input528792312 = [{ message: 'Street Adress is required.'}];
            }
        
            if (!values.input628792312){
                errors.input628792312 = [{ message: 'Company Name is required.'}];
            }
        
            if (!values.input728792312){
                errors.input728792312 = [{ message: 'Username is required.'}];
            }
        
       
            return {
                errors
            };
        };
    

        return {
            initialValues28792312,
            resolver28792312,
          }
	},methods:{
onFormSubmit28792312(data) {
        const toastStore = useToastStore();
        let message = ""
        if(data.valid==true){
            message = "The form was successfully submited!"            
            toastStore.showSuccess(message);
        }
        if(data.valid==false){
            message = "Error in form submission!"            
            toastStore.showError(message);
        }
    }
    ,
        getCheckboxOptions28792313(){
            /*Here you can adapt to fetch the data from an API*/
            this.boxes28792313 = this.boxesValues28792313;
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
	},mounted(){
          this.getCheckboxOptions28792313();
	}
}
</script>
<style lang="css" scoped>
@import '../assets/checkoutpage.css';
</style>