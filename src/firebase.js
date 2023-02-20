
import { getFirestore } from "firebase/firestore";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD0h64HNXDCUbvywFXCXZhSDisiLe92Nyw",
  authDomain: "react-portfolio-prakhar.firebaseapp.com",
  projectId: "react-portfolio-prakhar",
  storageBucket: "react-portfolio-prakhar.appspot.com",
  messagingSenderId: "161735924117",
  appId: "1:161735924117:web:73b620de40205e8f5afe9c"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore();
