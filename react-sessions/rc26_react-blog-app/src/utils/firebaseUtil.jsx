import firebase from "firebase/app"

import "firebase/auth"

import "firebase/database"



const firebaseUtil= firebase.initializeApp({
  apiKey: "AIzaSyBWUirwnHeu6S-oZODxFevryflr_CC4GQo",
  authDomain: "blog-app-auth-noah.firebaseapp.com",
  projectId: "blog-app-auth-noah",
  storageBucket: "blog-app-auth-noah.appspot.com",
  messagingSenderId: "123046051689",
  appId: "1:123046051689:web:147e7014f96e1ed56007f8"
});
export default firebaseUtil

export const auth=firebaseUtil.auth();
export const firebaseDB= firebaseUtil.database()
export const googleProvider = new firebase.auth.GoogleAuthProvider()

