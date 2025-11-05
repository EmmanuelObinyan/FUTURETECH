// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import {getStorage} from 'firebase/storage'
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey:import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "streamvee-f90b5.firebaseapp.com",
  projectId: "streamvee-f90b5",
  storageBucket: "streamvee-f90b5.appspot.com",
  messagingSenderId: "630949799413",
  appId:import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: "G-1WL2BY17D6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const Auth=getAuth(app)
export const db=getFirestore(app)
export const provider=new GoogleAuthProvider ()
export const storageRef=getStorage(app)
