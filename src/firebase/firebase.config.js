// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyASOMaN8ZlLZ8kohXKH-tgJL8hpCs1mXz0",
  authDomain: "auth-overview.firebaseapp.com",
  projectId: "auth-overview",
  storageBucket: "auth-overview.appspot.com",
  messagingSenderId: "41415097384",
  appId: "1:41415097384:web:f4b9db67575e17671fc91d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;