import React, { useContext } from "react";
import "./App.css";
import UserDataProvider, { UserData } from "./contexts/UserData";
import Home from "./StructureSample/pages/Home";
import StartPage from "./StructureSample/pages/StartPage/StartPage";

const AuthGuard = ({ children }) => {
  const { userUid } = useContext(UserData);
  return userUid ? children : <StartPage />;
};

function App() {
  return (
    <div className="App">
      <UserDataProvider>
        <AuthGuard>
          <Home />
        </AuthGuard>
      </UserDataProvider>
    </div>
  );
}

export default App;
