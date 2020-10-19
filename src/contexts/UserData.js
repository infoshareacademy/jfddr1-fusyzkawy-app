import React, { useState, useEffect, createContext } from "react";
import firebase from "../Firebase/config/config";

export const UserData = createContext();

const UserDataProvider = ({ children }) => {
  const [userUid, setUserUid] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        setUserUid(user.uid);
      } else {
        setUserUid(null);
      }
    });
  }, [userUid]);

  const value = {
    userUid,
    setUserUid,
  };

  return <UserData.Provider value={value}>{children}</UserData.Provider>;
};

export default UserDataProvider;
