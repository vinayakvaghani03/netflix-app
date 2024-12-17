
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAhVlPMlRnnnf4N8wQKhQhbrGtvZqiEC50",
  authDomain: "netflix-clone-33e74.firebaseapp.com",
  projectId: "netflix-clone-33e74",
  storageBucket: "netflix-clone-33e74.firebasestorage.app",
  messagingSenderId: "632996852679",
  appId: "1:632996852679:web:a1dbc47cd1cfde92195fe2",
  measurementId: "G-PD8VRND450"
};


const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
