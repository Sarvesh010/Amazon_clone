

import {initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

  const firebaseConfig = {
    apiKey: "AIzaSyDpD0jdPDm7UiE_6cqEDOpOgzV-Hv0pfQg",
    authDomain: "clone-cb9d1.firebaseapp.com",
    projectId: "clone-cb9d1",
    storageBucket: "clone-cb9d1.appspot.com",
    messagingSenderId: "319421559177",
    appId: "1:319421559177:web:1928fd8fd7c0790e6af158",
    measurementId: "G-EJ2G3Y6L9J"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);