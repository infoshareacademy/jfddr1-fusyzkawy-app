import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDrPKIFpngN5EJknNKwFugpN7ZZZWtAg1k",
  authDomain: "krabapp-bfc2a.firebaseapp.com",
  databaseURL: "https://krabapp-bfc2a.firebaseio.com",
  projectId: "krabapp-bfc2a",
  storageBucket: "krabapp-bfc2a.appspot.com",
  messagingSenderId: "605709542526",
  appId: "1:605709542526:web:95dafc859a16480a7b642f",
};

firebase.initializeApp(firebaseConfig);
export default firebase;
