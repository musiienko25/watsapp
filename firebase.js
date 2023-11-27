import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBQTrwqVmLnPV-cF9HQcBOVRwYzswsOqX4",
  authDomain: "watsapp-10c09.firebaseapp.com",
  projectId: "watsapp-10c09",
  storageBucket: "watsapp-10c09.appspot.com",
  messagingSenderId: "1064219670341",
  appId: "1:1064219670341:web:bd28b77484a03130fef02c",
  measurementId: "G-TBYRM645HD",
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { db, auth, provider };
