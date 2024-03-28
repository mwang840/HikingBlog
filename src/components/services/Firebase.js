// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { firebaseConfig } from "./Firebase_config";
import {GoogleAuthProvider, getAuth, signInWithPopup} from "firebase/auth";
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export const registerWGoogle = () =>{
    signInWithPopup(auth, provider)
    .then((result)=>{
        console.log("User can sign up/sign in with google. Here is the response ", result);
    })
    .catch((error)=>{
        console.log("Google sign up/sign in failed. Here is why ", error)
    })
}