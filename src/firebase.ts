// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore";
import { getMessaging } from "firebase/messaging"

const firebaseConfig = {
  apiKey: "AIzaSyCDbwY-cZsB7EY3lfe86aCApu9S5ilwJvM",
  authDomain: "ajar-koding.firebaseapp.com",
  databaseURL: "https://ajar-koding-default-rtdb.firebaseio.com",
  projectId: "ajar-koding",
  storageBucket: "ajar-koding.appspot.com",
  messagingSenderId: "319143060484",
  appId: "1:319143060484:web:4ed172dd6d402cd11b4151",
  measurementId: "G-P1G34BX6MR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const authFirebase = getAuth(app);
const db = getFirestore(app);
const messaging = getMessaging(app);

export { authFirebase, db, messaging }