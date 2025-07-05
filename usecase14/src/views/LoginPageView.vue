<template>
<div class="grid-container">
 <Footer class="grid-item-27703034 component27703034"></Footer>
 <img alt="container27703035" class="grid-item container27703035" src="/photo14895998499272ee91cede3ba127703035.png"/>
 <img alt="container27703036" class="grid-item container27703036" src="/27703036.png"/>
 <div class="grid-item container27703037">
  <div class="form27703038">
   <Form  :initialValues="initialValues27703038" :resolver="resolver27703038"  :validateOnBlur="true" @submit="onFormSubmit27703038" v-slot="$form27703038">
    <div class="inputform27703038">
     <label class="label27703038" for="input127703038">
      Password
     </label>
     <br/>
     <InputText  fluid  id="input127703038" name="input127703038" placeholder="Password" type="text">
     </InputText>
     <Message severity="error" size="small" v-if="$form27703038.input127703038?.invalid" variant="simple">
      {{$form27703038.input127703038?.error.message}}
     </Message>
    </div>
    <div class="inputform27703038">
     <label class="label27703038" for="input227703038">
      Username
     </label>
     <br/>
     <InputText  fluid  id="input227703038" name="input227703038" placeholder="Username" type="text">
     </InputText>
     <Message severity="error" size="small" v-if="$form27703038.input227703038?.invalid" variant="simple">
      {{$form27703038.input227703038?.error.message}}
     </Message>
    </div>
    <button class="submitbtnform27703038" label="Submit" type="submit">
     Login
    </button>
   </Form>
  </div>
  <div class="scheckbox27703039">
   <div :key="box.key" v-for="box of boxes27703039">
    <Checkbox :inputid="box.key" :value="box.name" name="box" v-model="selectedCategories">
    </Checkbox>
    <label :for="box.key" class="labelscheckbox27703039">
     {{ box.name }}
    </label>
   </div>
  </div>
 </div>
 <Navbar class="grid-item-27703040 component27703040 posnavbar"></Navbar>
</div>

</template>

<script>
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';
import { ref } from 'vue';
import { useToastStore } from "@/stores/toast";;
export default {
    components:{
        Navbar,
        Footer
    },
    data(){
        return {
            boxes27703039:[],
            boxesValues27703039:[{'name': 'Remember Me', 'key': 'Checkbox'}],
            selectedBoxes27703039:[],
            menuoptions27702922:[{'option': 'Login', 'destination': '2770:3033'}, {'option': 'Sign Up'}]    
                
        }
    },
    setup(){

        const initialValues27703038 = ref({
           input127703038: '',
           input227703038: '',
        });
    
        const resolver27703038 = ({ values }) => {
            const errors = {};
            if (!values.input127703038){
                errors.input127703038 = [{ message: 'Password is required.'}];
            }
        
            if (!values.input227703038){
                errors.input227703038 = [{ message: 'Username is required.'}];
            }
        
       
            return {
                errors
            };
        };
    

        return {
            initialValues27703038,
            resolver27703038,
          }
	},methods:{
onFormSubmit27703038(data) {
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
        getCheckboxOptions27703039(){
            /*Here you can adapt to fetch the data from an API*/
            this.boxes27703039 = this.boxesValues27703039;
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
	},mounted(){
          this.getCheckboxOptions27703039();
	}
}
</script>
<style lang="css" scoped>
@import '../assets/loginpage.css';
</style>