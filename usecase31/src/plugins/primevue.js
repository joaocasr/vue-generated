import PrimeVue from 'primevue/config';
import Material from '@primevue/themes/material';
import 'primeicons/primeicons.css';
import DatePicker from 'primevue/datepicker';
import { Form } from '@primevue/forms';
import InputText from 'primevue/inputtext';
import Message from 'primevue/message';
import Toast from 'primevue/toast';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Slider from 'primevue/slider';


export default function usePrimeVue(app){
    
    app.use(PrimeVue, {
      theme: {
        preset: Material
    }
    });
  
app.component('DatePicker',DatePicker)
app.component('Form',Form)
app.component('InputText',InputText)
app.component('Message',Message)
app.component('Toast',Toast)
app.component('DataTable',DataTable)
app.component('Column',Column)
app.component('Slider',Slider)

}
