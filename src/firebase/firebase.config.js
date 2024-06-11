// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBcIajZg06hgE_UHqKfYZbodDmOoqV-xPY",
  authDomain: "car-doctor-e3d1c.firebaseapp.com",
  projectId: "car-doctor-e3d1c",
  storageBucket: "car-doctor-e3d1c.appspot.com",
  messagingSenderId: "835223114108",
  appId: "1:835223114108:web:f96603c2a8b26f3522d4f9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


export default auth