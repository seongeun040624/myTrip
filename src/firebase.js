import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBS4Q8xi8NJyHRKZdH-9tFi0TzldywwauE",
  authDomain: "mytrip-67e22.firebaseapp.com",
  //databaseURL: "https://mytrip-67e22-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "mytrip-67e22",
  storageBucket: "mytrip-67e22.firebasestorage.app",
  messagingSenderId: "538485328621",
  appId: "1:538485328621:web:362d929e754427d10f1ae4",
  measurementId: "G-PB226XSZCR"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);