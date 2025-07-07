<template>
<div class="grid-container">
 <div class="grid-item container28792546">
  <p class="grid-item text28792547">
   Home
  </p>
  <div class="grid-item line28792548">
  </div>
  <p class="grid-item text28792549">
   Cantact
  </p>
  <div class="grid-item line28792550">
  </div>
  <p class="grid-item text28792551">
   Nothing
  </p>
  <div class="grid-item line28792552">
  </div>
  <p class="grid-item text28792553">
   Nothing
  </p>
  <div class="grid-item line28792554">
  </div>
  <p class="grid-item text28792555">
   Nothing
  </p>
 </div>
 <div class="grid-item container28792556">
  <div class="grid-item container28792557">
   <div class="grid-item container28792558">
    <div class="grid-item container28792559">
     <div class="grid-item container28792560">
      <img alt="container28792561" class="grid-item container28792561" src="/Vector28792561.svg"/>
     </div>
     <p class="grid-item text28792562">
      Call To Us
     </p>
    </div>
    <div class="grid-item container28792563">
     <p class="grid-item text28792564">
      We are available 24/7, 7 days a week.
     </p>
     <p class="grid-item text28792565">
      Phone: +8801611112222
     </p>
    </div>
   </div>
   <div class="grid-item container28792566">
    <div class="grid-item line28792567">
    </div>
   </div>
   <div class="grid-item container28792568">
    <div class="grid-item container28792569">
     <div class="grid-item container28792570">
      <img alt="container28792571" class="grid-item container28792571" src="/Vector28792571.svg"/>
     </div>
     <p class="grid-item text28792572">
      Write To US
     </p>
    </div>
    <div class="grid-item container28792573">
     <p class="grid-item text28792574">
      Fill out our form and we will contact you within 24 hours.
     </p>
     <p class="grid-item text28792575">
      Emails: customer@exclusive.com
     </p>
     <p class="grid-item text28792576">
      Emails: support@exclusive.com
     </p>
    </div>
   </div>
  </div>
 </div>
 <Topheader class="grid-item-28792577 component28792577"></Topheader>
 <Line3 class="grid-item-28792578 component28792578"></Line3>
 <Header class="grid-item-28792579 component28792579"></Header>
 <Footer class="grid-item-28792580 component28792580"></Footer>
 <div class="form28792581">
  <Form  :initialValues="initialValues28792581" :resolver="resolver28792581"  :validateOnBlur="true" @submit="onFormSubmit28792581" v-slot="$form28792581">
   <div class="inputform28792581">
    <label class="label28792581" for="input128792581">
    </label>
    <br/>
    <InputText  fluid  id="input128792581" name="input128792581" placeholder="Your Message" type="text">
    </InputText>
    <Message severity="error" size="small" v-if="$form28792581.input128792581?.invalid" variant="simple">
     {{$form28792581.input128792581?.error.message}}
    </Message>
   </div>
   <div class="inputform28792581">
    <label class="label28792581" for="input228792581">
    </label>
    <br/>
    <InputText  fluid  id="input228792581" name="input228792581" placeholder="Your Phone" type="text">
    </InputText>
    <Message severity="error" size="small" v-if="$form28792581.input228792581?.invalid" variant="simple">
     {{$form28792581.input228792581?.error.message}}
    </Message>
   </div>
   <div class="inputform28792581">
    <label class="label28792581" for="input328792581">
    </label>
    <br/>
    <InputText  fluid  id="input328792581" name="input328792581" placeholder="Your Email" type="text">
    </InputText>
    <Message severity="error" size="small" v-if="$form28792581.input328792581?.invalid" variant="simple">
     {{$form28792581.input328792581?.error.message}}
    </Message>
   </div>
   <div class="inputform28792581">
    <label class="label28792581" for="input428792581">
    </label>
    <br/>
    <InputText  fluid  id="input428792581" name="input428792581" placeholder="Your Name" type="text">
    </InputText>
    <Message severity="error" size="small" v-if="$form28792581.input428792581?.invalid" variant="simple">
     {{$form28792581.input428792581?.error.message}}
    </Message>
   </div>
   <button class="submitbtnform28792581" label="Submit" type="submit">
    Send Message
   </button>
  </Form>
 </div>
</div>

</template>

<script>
import Topheader from '@/components/Topheader.vue';
import Header from '@/components/Header.vue';
import Line3 from '@/components/Line3.vue';
import Footer from '@/components/Footer.vue';
import { ref } from 'vue';
import { useToastStore } from "@/stores/toast";;
export default {
    components:{
        Topheader,
        Header,
        Line3,
        Footer
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
        },
onFormSubmit28792581(data) {
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
    
	},setup(){

        const initialValues28792581 = ref({
           input128792581: '',
           input228792581: '',
           input328792581: '',
           input428792581: '',
        });
    
        const resolver28792581 = ({ values }) => {
            const errors = {};
            if (!values.input128792581){
                errors.input128792581 = [{ message: 'Your Message is required.'}];
            }
        
            if (!values.input228792581){
                errors.input228792581 = [{ message: 'Your Phone is required.'}];
            }
        
            if (!values.input328792581){
                errors.input328792581 = [{ message: 'Your Email is required.'}];
            }
        
            if (!values.input428792581){
                errors.input428792581 = [{ message: 'Your Name is required.'}];
            }
        
       
            return {
                errors
            };
        };
    

        return {
            initialValues28792581,
            resolver28792581,
          }
	}
}
</script>
<style lang="css" scoped>
@import '../assets/contactpage.css';
</style>