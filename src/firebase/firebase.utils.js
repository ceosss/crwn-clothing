import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDovjEGhB1xUjF3E3c7rDDlw4ixRf2u8HQ",
  authDomain: "crown-db-a6261.firebaseapp.com",
  databaseURL: "https://crown-db-a6261.firebaseio.com",
  projectId: "crown-db-a6261",
  storageBucket: "crown-db-a6261.appspot.com",
  messagingSenderId: "911447919329",
  appId: "1:911447919329:web:e518225ee6a509bbe3c5a0",
  measurementId: "G-FS3GV1WTNQ",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
