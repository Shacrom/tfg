// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDsuOmzdEJM6-xH-DVbszykps_o1220MQw",
    authDomain: "back-tfg.firebaseapp.com",
    projectId: "back-tfg",
    storageBucket: "back-tfg.appspot.com",
    messagingSenderId: "20400782910",
    appId: "1:20400782910:web:b8c13fe4c6301264855b6f",
    measurementId: "G-91F7Y3WJEE"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);
