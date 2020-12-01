// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase/app";
import "firebase/auth";
// If you enabled Analytics in your project, add the Firebase SDK for Analytics
//import "firebase/analytics";

// Add the Firebase products that you want to use
//import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";
var firebaseConfig = {
  apiKey: "AIzaSyDIDA6xkpQhaknH60kcnfy8arqCl_ORShI",
  authDomain: "chatapp-6e852.firebaseapp.com",
  databaseURL: "https://chatapp-6e852.firebaseio.com",
  projectId: "chatapp-6e852",
  storageBucket: "chatapp-6e852.appspot.com",
  messagingSenderId: "294291296209",
  appId: "1:294291296209:web:36c52a71a85e7517c69af0",
  measurementId: "G-N10MZ3ZGE7",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//firebase.analytics();
//firebase.auth();
//firebase.firestore();

export default firebase;
