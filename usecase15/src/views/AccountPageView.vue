<template>
<div class="grid-container">
 <div class="grid-item container28792373">
  <p class="grid-item text28792374">
   Home
  </p>
  <div class="grid-item line28792375">
  </div>
  <p class="grid-item text28792376">
   My Account
  </p>
  <div class="grid-item line28792377">
  </div>
  <p class="grid-item text28792378">
   Nothing
  </p>
  <div class="grid-item line28792379">
  </div>
  <p class="grid-item text28792380">
   Nothing
  </p>
  <div class="grid-item line28792381">
  </div>
  <p class="grid-item text28792382">
   Nothing
  </p>
 </div>
 <p class="grid-item text28792383">
  Welcome! Md Rimel
 </p>
 <p class="grid-item text28792384">
  Manage My Account
 </p>
 <p class="grid-item text28792385">
  My Orders
 </p>
 <p class="grid-item text28792386">
  My WishList
 </p>
 <div class="grid-item container28792387">
  <p class="grid-item text28792388">
   My Profile
  </p>
  <p class="grid-item text28792389">
   Address Book
  </p>
  <p class="grid-item text28792390">
   My Payment Options
  </p>
 </div>
 <div class="grid-item container28792391">
  <p class="grid-item text28792392">
   My Returns
  </p>
  <p class="grid-item text28792393">
   My Cancellations
  </p>
 </div>
 <div class="grid-item container28792394">
  <p class="grid-item text28792395">
   Edit Your Profile
  </p>
  <div class="form28792396">
   <Form  :initialValues="initialValues28792396" :resolver="resolver28792396"  :validateOnBlur="true" @submit="onFormSubmit28792396" v-slot="$form28792396">
    <div class="inputform28792396">
     <label class="label28792396" for="input128792396">
      Confirm New Password
     </label>
     <br/>
     <InputText  fluid  id="input128792396" name="input128792396" placeholder="Confirm New Passwod" type="text">
     </InputText>
     <Message severity="error" size="small" v-if="$form28792396.input128792396?.invalid" variant="simple">
      {{$form28792396.input128792396?.error.message}}
     </Message>
    </div>
    <div class="inputform28792396">
     <label class="label28792396" for="input228792396">
      New Password
     </label>
     <br/>
     <InputText  fluid  id="input228792396" name="input228792396" placeholder="New Passwod" type="text">
     </InputText>
     <Message severity="error" size="small" v-if="$form28792396.input228792396?.invalid" variant="simple">
      {{$form28792396.input228792396?.error.message}}
     </Message>
    </div>
    <div class="inputform28792396">
     <label class="label28792396" for="input328792396">
      Password Changes
     </label>
     <br/>
     <InputText  fluid  id="input328792396" name="input328792396" placeholder="Current Passwod" type="text">
     </InputText>
     <Message severity="error" size="small" v-if="$form28792396.input328792396?.invalid" variant="simple">
      {{$form28792396.input328792396?.error.message}}
     </Message>
    </div>
    <div class="inputform28792396">
     <label class="label28792396" for="input428792396">
      Address
     </label>
     <br/>
     <InputText  fluid  id="input428792396" name="input428792396" placeholder="Kingston, 5236, United State" type="text">
     </InputText>
     <Message severity="error" size="small" v-if="$form28792396.input428792396?.invalid" variant="simple">
      {{$form28792396.input428792396?.error.message}}
     </Message>
    </div>
    <div class="inputform28792396">
     <label class="label28792396" for="input528792396">
      Email
     </label>
     <br/>
     <InputText  fluid  id="input528792396" name="input528792396" placeholder="rimel1111@gmail.com" type="text">
     </InputText>
     <Message severity="error" size="small" v-if="$form28792396.input528792396?.invalid" variant="simple">
      {{$form28792396.input528792396?.error.message}}
     </Message>
    </div>
    <div class="inputform28792396">
     <label class="label28792396" for="input628792396">
      Last Name
     </label>
     <br/>
     <InputText  fluid  id="input628792396" name="input628792396" placeholder="Rimel" type="text">
     </InputText>
     <Message severity="error" size="small" v-if="$form28792396.input628792396?.invalid" variant="simple">
      {{$form28792396.input628792396?.error.message}}
     </Message>
    </div>
    <div class="inputform28792396">
     <label class="label28792396" for="input728792396">
      First Name
     </label>
     <br/>
     <InputText  fluid  id="input728792396" name="input728792396" placeholder="Md" type="text">
     </InputText>
     <Message severity="error" size="small" v-if="$form28792396.input728792396?.invalid" variant="simple">
      {{$form28792396.input728792396?.error.message}}
     </Message>
    </div>
    <button class="submitbtnform28792396" label="Submit" type="submit">
     Save Changes
    </button>
   </Form>
  </div>
 </div>
 <Topheader class="grid-item-28792397 component28792397"></Topheader>
 <Line3 class="grid-item-28792398 component28792398"></Line3>
 <Header class="grid-item-28792399 component28792399"></Header>
 <Footer class="grid-item-28792400 component28792400"></Footer>
</div>

</template>

<script>
import Line3 from '@/components/Line3.vue';
import Footer from '@/components/Footer.vue';
import Header from '@/components/Header.vue';
import Topheader from '@/components/Topheader.vue';
import { useToastStore } from "@/stores/toast";;
import { ref } from 'vue';
export default {
    components:{
        Line3,
        Footer,
        Header,
        Topheader
    },
    data(){
        return {
            inputsearch2879871:"",
            inputsearch2879798:""    
                
        }
    },
    setup(){

        const initialValues28792396 = ref({
           input128792396: '',
           input228792396: '',
           input328792396: '',
           input428792396: '',
           input528792396: '',
           input628792396: '',
           input728792396: '',
        });
    
        const resolver28792396 = ({ values }) => {
            const errors = {};
            if (!values.input128792396){
                errors.input128792396 = [{ message: 'Confirm New Passwod is required.'}];
            }
        
            if (!values.input228792396){
                errors.input228792396 = [{ message: 'New Passwod is required.'}];
            }
        
            if (!values.input328792396){
                errors.input328792396 = [{ message: 'Current Passwod is required.'}];
            }
        
            if (!values.input428792396){
                errors.input428792396 = [{ message: 'Kingston, 5236, United State is required.'}];
            }
        
            if (!values.input528792396){
                errors.input528792396 = [{ message: 'rimel1111@gmail.com is required.'}];
            }
        
            if (!values.input628792396){
                errors.input628792396 = [{ message: 'Rimel is required.'}];
            }
        
            if (!values.input728792396){
                errors.input728792396 = [{ message: 'Md is required.'}];
            }
        
       
            return {
                errors
            };
        };
    

        return {
            initialValues28792396,
            resolver28792396,
          }
	},methods:{
onFormSubmit28792396(data) {
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
@import '../assets/accountpage.css';
</style>