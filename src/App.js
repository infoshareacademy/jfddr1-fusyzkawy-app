import React from "react";
import "./App.css";
import SignIn from "./StructureSample/pages/SignIn";
import SortBy from "./StructureSample/molecules/SortBy";

function App() {
  const username = "Janek";
  const password = "password";
  return (
    <div className="App">
      <SignIn username={username} password={password} />
      <SortBy style={{ background: "yellow" }} />
    </div>
  );
}

export default App;
