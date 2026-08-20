import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Replace with real config
const firebaseConfig = {
    apiKey: "AIzaSyAQOCuTt9_nGMgoT6Ai_LkjED7sWOl4FJM",
    authDomain: "s3kstudios-web.firebaseapp.com",
    projectId: "s3kstudios-web",
    storageBucket: "s3kstudios-web.firebasestorage.app",
    messagingSenderId: "913178588315",
    appId: "1:913178588315:web:970e4de94787bb5b69c23e",
    measurementId: "G-127G0XCG5S"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
