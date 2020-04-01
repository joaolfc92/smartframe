import firebase from 'firebase/app'

import 'firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyB5cmYFC97cC96NRAxXOs7DVVfRm5g2MHw",
    authDomain: "smartframejl.firebaseapp.com",
    databaseURL: "https://smartframejl.firebaseio.com",
    projectId: "smartframejl",
    storageBucket: "smartframejl.appspot.com",
    messagingSenderId: "903645298078",
    appId: "1:903645298078:web:7c04c9b237087c4c342a8f",
    measurementId: "G-197R3WEK0Q"
  };


firebase.initializeApp(firebaseConfig)

export default firebase
