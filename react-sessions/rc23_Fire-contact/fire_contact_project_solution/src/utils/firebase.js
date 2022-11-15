import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyDTAEiofNEXBC8C_d-hZwkUwWo95nGjMdw",
  authDomain: "fir-realtime-contact.firebaseapp.com",
  databaseURL: "https://fir-realtime-contact-default-rtdb.firebaseio.com",
  projectId: "fir-realtime-contact",
  storageBucket: "fir-realtime-contact.appspot.com",
  messagingSenderId: "848496215123",
  appId: "1:848496215123:web:ec3e1d802fdf3a9d0e32a6"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);
 export default app

