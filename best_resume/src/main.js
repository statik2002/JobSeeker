import '@/assets/main.css'

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import "bootstrap-icons/font/bootstrap-icons.css"

import { createApp } from 'vue'
import App from './App.vue'
import components from '@/components'
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';

const app = createApp(App);

components.forEach(component => {
    app.component(component.name, component) 
 });

 app.component('VueDatePicker', VueDatePicker);

app
 .mount('#app')
