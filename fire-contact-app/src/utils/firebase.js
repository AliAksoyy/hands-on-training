import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCVZSGxn_lX1Aw4xtn_KvP4JTAd6Oei4zw",
    authDomain: "fire-contact-4939a.firebaseapp.com",
    projectId: "fire-contact-4939a",
    storageBucket: "fire-contact-4939a.appspot.com",
    messagingSenderId: "214047548396",
    appId: "1:214047548396:web:0061876dd0e8ca22cad6c9"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  export const db = getFirestore(app);