
import { getFirestore } from "firebase/firestore";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCyNuBTmgbH2mypRvWvTEHEzFZjWKIRDYs",
  authDomain: "senascan-119d9.firebaseapp.com",
  projectId: "senascan-119d9",
  storageBucket: "senascan-119d9.firebasestorage.app",
  messagingSenderId: "234234501440",
  appId: "1:234234501440:web:7259f10d5e6738f9e502a5",
  measurementId: "G-45DK1VWFV4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
export { db };