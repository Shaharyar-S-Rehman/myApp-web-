// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDRUL1fjfkQsJ_iPffvtjIDcD62Ag3I36o",
  authDomain: "hackathon-51ac5.firebaseapp.com",
  projectId: "hackathon-51ac5",
  storageBucket: "hackathon-51ac5.appspot.com",
  messagingSenderId: "351905200896",
  appId: "1:351905200896:web:729883549cf2c9461b91e5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;