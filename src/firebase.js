//🤖 Proporciona las credenciales para la conección con firebase

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAGlBT3kVWU6WhOfpgPRSYsGispc7fCppw",
  authDomain: "react-fb-auth-29035.firebaseapp.com",
  projectId: "react-fb-auth-29035",
  storageBucket: "react-fb-auth-29035.appspot.com",
  messagingSenderId: "937794175390",
  appId: "1:937794175390:web:286269274edea91c78168f"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app) //Permitirá hacer la autenticación de usuarios