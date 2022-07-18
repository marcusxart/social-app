// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAy9G2osAUT_EPL3YUSs6DuHEOQtBwGhNk",
  authDomain: "social-app-e700f.firebaseapp.com",
  projectId: "social-app-e700f",
  storageBucket: "social-app-e700f.appspot.com",
  messagingSenderId: "1015906607687",
  appId: "1:1015906607687:web:e969a247dca670e8d4c762",
  measurementId: "G-YGETPMNFPK",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;
