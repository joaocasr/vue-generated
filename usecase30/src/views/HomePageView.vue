<template>
<div class="grid-container">
 <div class="scheckbox30531613">
  <div :key="box.key" v-for="box of boxes30531613">
   <Checkbox :inputid="box.key" :value="box.name" name="box" v-model="selectedCategories">
   </Checkbox>
   <label :for="box.key" class="labelscheckbox30531613">
    {{ box.name }}
   </label>
  </div>
 </div>
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
    <InputText  fluid  id="input130531700" name="input130531700" placeholder="Password" type="text">
    </InputText>
    <Message severity="error" size="small" v-if="$form30531700.input130531700?.invalid" variant="simple">
     {{$form30531700.input130531700?.error.message}}
    </Message>
   </div>
   <div class="inputform30531700">
    <label class="label30531700" for="input230531700">
    </label>
    <br/>
    <InputText  fluid  id="input230531700" name="input230531700" placeholder="Username" type="text">
    </InputText>
    <Message severity="error" size="small" v-if="$form30531700.input230531700?.invalid" variant="simple">
     {{$form30531700.input230531700?.error.message}}
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
</div>

</template>

<script>
import { ref } from 'vue';
import { useToastStore } from "@/stores/toast";;
export default {

    data(){
        return {
            boxes30531613:[],
            boxesValues30531613:[{'name': 'Remember Me', 'key': 'Checkbox'}],
            selectedBoxes30531613:[],
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
            starsSeletec30531845:"1"    
                
        }
    },
    methods:{
        getCheckboxOptions30531613(){
            /*Here you can adapt to fetch the data from an API*/
            this.boxes30531613 = this.boxesValues30531613;
        },
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
		getDatatableValues30531779(){
            this.tablevalues30531779 = [{'Quantity': '24', 'Category': 'Clothing', 'Name': 'Blue T-Shirt', 'Code': 'f230fh0g3'}, {'Quantity': '22', 'Category': 'Accessories', 'Name': 'Black Watch', 'Code': 'f230fh0g3'}, {'Quantity': '2', 'Category': 'Accessories', 'Name': 'Bamboo Watch', 'Code': 'f230fh0g3'}, {'Quantity': '12', 'Category': 'Fitness', 'Name': 'Blue Band', 'Code': 'f230fh0g3'}];
        }
	},mounted(){
          this.getCheckboxOptions30531613();

          this.getCheckboxOptions30531617();

          this.getDropdownOptions30531636();

          this.getDatatableValues30531779();
	},setup(){

        const initialValues30531700 = ref({
           input130531700: '',
           input230531700: '',
        });
    
        const resolver30531700 = ({ values }) => {
            const errors = {};
            if (!values.input130531700){
                errors.input130531700 = [{ message: 'Password is required.'}];
            }
        
            if (!values.input230531700){
                errors.input230531700 = [{ message: 'Username is required.'}];
            }
        
       
            return {
                errors
            };
        };
    

        return {
            initialValues30531700,
            resolver30531700,
          }
	}
}
</script>
<style lang="css" scoped>
@import '../assets/homepage.css';
</style>