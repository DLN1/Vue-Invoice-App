import firebase from "firebase/app";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyBbTyQe3CAAwbFWUwg5tbFACEzDaBsWURc",
  authDomain: "invoice-app-e4c26.firebaseapp.com",
  projectId: "invoice-app-e4c26",
  storageBucket: "invoice-app-e4c26.appspot.com",
  messagingSenderId: "593399458852",
  appId: "1:593399458852:web:59b4d0105b3330b2327cb1",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp.firestore();
