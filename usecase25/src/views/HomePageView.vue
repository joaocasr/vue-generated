<template>
<div class="grid-container">
 <Container class="grid-item-29334664 component29334664"></Container>
</div>

</template>

<script>
import Container from '@/components/Container.vue';
import { ref } from 'vue';
import { useToastStore } from "@/stores/toast";;
export default {
    components:{
        Container
    },
    data(){
        return {
            tablevalues29334432:[],
            datepicker29334312:"",
            boxes29334318:[],
            boxesValues29334318:[{'name': 'Romance', 'key': 'Checkbox'}, {'name': 'Horror', 'key': 'Checkbox'}, {'name': 'Sci-fi', 'key': 'Checkbox'}, {'name': 'Comedy', 'key': 'Checkbox'}],
            selectedBoxes29334318:[],
            selectedOption29334331:"",
            allOptions29334331:[{'label': 'Option 1', 'value': 'Label1'}, {'label': 'Option 2', 'value': 'Label2'}, {'label': 'Option 3', 'value': 'Label3'}, {'label': 'Option 4', 'value': 'Label4'}, {'label': 'Option 5', 'value': 'Label5'}],
            allOptionValues29334331:[],
            slider29334404:0    
                
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
@import '../assets/homepage.css';
</style>