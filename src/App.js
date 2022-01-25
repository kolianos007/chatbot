import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import { useAuthState } from "react-firebase-hooks/auth";
import { getAuth } from "firebase/auth";
import Navbar from "./components/Navbar/Navbar";
import AppRouter from "./routes/AppRouter";
import Loader from "./components/Loader/Loader";

const App = () => {
  const ga = getAuth();
  const [, loading] = useAuthState(ga);

  return (
    <div className="App">
      {loading ? (
        <Loader />
      ) : (
        <Router>
          <Navbar />
          <AppRouter />
        </Router>
      )}
    </div>
  );
};

export default App;
