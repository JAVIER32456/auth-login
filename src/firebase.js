// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBV9ND93M7Cai-ptjkyeFEA10ZWhymUQB4",
  authDomain: "fir-dashboard-6fd3c.firebaseapp.com",
  projectId: "fir-dashboard-6fd3c",
  storageBucket: "fir-dashboard-6fd3c.appspot.com",
  messagingSenderId: "1050747595946",
  appId: "1:1050747595946:web:39f0bdb95be52179ec34d3",
  measurementId: "G-TQPLCS5L6K"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();

