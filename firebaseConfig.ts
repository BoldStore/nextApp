import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCPHtJ__EEMJdF89LiLSpCWR91Osug3Da8",
  authDomain: "bold-a1e8e.firebaseapp.com",
  projectId: "bold-a1e8e",
  storageBucket: "bold-a1e8e.appspot.com",
  messagingSenderId: "739646855630",
  appId: "1:739646855630:web:f1ba524b76af5010bb339f",
  measurementId: "G-44BM9FKS2Z",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
