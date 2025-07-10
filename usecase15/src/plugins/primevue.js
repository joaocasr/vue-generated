import PrimeVue from 'primevue/config';
import Material from '@primevue/themes/material';
import 'primeicons/primeicons.css';
import { Form } from '@primevue/forms';
import InputText from 'primevue/inputtext';
import Message from 'primevue/message';
import Toast from 'primevue/toast';


export default function usePrimeVue(app){
    
    app.use(PrimeVue, {
      theme: {
        preset: Material
    }
    });
  
app.component('Form',Form)
app.component('InputText',InputText)
app.component('Message',Message)
app.component('Toast',Toast)

}
