import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import '@mdi/font/css/materialdesignicons.css';
import { VRating,VMenu,VList,VListItem,VPagination} from 'vuetify/components';

const vuetify = createVuetify({
    components: {  VRating,
  VMenu,
  VList,
  VListItem,
  VPagination},
    icons: {
        defaultSet: 'mdi',
    }
})

export default vuetify;
