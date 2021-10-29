// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyALbf0sILEzPbEJlXwZjk-36rdailbxFyE",
  authDomain: "camagru-92121.firebaseapp.com",
  projectId: "camagru-92121",
  storageBucket: "camagru-92121.appspot.com",
  messagingSenderId: "149787513187",
  appId: "1:149787513187:web:b77e139ceb9445fb68c356",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };
