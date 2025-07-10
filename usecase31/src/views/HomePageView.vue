<template>
<div class="grid-container">
 <div class="scheckbox30531617">
  <div :key="box.key" v-for="box of boxes30531617">
   <Checkbox :inputid="box.key" :value="box.name" name="box" v-model="selectedCategories">
   </Checkbox>
   <label :for="box.key" class="labelscheckbox30531617">
    {{ box.name }}
   </label>
  </div>
 </div>
 <DatePicker :showonfocus="false" class="sdatepicker30531630"  showIcon fluid  v-model="datepicker30531630">
 </DatePicker>
 <v-select :items="allOptionValues30531636" :single-line="true" class="grid-item svueselect30531636" label="My Dropdown Filter" v-model="selectedOption30531636">
 </v-select>
 <div class="form30531700">
  <Form  :initialValues="initialValues30531700" :resolver="resolver30531700"  :validateOnBlur="true" @submit="onFormSubmit30531700" v-slot="$form30531700">
   <div class="inputform30531700">
    <label class="label30531700" for="input130531700">
    </label>
    <br/>
    <InputText  fluid  id="input130531700" name="input130531700" placeholder="Email" type="text">
    </InputText>
    <Message severity="error" size="small" v-if="$form30531700.input130531700?.invalid" variant="simple">
     {{$form30531700.input130531700?.error.message}}
    </Message>
   </div>
   <div class="inputform30531700">
    <label class="label30531700" for="input230531700">
    </label>
    <br/>
    <InputText  fluid  id="input230531700" name="input230531700" placeholder="Password" type="text">
    </InputText>
    <Message severity="error" size="small" v-if="$form30531700.input230531700?.invalid" variant="simple">
     {{$form30531700.input230531700?.error.message}}
    </Message>
   </div>
   <div class="inputform30531700">
    <label class="label30531700" for="input330531700">
    </label>
    <br/>
    <InputText  fluid  id="input330531700" name="input330531700" placeholder="Username" type="text">
    </InputText>
    <Message severity="error" size="small" v-if="$form30531700.input330531700?.invalid" variant="simple">
     {{$form30531700.input330531700?.error.message}}
    </Message>
   </div>
   <button class="submitbtnform30531700" label="Submit" type="submit">
    Login
   </button>
  </Form>
 </div>
 <IconField class="ssearchinputfilter30531709">
  <InputIcon class="pi pi-search">
  </InputIcon>
  <InputText placeholder="Search . . ." v-model="inputsearch30531709">
  </InputText>
 </IconField>
 <v-rating :length="5" :model-value="starsSeletec30531712" :size="25" class="srating30531712" half-increments="" hover="">
 </v-rating>
 <DataTable :rows="4" :value="tablevalues30531779" class="stable30531779">
  <Column field="Quantity" header="Quantity" style="width: 25%">
  </Column>
  <Column field="Category" header="Category" style="width: 25%">
  </Column>
  <Column field="Name" header="Name" style="width: 25%">
  </Column>
  <Column field="Code" header="Code" style="width: 25%">
  </Column>
 </DataTable>
 <v-rating :length="5" :model-value="starsSeletec30531845" :size="25" class="srating30531845" half-increments="" hover="">
 </v-rating>
 <Slider class="sslider30631926" v-model="slider30631926">
 </Slider>
 <div class="scheckbox30752404">
  <div :key="box.key" v-for="box of boxes30752404">
   <Checkbox :inputid="box.key" :value="box.name" name="box" v-model="selectedCategories">
   </Checkbox>
   <label :for="box.key" class="labelscheckbox30752404">
    {{ box.name }}
   </label>
  </div>
 </div>
 <div class="scheckbox30752417">
  <div :key="box.key" v-for="box of boxes30752417">
   <Checkbox :inputid="box.key" :value="box.name" name="box" v-model="selectedCategories">
   </Checkbox>
   <label :for="box.key" class="labelscheckbox30752417">
    {{ box.name }}
   </label>
  </div>
 </div>
 <IconField class="ssearchinputfilter30752429">
  <InputIcon class="pi pi-search">
  </InputIcon>
  <InputText placeholder="Search . . ." v-model="inputsearch30752429">
  </InputText>
 </IconField>
 <Slider class="sslider30752577" v-model="slider30752577">
 </Slider>
 <div class="form30753041">
  <Form  :initialValues="initialValues30753041" :resolver="resolver30753041"  :validateOnBlur="true" @submit="onFormSubmit30753041" v-slot="$form30753041">
   <div class="inputform30753041">
    <label class="label30753041" for="input130753041">
     Email Address
    </label>
    <br/>
    <InputText  fluid  id="input130753041" name="input130753041" placeholder="Email Address" type="text">
    </InputText>
    <Message severity="error" size="small" v-if="$form30753041.input130753041?.invalid" variant="simple">
     {{$form30753041.input130753041?.error.message}}
    </Message>
   </div>
   <div class="inputform30753041">
    <label class="label30753041" for="input230753041">
     Phone Number
    </label>
    <br/>
    <InputText  fluid  id="input230753041" name="input230753041" placeholder="Phone Number" type="text">
    </InputText>
    <Message severity="error" size="small" v-if="$form30753041.input230753041?.invalid" variant="simple">
     {{$form30753041.input230753041?.error.message}}
    </Message>
   </div>
   <div class="inputform30753041">
    <label class="label30753041" for="input330753041">
     Town/City
    </label>
    <br/>
    <InputText  fluid  id="input330753041" name="input330753041" placeholder="Town/City" type="text">
    </InputText>
    <Message severity="error" size="small" v-if="$form30753041.input330753041?.invalid" variant="simple">
     {{$form30753041.input330753041?.error.message}}
    </Message>
   </div>
   <div class="inputform30753041">
    <label class="label30753041" for="input430753041">
     Apartment, floor, etc. (optional)
    </label>
    <br/>
    <InputText  fluid  id="input430753041" name="input430753041" placeholder="Street Adress" type="text">
    </InputText>
    <Message severity="error" size="small" v-if="$form30753041.input430753041?.invalid" variant="simple">
     {{$form30753041.input430753041?.error.message}}
    </Message>
   </div>
   <div class="inputform30753041">
    <label class="label30753041" for="input530753041">
     Street Adress
    </label>
    <br/>
    <InputText  fluid  id="input530753041" name="input530753041" placeholder="Street Adress" type="text">
    </InputText>
    <Message severity="error" size="small" v-if="$form30753041.input530753041?.invalid" variant="simple">
     {{$form30753041.input530753041?.error.message}}
    </Message>
   </div>
   <div class="inputform30753041">
    <label class="label30753041" for="input630753041">
     Company Name
    </label>
    <br/>
    <InputText  fluid  id="input630753041" name="input630753041" placeholder="Company Name" type="text">
    </InputText>
    <Message severity="error" size="small" v-if="$form30753041.input630753041?.invalid" variant="simple">
     {{$form30753041.input630753041?.error.message}}
    </Message>
   </div>
   <div class="inputform30753041">
    <label class="label30753041" for="input730753041">
     First Name
    </label>
    <br/>
    <InputText  fluid  id="input730753041" name="input730753041" placeholder="Username" type="text">
    </InputText>
    <Message severity="error" size="small" v-if="$form30753041.input730753041?.invalid" variant="simple">
     {{$form30753041.input730753041?.error.message}}
    </Message>
   </div>
   <button class="submitbtnform30753041" label="Submit" type="submit">
    Place Order
   </button>
  </Form>
 </div>
 <div class="form30753072">
  <Form  :initialValues="initialValues30753072" :resolver="resolver30753072"  :validateOnBlur="true" @submit="onFormSubmit30753072" v-slot="$form30753072">
   <div class="inputform30753072">
    <label class="label30753072" for="input130753072">
    </label>
    <br/>
    <InputText  fluid  id="input130753072" name="input130753072" placeholder="Password" type="text">
    </InputText>
    <Message severity="error" size="small" v-if="$form30753072.input130753072?.invalid" variant="simple">
     {{$form30753072.input130753072?.error.message}}
    </Message>
   </div>
   <div class="inputform30753072">
    <label class="label30753072" for="input230753072">
    </label>
    <br/>
    <InputText  fluid  id="input230753072" name="input230753072" placeholder="Username" type="text">
    </InputText>
    <Message severity="error" size="small" v-if="$form30753072.input230753072?.invalid" variant="simple">
     {{$form30753072.input230753072?.error.message}}
    </Message>
   </div>
   <button class="submitbtnform30753072" label="Submit" type="submit">
    Login
   </button>
  </Form>
 </div>
 <v-rating :length="5" :model-value="starsSeletec31052322" :size="25" class="srating31052322" half-increments="" hover="">
 </v-rating>
 <v-rating :length="5" :model-value="starsSeletec31052363" :size="25" class="srating31052363" half-increments="" hover="">
 </v-rating>
 <v-rating :length="5" :model-value="starsSeletec31052404" :size="25" class="srating31052404" half-increments="" hover="">
 </v-rating>
 <v-rating :length="5" :model-value="starsSeletec31052445" :size="25" class="srating31052445" half-increments="" hover="">
 </v-rating>
