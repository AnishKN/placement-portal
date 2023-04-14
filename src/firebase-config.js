import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAQT5kDRc1xqT_MIgMWu61yEcV5lN3-yHg",
    authDomain: "placement-portal-2af0a.firebaseapp.com",
    projectId: "placement-portal-2af0a",
    storageBucket: "placement-portal-2af0a.appspot.com",
    messagingSenderId: "1008732215803",
    appId: "1:1008732215803:web:48b1db8fa97564dc2cd35e",
    measurementId: "G-4ZY1WJMVTF"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);