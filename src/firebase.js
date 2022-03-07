// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: "pwaapp-2529c.firebaseapp.com",
  projectId: "pwaapp-2529c",
  storageBucket: "pwaapp-2529c.appspot.com",
  messagingSenderId: "964660414082",
  appId: "1:964660414082:web:f1e951d734484e2e5e169b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);