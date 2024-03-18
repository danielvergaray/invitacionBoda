import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.scss";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDgyj5TTyTHXxQO1dmZWj1b1usIfCyxNNY",
  authDomain: "invitacion-boda-a4f4b.firebaseapp.com",
  projectId: "invitacion-boda-a4f4b",
  storageBucket: "invitacion-boda-a4f4b.appspot.com",
  messagingSenderId: "229391944123",
  appId: "1:229391944123:web:1267481ebaeb388ab91c9e",
};

// Initialize Firebase
initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
