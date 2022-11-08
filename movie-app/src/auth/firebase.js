import { initializeApp } from "firebase/app";
import { getAuth,createUserWithEmailAndPassword} from "firebase/auth";


// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
    apiKey: "AIzaSyBw910DbKFeBbdv6nBLBwST5aSaJGfSpok",
    authDomain: "movie-app-c34ee.firebaseapp.com",
    projectId: "movie-app-c34ee",
    storageBucket: "movie-app-c34ee.appspot.com",
    messagingSenderId: "164521210194",
    appId: "1:164521210194:web:5165eed3aeadaf0531ca8b"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service

const auth = getAuth(app)

export const creatUser = async(email,password)=> {

   await createUserWithEmailAndPassword(auth, email, password)

    .then((userCredential)=> {
        const user = userCredential.user
        console.log(user);
    })
    .catch((err)=> console.log(err));

}

