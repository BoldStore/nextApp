import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { connectAuthEmulator, getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC58rnwX7Zas-GdxfettF49Qjh6J6vSPAY",
  authDomain: "bold-96a92.firebaseapp.com",
  projectId: "bold-96a92",
  storageBucket: "bold-96a92.appspot.com",
  messagingSenderId: "1033134164289",
  appId: "1:1033134164289:web:4f7675c97c498d5a5879c0",
  measurementId: "G-TRWHN385YE",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);

// To use firebase emulator
connectAuthEmulator(auth, "http://localhost:9099");
