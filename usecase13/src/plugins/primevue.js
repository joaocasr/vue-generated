import PrimeVue from 'primevue/config';
import Material from '@primevue/themes/material';
import 'primeicons/primeicons.css';
import DatePicker from 'primevue/datepicker';


export default function usePrimeVue(app){
    
    app.use(PrimeVue, {
      theme: {
        preset: Material
    }
    });
  
app.component('DatePicker',DatePicker)

}
