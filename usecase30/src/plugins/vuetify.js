import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import '@mdi/font/css/materialdesignicons.css';
import { VSelect,VRating} from 'vuetify/components';

const vuetify = createVuetify({
    components: {  VSelect,
  VRating},
    icons: {
        defaultSet: 'mdi',
    }
})

export default vuetify;
