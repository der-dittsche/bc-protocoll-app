import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBQt5IkOB1odKPfG_E-wX3Jq_JjmKG7Ndc",
  authDomain: "bc-protocol-app.firebaseapp.com",
  projectId: "bc-protocol-app",
  storageBucket: "bc-protocol-app.appspot.com",
  messagingSenderId: "857062909841",
  appId: "1:857062909841:web:1cad4a835a2275332d1c30",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
