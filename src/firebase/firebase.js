// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, /*FacebookAuthProvider*/ } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCKEC1DTzjMb7tAxcJKE8Ip3lH4DK13S5w",
  authDomain: "devtales-6f9d9.firebaseapp.com",
  projectId: "devtales-6f9d9",
  storageBucket: "devtales-6f9d9.appspot.com",
  messagingSenderId: "1092260920889",
  appId: "1:1092260920889:web:bd343180967df557b757e8",
  measurementId: "G-02VDEDY4CY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export the auth
export const auth = getAuth();

// Export the google provider, you can add more providers if you want
export const googleProvider = new GoogleAuthProvider().setCustomParameters({ prompt: "select_account" });

// export const facebookProvider = new FacebookAuthProvider();

// Export the storage
export const storage = getStorage();

// Export the firestore
export const db = getFirestore(app);