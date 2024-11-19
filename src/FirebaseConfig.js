// src/firebase.js
// src/firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyA78IrkwYA13GZpsJmm-fkFO3Qicbou4Qk",
    authDomain: "mariachi-uclatlan.firebaseapp.com",
    projectId: "mariachi-uclatlan",
    storageBucket: "mariachi-uclatlan.appspot.com",
    messagingSenderId: "667998778010",
    appId: "1:667998778010:web:24b31b571e5f117da5e523",
    measurementId: "G-0GQKM9P2CZ"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const analytics = getAnalytics(app);

export { auth, db ,analytics };
