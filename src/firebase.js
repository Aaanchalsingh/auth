import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig={
    apiKey: "AIzaSyAMB1Vdj3-mHKB06yAx9AE3NnqE9vBOFqI",
    authDomain: "authentication-a2981.firebaseapp.com",
    projectId: "authentication-a2981",
    storageBucket: "authentication-a2981.appspot.com",
    messagingSenderId: "266110574101",
    appId: "1:266110574101:web:66e53120c152b02b51381c"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth();

export {app,auth};
