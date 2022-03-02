// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyAW8fqabIgS2Cd-bx34t4TXsBAkxRS5GJs",
  authDomain: "my-portfolio-8a353.firebaseapp.com",
  projectId: "my-portfolio-8a353",
  storageBucket: "my-portfolio-8a353.appspot.com",
  messagingSenderId: "677646479642",
  appId: "1:677646479642:web:ded5d8270fbfd027b5fca3",
  measurementId: "G-5JLV0KDH35"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
