<template>
<div class="grid-container">
 <div class="grid-item container28791828">
  <div class="grid-item container28791829">
   <img alt="container28791830" class="grid-item container28791830" src="/dlbeatsnoop128791830.png"/>
  </div>
  <div class="grid-item container28791831">
   <div class="grid-item container28791832">
    <p class="grid-item text28791833">
     Create an account
    </p>
    <p class="grid-item text28791834">
     Enter your details below
    </p>
   </div>
   <div class="grid-item container28791835">
    <div class="form28791839">
     <Form  :initialValues="initialValues28791839" :resolver="resolver28791839"  :validateOnBlur="true" @submit="onFormSubmit28791839" v-slot="$form28791839">
      <div class="inputform28791839">
       <label class="label28791839" for="input128791839">
       </label>
       <br/>
       <InputText  fluid  id="input128791839" name="input128791839" placeholder="Passwod" type="text">
       </InputText>
       <Message severity="error" size="small" v-if="$form28791839.input128791839?.invalid" variant="simple">
        {{$form28791839.input128791839?.error.message}}
       </Message>
      </div>
      <div class="inputform28791839">
       <label class="label28791839" for="input228791839">
       </label>
       <br/>
       <InputText  fluid  id="input228791839" name="input228791839" placeholder="Email or Phone Number" type="text">
       </InputText>
       <Message severity="error" size="small" v-if="$form28791839.input228791839?.invalid" variant="simple">
        {{$form28791839.input228791839?.error.message}}
       </Message>
      </div>
      <div class="inputform28791839">
       <label class="label28791839" for="input328791839">
       </label>
       <br/>
       <InputText  fluid  id="input328791839" name="input328791839" placeholder="Name" type="text">
       </InputText>
       <Message severity="error" size="small" v-if="$form28791839.input328791839?.invalid" variant="simple">
        {{$form28791839.input328791839?.error.message}}
       </Message>
      </div>
      <button class="submitbtnform28791839" label="Submit" type="submit">
       Create Account
      </button>
     </Form>
    </div>
    <div class="grid-item container28892899">
     <div class="grid-item container28892900">
      <div class="grid-item container28892901">
       <img alt="container28892902" class="grid-item container28892902" src="/Vector28892902.svg"/>
       <img alt="container28892903" class="grid-item container28892903" src="/Vector28892903.svg"/>
       <img alt="container28892904" class="grid-item container28892904" src="/Vector28892904.svg"/>
       <img alt="container28892905" class="grid-item container28892905" src="/Vector28892905.svg"/>
      </div>
      <p class="grid-item text28892906">
       Sign up with Google
      </p>
     </div>
    </div>
   </div>
   <p class="grid-item text28791840">
    Already have account?
   </p>
   <div class="grid-item container28791841">
    <a class="grid-item text28791842" href="/LogInPage" v-on:click="gotoLogInPage()">
     Log in
    </a>
    <div class="grid-item container28791843">
     <div class="grid-item line28791844">
     </div>
    </div>
   </div>
  </div>
 </div>
 <Topheader class="grid-item-28791845 component28791845"></Topheader>
 <Line3 class="grid-item-28791846 component28791846"></Line3>
 <Footer class="grid-item-28791847 component28791847"></Footer>
 <Header class="grid-item-28791848 component28791848"></Header>
</div>

</template>

<script>
import Header from '@/components/Header.vue';
import Line3 from '@/components/Line3.vue';
import Footer from '@/components/Footer.vue';
import Topheader from '@/components/Topheader.vue';
import { useToastStore } from "@/stores/toast";;
import { ref } from 'vue';
export default {
    components:{
        Header,
        Line3,
        Footer,
        Topheader
    },
    data(){
        return {
            inputsearch2879798:"",
            inputsearch2879871:""    
                
        }
    },
    setup(){

        const initialValues28791839 = ref({
           input128791839: '',
           input228791839: '',
           input328791839: '',
        });
    
        const resolver28791839 = ({ values }) => {
            const errors = {};
            if (!values.input128791839){
                errors.input128791839 = [{ message: 'Passwod is required.'}];
            }
        
            if (!values.input228791839){
                errors.input228791839 = [{ message: 'Email or Phone Number is required.'}];
            }
        
            if (!values.input328791839){
                errors.input328791839 = [{ message: 'Name is required.'}];
            }
        
       
            return {
                errors
            };
        };
    

        return {
            initialValues28791839,
            resolver28791839,
          }
	},methods:{
onFormSubmit28791839(data) {
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
        gotoLogInPage(){
            this.$router.push({path:"/loginpage"});
        },
        gotoAccountPage(){
            this.$router.push({path:"/accountpage"});
        },
        gotoCartPage(){
            this.$router.push({path:"/cartpage"});
        },
        gotoWishlistPage(){
            this.$router.push({path:"/wishlistpage"});
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
        }
	}
}
</script>
<style lang="css" scoped>
@import '../assets/signuppage.css';
</style>