</div>

</template>

<script>
import { useToastStore } from "@/stores/toast";;
import { ref } from 'vue';
export default {

    data(){
        return {
            boxes30531617:[],
            boxesValues30531617:[{'name': 'Romance', 'key': 'Checkbox'}, {'name': 'Horror', 'key': 'Checkbox'}, {'name': 'Sci-fi', 'key': 'Checkbox'}, {'name': 'Comedy', 'key': 'Checkbox'}],
            selectedBoxes30531617:[],
            datepicker30531630:"",
            selectedOption30531636:"",
            allOptions30531636:[{'label': 'Option 1', 'value': 'Label1'}, {'label': 'Option 2', 'value': 'Label2'}, {'label': 'Option 3', 'value': 'Label3'}, {'label': 'Option 4', 'value': 'Label4'}, {'label': 'Option 5', 'value': 'Label5'}],
            allOptionValues30531636:[],
            inputsearch30531709:"",
            starsSeletec30531712:"3",
            tablevalues30531779:[],
            starsSeletec30531845:"1",
            slider30631926:0,
            boxes30752404:[],
            boxesValues30752404:[{'name': 'Romance', 'key': 'Checkbox'}, {'name': 'Horror', 'key': 'Checkbox'}, {'name': 'Sci-fi', 'key': 'Checkbox'}, {'name': 'Comedy', 'key': 'Checkbox'}],
            selectedBoxes30752404:[],
            boxes30752417:[],
            boxesValues30752417:[{'name': 'Remember Me', 'key': 'Checkbox'}],
            selectedBoxes30752417:[],
            inputsearch30752429:"",
            slider30752577:100,
            starsSeletec31052322:"4",
            starsSeletec31052363:"2",
            starsSeletec31052404:"5",
            starsSeletec31052445:"2"    
                
        }
    },
    methods:{
        getCheckboxOptions30531617(){
            /*Here you can adapt to fetch the data from an API*/
            this.boxes30531617 = this.boxesValues30531617;
        },
        getDropdownOptions30531636(){
            /*Here you can adapt to fetch the data from an API*/
            this.allOptionValues30531636 = this.allOptions30531636.map(x => x.value);
        },
onFormSubmit30531700(data) {
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
		getDatatableValues30531779(){
            this.tablevalues30531779 = [{'Quantity': '24', 'Category': 'Clothing', 'Name': 'Blue T-Shirt', 'Code': 'f230fh0g3'}, {'Quantity': '22', 'Category': 'Accessories', 'Name': 'Black Watch', 'Code': 'f230fh0g3'}, {'Quantity': '2', 'Category': 'Accessories', 'Name': 'Bamboo Watch', 'Code': 'f230fh0g3'}, {'Quantity': '12', 'Category': 'Fitness', 'Name': 'Blue Band', 'Code': 'f230fh0g3'}];
        },
        getCheckboxOptions30752404(){
            /*Here you can adapt to fetch the data from an API*/
            this.boxes30752404 = this.boxesValues30752404;
        },
        getCheckboxOptions30752417(){
            /*Here you can adapt to fetch the data from an API*/
            this.boxes30752417 = this.boxesValues30752417;
        },
onFormSubmit30753041(data) {
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
onFormSubmit30753072(data) {
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
    
	},mounted(){
          this.getCheckboxOptions30531617();

          this.getDropdownOptions30531636();

          this.getDatatableValues30531779();

          this.getCheckboxOptions30752404();

          this.getCheckboxOptions30752417();
	},setup(){

        const initialValues30531700 = ref({
           input130531700: '',
           input230531700: '',
           input330531700: '',
        });
    
        const resolver30531700 = ({ values }) => {
            const errors = {};
            /*Here you can adapt the code to check if the input text fulfills some criteria and show the error message. */
            if (!values.input130531700){
                errors.input130531700 = [{ message: 'Email is required.'}];
            }
        
            if (!values.input230531700){
                errors.input230531700 = [{ message: 'Password is required.'}];
            }
        
            if (!values.input330531700){
                errors.input330531700 = [{ message: 'Username is required.'}];
            }
        
       
            return {
                errors
            };
        };
    


        const initialValues30753041 = ref({
           input130753041: '',
           input230753041: '',
           input330753041: '',
           input430753041: '',
           input530753041: '',
           input630753041: '',
           input730753041: '',
        });
    
        const resolver30753041 = ({ values }) => {
            const errors = {};
            /*Here you can adapt the code to check if the input text fulfills some criteria and show the error message. */
            if (!values.input130753041){
                errors.input130753041 = [{ message: 'Email Address is required.'}];
            }
        
            if (!values.input230753041){
                errors.input230753041 = [{ message: 'Phone Number is required.'}];
            }
        
            if (!values.input330753041){
                errors.input330753041 = [{ message: 'Town/City is required.'}];
            }
        
            if (!values.input430753041){
                errors.input430753041 = [{ message: 'Street Adress is required.'}];
            }
        
            if (!values.input530753041){
                errors.input530753041 = [{ message: 'Street Adress is required.'}];
            }
        
            if (!values.input630753041){
                errors.input630753041 = [{ message: 'Company Name is required.'}];
            }
        
            if (!values.input730753041){
                errors.input730753041 = [{ message: 'Username is required.'}];
            }
        
       
            return {
                errors
            };
        };
    


        const initialValues30753072 = ref({
           input130753072: '',
           input230753072: '',
        });
    
        const resolver30753072 = ({ values }) => {
            const errors = {};
            /*Here you can adapt the code to check if the input text fulfills some criteria and show the error message. */
            if (!values.input130753072){
                errors.input130753072 = [{ message: 'Password is required.'}];
            }
        
            if (!values.input230753072){
                errors.input230753072 = [{ message: 'Username is required.'}];
            }
        
       
            return {
                errors
            };
        };
    

        return {
            initialValues30531700,
            resolver30531700,
            initialValues30753041,
            resolver30753041,
            initialValues30753072,
            resolver30753072,
          }
	},watch:{
slider30631926(newvalue,oldvalue){
            const toastStore = useToastStore();
            let message = "Slider value: "+newvalue            
            /* Here we are displaying the value changed from the Slider component into the Toast from our toast pinia store.*/   
            toastStore.showInfo(message);
        }
,
slider30752577(newvalue,oldvalue){
            const toastStore = useToastStore();
            let message = "Slider value: "+newvalue            
            /* Here we are displaying the value changed from the Slider component into the Toast from our toast pinia store.*/   
            toastStore.showInfo(message);
        }

	}
}
</script>
<style lang="css" scoped>
@import '../assets/homepage.css';
</style>