import './assets/main.css'

import{ createApp }from 'vue'
import{ createPinia }from 'pinia'
import ToastService from 'primevue/toastservice';
import vuetify from './plugins/vuetify';
import usePrimeVue from './plugins/primevue';

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(vuetify)
app.use(ToastService)
app.use(router)

usePrimeVue(app)

app.mount('#app')
