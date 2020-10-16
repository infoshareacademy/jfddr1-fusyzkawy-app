import React from "react";
import "./App.css";
import Home from "./StructureSample/pages/Home";
import StartPage from "./StructureSample/pages/StartPage";

const AuthGuard = ({ children }) => {
  const isLoggedIn = true;

  return isLoggedIn ? children : <StartPage />;
};

function App() {
  return (
    <div className="App">
      <AuthGuard>
        <Home />
      </AuthGuard>
    </div>
  );
}

export default App;
