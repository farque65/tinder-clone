import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBoe5i9eM-JbdiHYuXl-jLo4PrBen1_PaY",
  authDomain: "tinder-clone-29825.firebaseapp.com",
  databaseURL: "https://tinder-clone-29825.firebaseio.com",
  projectId: "tinder-clone-29825",
  storageBucket: "tinder-clone-29825.appspot.com",
  messagingSenderId: "941848980620",
  appId: "1:941848980620:web:7575e9223aca49af419fa9",
  measurementId: "G-XHLB80ZP22"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.firestore();

export default database;