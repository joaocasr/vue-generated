<template>
<div class="grid-container">
 <Footer class="grid-item-3367410 component3367410"></Footer>
 <img alt="container3367411" class="grid-item container3367411" src="/photo14895998499272ee91cede3ba13367411.png"/>
 <img alt="container3367412" class="grid-item container3367412" src="/3367412.png"/>
 <div class="grid-item container3367413">
  <div class="form3367414">
   <Form  :initialValues="initialValues3367414" :resolver="resolver3367414"  :validateOnBlur="true" @submit="onFormSubmit3367414" v-slot="$form3367414">
    <div class="inputform3367414">
     <label class="label3367414" for="input13367414">
      Password
     </label>
     <br/>
     <InputText  fluid  id="input13367414" name="input13367414" placeholder="Password" type="text">
     </InputText>
     <Message severity="error" size="small" v-if="$form3367414.input13367414?.invalid" variant="simple">
      {{$form3367414.input13367414?.error.message}}
     </Message>
    </div>
    <div class="inputform3367414">
     <label class="label3367414" for="input23367414">
      Username
     </label>
     <br/>
     <InputText  fluid  id="input23367414" name="input23367414" placeholder="Username" type="text">
     </InputText>
     <Message severity="error" size="small" v-if="$form3367414.input23367414?.invalid" variant="simple">
      {{$form3367414.input23367414?.error.message}}
     </Message>
    </div>
    <button class="submitbtnform3367414" label="Submit" type="submit">
     Login
    </button>
   </Form>
  </div>
  <div class="scheckbox3367415">
   <div :key="box.key" v-for="box of boxes3367415">
    <Checkbox :inputid="box.key" :value="box.name" name="box" v-model="selectedCategories">
    </Checkbox>
    <label :for="box.key" class="labelscheckbox3367415">
     {{ box.name }}
    </label>
   </div>
  </div>
 </div>
 <Navbar class="grid-item-3367416 component3367416 posnavbar"></Navbar>
</div>

</template>

<script>
import Navbar from '@/components/Navbar.vue';
import Varianthome from '@/components/Varianthome.vue';
import Variantmovies from '@/components/Variantmovies.vue';
import Footer from '@/components/Footer.vue';
import Variantseries from '@/components/Variantseries.vue';
import { useToastStore } from "@/stores/toast";;
import { ref } from 'vue';
export default {
    components:{
        Navbar,
        Varianthome,
        Variantmovies,
        Footer,
        Variantseries
    },
    data(){
        return {
            boxes3367415:[],
            boxesValues3367415:[{'name': 'Remember Me', 'key': 'Checkbox'}],
            selectedBoxes3367415:[],
            menuoptions3367298:[{'option': 'Login', 'destination': '3367:409'}, {'option': 'Sign Up'}],
            componentclass33671262:"grid-item-33671262 component33671262",
            componentclass3367145:"grid-item-3367145 component3367145",
            componentclass33671333:"grid-item-33671333 component33671333",
            componentclass3367152:"grid-item-3367152 component3367152",
            componentclass33671416:"grid-item-33671416 component33671416",
            componentclass3367159:"grid-item-3367159 component3367159",
            selectedClass33671262:'',
            currentVariant33671262:'',
            selectedClass33671333:'',
            currentVariant33671333:'',
            selectedClass33671416:'',
            currentVariant33671416:''    
                
        }
    },
    setup(){

        const initialValues3367414 = ref({
           input13367414: '',
           input23367414: '',
        });
    
        const resolver3367414 = ({ values }) => {
            const errors = {};
            /*Here you can adapt the code to check if the input text fulfills some criteria and show the error message. */
            if (!values.input13367414){
                errors.input13367414 = [{ message: 'Password is required.'}];
            }
        
            if (!values.input23367414){
                errors.input23367414 = [{ message: 'Username is required.'}];
            }
        
       
            return {
                errors
            };
        };
    

        return {
            initialValues3367414,
            resolver3367414,
          }
	},methods:{
onFormSubmit3367414(data) {
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
        getCheckboxOptions3367415(){
            /*Here you can adapt to fetch the data from an API*/
            this.boxes3367415 = this.boxesValues3367415;
        },
        gotoHomePage(){
            this.$router.push({path:"/homepage"});
        },
        gotoWatchlistPage(){
            this.$router.push({path:"/watchlistpage"});
        },
        selectedItem3367298(){
               this.$router.push({path:"/loginpage"});

            },
		changeToHovered33671262(){
                this.selectedClass33671262=this.componentclass3367145;
                this.currentVariant33671262= 'homehomehoveryes'
    		},
		changeToDefault33671262(){
            this.selectedClass33671262=this.componentclass33671262;
            this.currentVariant33671262= 'homehomehoverno'
		},
		gotoHomePage(){
            if(this.selectedClass33671262==this.componentclass3367145){
                this.$router.push({path:"/homepage"});
            }
    	},
		changeToHovered33671333(){
                this.selectedClass33671333=this.componentclass3367152;
                this.currentVariant33671333= 'moviesmovieshoveryes'
    		},
		changeToDefault33671333(){
            this.selectedClass33671333=this.componentclass33671333;
            this.currentVariant33671333= 'moviesmovieshoverno'
		},
		changeToHovered33671416(){
                this.selectedClass33671416=this.componentclass3367159;
                this.currentVariant33671416= 'seriesserieshoveryes'
    		},
		changeToDefault33671416(){
            this.selectedClass33671416=this.componentclass33671416;
            this.currentVariant33671416= 'seriesserieshoverno'
		}
	},mounted(){
          this.getCheckboxOptions3367415();

          this.selectedClass33671262 = this.componentclass33671262;
          this.currentVariant33671262 = 'homehomehoverno';

          this.selectedClass33671333 = this.componentclass33671333;
          this.currentVariant33671333 = 'moviesmovieshoverno';

          this.selectedClass33671416 = this.componentclass33671416;
          this.currentVariant33671416 = 'seriesserieshoverno';
	}
}
</script>
<style lang="css" scoped>
@import '../assets/loginpage.css';
</style>