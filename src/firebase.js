import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCy2CebgtprXGnLI5iVsaHp1YnWGCEagfQ",
  authDomain: "clone-b23c3.firebaseapp.com",
  databaseURL: "https://clone-b23c3.firebaseio.com",
  projectId: "clone-b23c3",
  storageBucket: "clone-b23c3.appspot.com",
  messagingSenderId: "459848164015",
  appId: "1:459848164015:web:6db659e0fe94873c7d2a5a",
  measurementId: "G-8MMNNL4Z0Q"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };