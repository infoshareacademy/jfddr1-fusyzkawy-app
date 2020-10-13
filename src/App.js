import React from "react";
import "./App.css";
import SignIn from "./StructureSample/pages/SignIn";
import PlayStop from "./StructureSample/molecules/PlayStop";

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
