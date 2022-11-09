import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth,onAuthStateChanged,signInWithEmailAndPassword, signOut  } from "firebase/auth";


//* Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

export const createUser =async(email,password,navigate)=> {
try {

let userCredential =await createUserWithEmailAndPassword(auth, email, password,)
console.log(userCredential)
navigate("/")
} catch (error) {
  console.log(error.message);
}
}

export const signIn = async(email,password,navigate) => {

  try {

    let userCredential = await signInWithEmailAndPassword(auth, email, password)
    navigate("/")

    console.log(userCredential)
    
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode,errorMessage)
  }


}

export const userObserver = ()=> {
 
onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log(user);
  } else {
          console.log("çıkış");

       
  }
});
}

export const logout = ()=> {
  signOut(auth)
}







