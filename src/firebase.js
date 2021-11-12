// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD5hgQ7SE1ogQe_44uy9SZqvSpzsuFa2F0",
  authDomain: "clone-a67c0.firebaseapp.com",
  projectId: "clone-a67c0",
  storageBucket: "clone-a67c0.appspot.com",
  messagingSenderId: "633495155380",
  appId: "1:633495155380:web:b64ef847c9ea00d9805de1",
  measurementId: "G-LGYYNFDLKH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);