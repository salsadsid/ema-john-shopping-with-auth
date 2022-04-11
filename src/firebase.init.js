// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAactfKjf-B9SKRLb6JBnEt_6rkbTNerVo",
    authDomain: "ema-john-shopping-with-auth.firebaseapp.com",
    projectId: "ema-john-shopping-with-auth",
    storageBucket: "ema-john-shopping-with-auth.appspot.com",
    messagingSenderId: "250025258881",
    appId: "1:250025258881:web:23eca631efe2d0c8fd0280"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;