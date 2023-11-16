import farebase from "farebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBQTrwqVmLnPV-cF9HQcBOVRwYzswsOqX4",
  authDomain: "watsapp-10c09.firebaseapp.com",
  projectId: "watsapp-10c09",
  storageBucket: "watsapp-10c09.appspot.com",
  messagingSenderId: "1064219670341",
  appId: "1:1064219670341:web:bd28b77484a03130fef02c",
  measurementId: "G-TBYRM645HD",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app;
