// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBjGBfqXIccLGar56neKT_iA-qEexpUyow",
  authDomain: "portfolio-7931e.firebaseapp.com",
  projectId: "portfolio-7931e",
  storageBucket: "portfolio-7931e.appspot.com",
  messagingSenderId: "851404948565",
  appId: "1:851404948565:web:f5316fb0372565f1a0c0dc",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
