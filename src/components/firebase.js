import firebase from '@firebase/app'
import 'firebase/firestore'
import 'firebase/firebase-auth'
import 'firebase/storage'
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCszi6ZkSzjqzKeZloB8UvlfWYHZCDlhuo",
    authDomain: "e-commerce-site-3ed3a.firebaseapp.com",
    databaseURL: "https://e-commerce-site-3ed3a.firebaseio.com",
    projectId: "e-commerce-site-3ed3a",
    storageBucket: "e-commerce-site-3ed3a.appspot.com",
    messagingSenderId: "463781313489",
    appId: "1:463781313489:web:866d8fe8621fce8d51fef0"
  };
  
const fb = firebase.initializeApp(config);

const db = firebase.firestore();

export {fb,db}