import firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";

const app = firebase.initializeApp({
  apiKey: "AIzaSyA0MyEEHC_TggmFw57yBPjM_-yVpsfN2Dg",
  authDomain: "falic-dev.firebaseapp.com",
  databaseURL: "https://falic-dev-default-rtdb.firebaseio.com",
  projectId: "falic-dev",
  storageBucket: "falic-dev.appspot.com",
  messagingSenderId: "80289384899",
  appId: "1:80289384899:web:ff091af02177415894d576",
});

export const auth = app.auth();
export const db = app.firestore();

export default app;
