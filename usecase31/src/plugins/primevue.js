import PrimeVue from 'primevue/config';
import Material from '@primevue/themes/material';
import 'primeicons/primeicons.css';
import Slider from 'primevue/slider';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import InputIcon from 'primevue/inputicon';
import IconField from 'primevue/iconfield';
import Toast from 'primevue/toast';
import { Form } from '@primevue/forms';
import InputText from 'primevue/inputtext';
import Message from 'primevue/message';
import DatePicker from 'primevue/datepicker';
import Checkbox from 'primevue/checkbox';


export default function usePrimeVue(app){

app.use(PrimeVue, {
theme: {
preset: Material
}
});
app.component('Slider',Slider)
app.component('DataTable',DataTable)
app.component('Column',Column)
app.component('InputIcon',InputIcon)
app.component('IconField',IconField)
app.component('Toast',Toast);
app.component('Form',Form)
app.component('InputText',InputText)
app.component('Message',Message)
app.component('DatePicker',DatePicker)
app.component('Checkbox',Checkbox)

}
