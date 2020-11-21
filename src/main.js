import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import firebase from 'firebase'
import './assets/NavbarCss.css' 
import 'bootstrap/dist/css/bootstrap.min.css'
import 'popper.js';
import  'jquery';

 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyCszi6ZkSzjqzKeZloB8UvlfWYHZCDlhuo",
    authDomain: "e-commerce-site-3ed3a.firebaseapp.com",
    databaseURL: "https://e-commerce-site-3ed3a.firebaseio.com",
    projectId: "e-commerce-site-3ed3a",
    storageBucket: "e-commerce-site-3ed3a.appspot.com",
    messagingSenderId: "463781313489",
    appId: "1:463781313489:web:866d8fe8621fce8d51fef0"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

createApp(App).use(router).mount('#app')
