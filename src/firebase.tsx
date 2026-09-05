// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
const firebaseConfig = {
    apiKey: import.meta.env.VITE_API_KEY,
    authDomain: "login-react-42d36.firebaseapp.com",
    projectId: "login-react-42d36",
    storageBucket: "login-react-42d36.firebasestorage.app",
    messagingSenderId: "667268850239",
    appId: "1:667268850239:web:433c31172da67c1bd58e8a",
    measurementId: "G-MD8TRV048K",
}
const app = initializeApp(firebaseConfig)
const auth = getAuth()
export { app, auth }
