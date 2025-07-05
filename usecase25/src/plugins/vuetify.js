import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import '@mdi/font/css/materialdesignicons.css';
import { VSelect } from 'vuetify/components';

const vuetify = createVuetify({
components: {
	VSelect
},
icons: {
defaultSet: 'mdi',
}
})

export default vuetify;
