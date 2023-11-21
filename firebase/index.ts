// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCQbUuFLfKXbyuuSnPLxVzVhPrbyb3aynk",
  authDomain: "ndex-ecommerce.firebaseapp.com",
  projectId: "ndex-ecommerce",
  storageBucket: "ndex-ecommerce.appspot.com",
  messagingSenderId: "240155858055",
  appId: "1:240155858055:web:fc708613585ca2f7f81422",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const firebaseAuth = getAuth(app);
export const firebaseProvider = new GoogleAuthProvider();
