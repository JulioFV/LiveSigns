import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCyNuBTmgbH2mypRvWvTEHEzFZjWKIRDYs",
  authDomain: "senascan-119d9.firebaseapp.com",
  projectId: "senascan-119d9",
  storageBucket: "senascan-119d9.firebasestorage.app",
  messagingSenderId: "234234501440",
  appId: "1:234234501440:web:7259f10d5e6738f9e502a5",
  measurementId: "G-45DK1VWFV4"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Solo inicializa Analytics si está soportado (por ejemplo, solo en web con HTTPS)
let analytics;
isSupported().then((supported) => {
  if (supported) {
    analytics = getAnalytics(app);
  }
});

export { db };
