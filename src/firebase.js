import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCJZgQbZDGC8OOhNdYiu3cB2b5FXA-WX-4",
    authDomain: "clone-da72d.firebaseapp.com",
    databaseURL: "https://clone-da72d.firebaseio.com",
    projectId: "clone-da72d",
    storageBucket: "clone-da72d.appspot.com",
    messagingSenderId: "959060617419",
    appId: "1:959060617419:web:869e91050889cea752934e",
    measurementId: "G-93SKXX2WX1"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
