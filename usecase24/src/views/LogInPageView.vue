<template>
<div class="grid-container">
 <div class="grid-item container28791850">
  <div class="grid-item container28791851">
   <img alt="container28791852" class="grid-item container28791852" src="/dlbeatsnoop128791852.png"/>
  </div>
  <div class="grid-item container28791853">
   <div class="grid-item container28791854">
    <div class="grid-item container28791855">
     <p class="grid-item text28791856">
      Log in to Exclusive
     </p>
     <p class="grid-item text28791857">
      Enter your details below
     </p>
    </div>
   </div>
   <div class="form28791858">
    <Form  :initialValues="initialValues28791858" :resolver="resolver28791858"  :validateOnBlur="true" @submit="onFormSubmit28791858" v-slot="$form28791858">
     <div class="inputform28791858">
      <label class="label28791858" for="input128791858">
      </label>
      <br/>
      <InputText  fluid  id="input128791858" name="input128791858" placeholder="Passwod" type="text">
      </InputText>
      <Message severity="error" size="small" v-if="$form28791858.input128791858?.invalid" variant="simple">
       {{$form28791858.input128791858?.error.message}}
      </Message>
     </div>
     <div class="inputform28791858">
      <label class="label28791858" for="input228791858">
      </label>
      <br/>
      <InputText  fluid  id="input228791858" name="input228791858" placeholder="Email or Phone Number" type="text">
      </InputText>
      <Message severity="error" size="small" v-if="$form28791858.input228791858?.invalid" variant="simple">
       {{$form28791858.input228791858?.error.message}}
      </Message>
     </div>
     <button class="submitbtnform28791858" label="Submit" type="submit">
      Login
     </button>
    </Form>
   </div>
   <div class="grid-item container28791859">
    <p class="grid-item text28791860">
     Forget Password?
    </p>
   </div>
  </div>
 </div>
 <Topheader class="grid-item-28791861 component28791861"></Topheader>
 <Line3 class="grid-item-28791862 component28791862"></Line3>
 <Footer class="grid-item-28791863 component28791863"></Footer>
 <Header class="grid-item-28791864 component28791864"></Header>
</div>

</template>

<script>
import Topheader from '@/components/Topheader.vue';
import Line3 from '@/components/Line3.vue';
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import { useToastStore } from "@/stores/toast";;
import { ref } from 'vue';
export default {
    components:{
        Topheader,
        Line3,
        Header,
        Footer
    },
    data(){
        return {
            inputsearch2879798:"",
            inputsearch2879871:""    
                
        }
    },
    setup(){

        const initialValues28791858 = ref({
           input128791858: '',
           input228791858: '',
        });
    
        const resolver28791858 = ({ values }) => {
            const errors = {};
            /*Here you can adapt the code to check if the input text fulfills some criteria and show the error message. */
            if (!values.input128791858){
                errors.input128791858 = [{ message: 'Passwod is required.'}];
            }
        
            if (!values.input228791858){
                errors.input228791858 = [{ message: 'Email or Phone Number is required.'}];
            }
        
       
            return {
                errors
            };
        };
    

        return {
            initialValues28791858,
            resolver28791858,
          }
	},methods:{
onFormSubmit28791858(data) {
        const toastStore = useToastStore();
        let message = ""
        /*Here you can adapt the code to change the toast message or you can send data to the backend by doing a POST or PUT request. */
        if(data.valid){
            message = "The form was successfully submited!"            
            toastStore.showSuccess(message);
        }
        if(!data.valid){
            message = "Error in form submission!"            
            toastStore.showError(message);
        }
    }
    ,
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
        }
	}
}
</script>
<style lang="css" scoped>
@import '../assets/loginpage.css';
</style>