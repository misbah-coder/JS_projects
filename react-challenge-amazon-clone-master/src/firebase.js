import firebase from "firebase";

/// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAVuvDX584Kc9pxeVq7tN7dAtyvufi_dOo",
  authDomain: "base-2a465.firebaseapp.com",
  databaseURL: "https://base-2a465.firebaseio.com",
  projectId: "base-2a465",
  storageBucket: "base-2a465.appspot.com",
  messagingSenderId: "508276966641",
  appId: "1:508276966641:web:662fd1023546a88e021550",
  measurementId: "G-BYTE7CP0R3"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
