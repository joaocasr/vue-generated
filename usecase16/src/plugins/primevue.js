import PrimeVue from 'primevue/config';
import Material from '@primevue/themes/material';
import 'primeicons/primeicons.css';


export default function usePrimeVue(app){
    
    app.use(PrimeVue, {
      theme: {
        preset: Material
    }
    });
  
}
