<template>
<div>
 <DataTable :rows="4" :value="tablevalues29334432" class="stable29334432">
  <Column field="Quantity" header="Quantity" style="width: 25%">
  </Column>
  <Column field="Category" header="Category" style="width: 25%">
  </Column>
  <Column field="Name" header="Name" style="width: 25%">
  </Column>
  <Column field="Code" header="Code" style="width: 25%">
  </Column>
 </DataTable>
 <DatePicker :showonfocus="false" class="sdatepicker29334312"  showIcon fluid  v-model="datepicker29334312">
 </DatePicker>
 <div class="scheckbox29334318">
  <div :key="box.key" v-for="box of boxes29334318">
   <Checkbox :inputid="box.key" :value="box.name" name="box" v-model="selectedCategories">
   </Checkbox>
   <label :for="box.key" class="labelscheckbox29334318">
    {{ box.name }}
   </label>
  </div>
 </div>
 <v-select :items="allOptionValues29334331" :single-line="true" class="grid-item svueselect29334331" label="My Dropdown Filter" v-model="selectedOption29334331">
 </v-select>
 <div class="form29334395">
  <Form  :initialValues="initialValues29334395" :resolver="resolver29334395"  :validateOnBlur="true" @submit="onFormSubmit29334395" v-slot="$form29334395">
   <div class="inputform29334395">
    <label class="label29334395" for="input129334395">
    </label>
    <br/>
    <InputText  fluid  id="input129334395" name="input129334395" placeholder="Password" type="text">
    </InputText>
    <Message severity="error" size="small" v-if="$form29334395.input129334395?.invalid" variant="simple">
     {{$form29334395.input129334395?.error.message}}
    </Message>
   </div>
   <div class="inputform29334395">
    <label class="label29334395" for="input229334395">
    </label>
    <br/>
    <InputText  fluid  id="input229334395" name="input229334395" placeholder="Username" type="text">
    </InputText>
    <Message severity="error" size="small" v-if="$form29334395.input229334395?.invalid" variant="simple">
     {{$form29334395.input229334395?.error.message}}
    </Message>
   </div>
   <button class="submitbtnform29334395" label="Submit" type="submit">
    Login
   </button>
  </Form>
 </div>
 <Slider class="sslider29334404" v-model="slider29334404">
 </Slider>
</div>

</template>
    
<script>
import { ref } from 'vue';
import { useToastStore } from "@/stores/toast";;
export default {

    data(){
        return {
           
        }
    },
    methods:{
		getDatatableValues29334432(){
            this.tablevalues29334432 = [{'Quantity': '24', 'Category': 'Clothing', 'Name': 'Blue T-Shirt', 'Code': 'f230fh0g3'}, {'Quantity': '22', 'Category': 'Accessories', 'Name': 'Black Watch', 'Code': 'f230fh0g3'}, {'Quantity': '2', 'Category': 'Accessories', 'Name': 'Bamboo Watch', 'Code': 'f230fh0g3'}, {'Quantity': '12', 'Category': 'Fitness', 'Name': 'Blue Band', 'Code': 'f230fh0g3'}];
        },
        getCheckboxOptions29334318(){
            /*Here you can adapt to fetch the data from an API*/
            this.boxes29334318 = this.boxesValues29334318;
        },
        getDropdownOptions29334331(){
            /*Here you can adapt to fetch the data from an API*/
            this.allOptionValues29334331 = this.allOptions29334331.map(x => x.value);
        },
onFormSubmit29334395(data) {
        const toastStore = useToastStore();
        let message = ""
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
          this.getDatatableValues29334432();

          this.getCheckboxOptions29334318();

          this.getDropdownOptions29334331();
	},setup(){

        const initialValues29334395 = ref({
           input129334395: '',
           input229334395: '',
        });
    
        const resolver29334395 = ({ values }) => {
            const errors = {};
            if (!values.input129334395){
                errors.input129334395 = [{ message: 'Password is required.'}];
            }
        
            if (!values.input229334395){
                errors.input229334395 = [{ message: 'Username is required.'}];
            }
        
       
            return {
                errors
            };
        };
    

        return {
            initialValues29334395,
            resolver29334395,
          }
	},watch:{
slider29334404(newvalue,oldvalue){
            const toastStore = useToastStore();
            let message = "Slider value: "+newvalue            
            toastStore.showInfo(message);   
        }

	}
}
</script>
<style lang="css" scoped>
@import '../assets/container.css';
</style>