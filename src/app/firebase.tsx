import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDxIxHK4g9yvygryXd93RB58jv0xRGltr8",
    authDomain: "hakankygszweb.firebaseapp.com",
    projectId: "hakankygszweb",
    storageBucket: "hakankygszweb.firebasestorage.app",
    messagingSenderId: "761755363058",
    appId: "1:761755363058:web:ba5493874693e7ab06126b",
    measurementId: "G-ZK50GR82M4"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, addDoc, collection };