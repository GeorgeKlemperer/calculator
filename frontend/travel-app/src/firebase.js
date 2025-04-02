import { initializeApp } from "firebase/app";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyAWxyNHi-fWnh5e0fH9hwdwNl1vAuaWS5A",
  authDomain: "travel-app-4d1cc.firebaseapp.com",
  projectId: "travel-app-4d1cc",
  storageBucket: "travel-app-4d1cc.firebasestorage.app",
  messagingSenderId: "393240781890",
  appId: "1:393240781890:web:b2b0edd909134f5fe439db",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
