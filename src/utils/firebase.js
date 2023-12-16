// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "lupleg.firebaseapp.com",
  projectId: "lupleg",
  storageBucket: "lupleg.appspot.com",
  messagingSenderId: "517877243779",
  appId: "1:517877243779:web:a8f2a24c9615632547a0b6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);