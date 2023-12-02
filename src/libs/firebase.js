// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "blogapp-605b4.firebaseapp.com",
  projectId: "blogapp-605b4",
  storageBucket: "blogapp-605b4.appspot.com",
  messagingSenderId: "106275719190",
  appId: "1:106275719190:web:f03f7ed79b452057c8cd37",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
