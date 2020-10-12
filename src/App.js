import React from "react";
import logo from "./logo.svg";
import "./App.css";
import SignIn from "./pages/SignIn";

function App() {
  const username = "Janek";
  const password = "password";
  return (
    <div className="App">
      <SignIn username={username} password={password} />
    </div>
  );
}

export default App;
