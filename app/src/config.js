// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC_c1q7KVa4PbrcG_Ungt-zr3v0FxEMGXU",
  authDomain: "boilerplate-f0cf3.firebaseapp.com",
  projectId: "boilerplate-f0cf3",
  storageBucket: "boilerplate-f0cf3.appspot.com",
  messagingSenderId: "188782106850",
  appId: "1:188782106850:web:a8e53ac127547e3bae26bb",
  measurementId: "G-3RZNFMDFWP"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig)
export {firebase}  