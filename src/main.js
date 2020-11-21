import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import './assets/NavbarCss.css' 
import 'bootstrap/dist/css/bootstrap.min.css'
import 'popper.js';
import  'jquery';
 

createApp(App).use(router).mount('#app')
