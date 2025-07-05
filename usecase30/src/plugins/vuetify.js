import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import '@mdi/font/css/materialdesignicons.css';
import { VRating } from 'vuetify/components';
import { VSelect } from 'vuetify/components';

const vuetify = createVuetify({
components: {
	VRating,
VSelect
},
icons: {
defaultSet: 'mdi',
}
})

export default vuetify;
