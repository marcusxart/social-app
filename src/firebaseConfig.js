// Import the functions you need from the SDKs you need
import { getFirestore } from "firebase/firestore";
import { initializeApp, getApp, getApps } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
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
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();
const auth = getAuth();
const createUser = createUserWithEmailAndPassword;
const signInUser = signInWithEmailAndPassword;

export default db;

export { auth, storage, createUser, signInUser };
