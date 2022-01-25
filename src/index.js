import React from "react";
import ReactDOM from "react-dom";
import { initializeApp } from "firebase/app";
import "./index.css";
import App from "./App";
import AuthProvider from "./providers/AuthProvider";

// Initialize Firebase
initializeApp({
  apiKey: "AIzaSyDVF_7B7WjyYAI-rj7QUZxKl3bneqaFWEY",
  authDomain: "chatbot-e6125.firebaseapp.com",
  projectId: "chatbot-e6125",
  storageBucket: "chatbot-e6125.appspot.com",
  messagingSenderId: "364595730647",
  appId: "1:364595730647:web:c6f35ee3de1540fc87f892",
});

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
