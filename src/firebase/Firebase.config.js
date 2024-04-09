// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyACeJQouQNCnKRZ3Z0uRaYMK4tPMaWpurg",
  authDomain: "react-blue-diamond-hotel.firebaseapp.com",
  projectId: "react-blue-diamond-hotel",
  storageBucket: "react-blue-diamond-hotel.appspot.com",
  messagingSenderId: "273070072294",
  appId: "1:273070072294:web:25223375f0956598837627"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;