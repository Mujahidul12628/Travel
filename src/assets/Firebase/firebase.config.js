// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB2UHudp1gJRmaY-htBQfV3bCG5DnpNNuU",
    authDomain: "trek-vibes.firebaseapp.com",
    projectId: "trek-vibes",
    storageBucket: "trek-vibes.appspot.com",
    messagingSenderId: "138019406042",
    appId: "1:138019406042:web:958305bcdfc181932ca5e3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;