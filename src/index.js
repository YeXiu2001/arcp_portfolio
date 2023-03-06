// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBxq_KamkA6pDEMxl1Ec65Ckx8ruieUbso",
  authDomain: "rm-portfolio-ebf25.firebaseapp.com",
  projectId: "rm-portfolio-ebf25",
  storageBucket: "rm-portfolio-ebf25.appspot.com",
  messagingSenderId: "361570606724",
  appId: "1:361570606724:web:990059f88cf7458a3f2cd1",
  measurementId: "G-W0WHPV9P0C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
console.log(app)