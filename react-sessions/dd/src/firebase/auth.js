
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";



  
    
    const firebaseConfig = {
        apiKey: "AIzaSyDUei922mAxnudYdIDnc03r6AMWOTTgwf8",
        authDomain: "movie-07-01.firebaseapp.com",
        projectId: "movie-07-01",
        storageBucket: "movie-07-01.appspot.com",
        messagingSenderId: "242455648296",
        appId: "1:242455648296:web:16fb8a503a0ca15f4e7d1d"
      };
      
      
      const app = initializeApp(firebaseConfig);
      
   export const auth=getAuth(app)



