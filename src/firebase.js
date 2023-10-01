import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-database.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";

const firebaseConfig={
    apiKey: "AIzaSyAMB1Vdj3-mHKB06yAx9AE3NnqE9vBOFqI",
    authDomain: "authentication-a2981.firebaseapp.com",
    projectId: "authentication-a2981",
    storageBucket: "authentication-a2981.appspot.com",
    messagingSenderId: "266110574101",
    appId: "1:266110574101:web:66e53120c152b02b51381c"
};
const appsetting = {
    databaseURL: "https://authentication-a2981-default-rtdb.asia-southeast1.firebasedatabase.app/",
  };

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const dataRef = ref(database, "users"); // Change "users" to your desired database path
const auth = getAuth();

async function handleSignup() {
    const name = document.getElementById("name").value;
    const lname = document.getElementById("lname").value;
    const phone = document.getElementById("phone").value;
    const email = document.getElementById("email").value;
    const pass = document.getElementById("pass").value;
    const cpass = document.getElementById("cpass").value;

    if (pass !== cpass) {
        alert("Passwords do not match.");
        return;
    }

    try {
        // Create user in Firebase Authentication
        const userCredential = await createUserWithEmailAndPassword(auth, email, pass);
        const user = userCredential.user;

        // Store additional user data in the Realtime Database
        const userData = {
            name,
            lname,
            phone,
            email,
        };

        // Push user data to the database
        push(dataRef, userData);

        alert("Signup successful!");
    } catch (error) {
        console.error("Error creating user:", error);
        alert("Signup failed. Please try again.");
    }
}
async function handleLogin() {
    const email = document.getElementById("lemail").value;
    const pass = document.getElementById("lpass").value;

    try {
        // Authenticate the user with email and password
        const userCredential = await signInWithEmailAndPassword(auth, email, pass);
        const user = userCredential.user;

        alert("Login successful!");
    } catch (error) {
        console.error("Error signing in:", error);
        alert("Login failed. Please check your credentials.");
    }
}
document.getElementById("login-button").addEventListener("click", handleLogin);
document.getElementById("signup-button").addEventListener("click", handleSignup);
