import React, { useState, useEffect, createContext } from "react";
import firebase from "../Firebase/config/config";

export const UserData = createContext();

// Single Task's Data

// const Task = {
//   title: "title",
//   type: "type",
//   description: "description",
//   date: "date",
//   start: "start",
//   end: "end",
//   duration: "duration",
//   status: "status",
// };

const UserDataProvider = ({ children }) => {
  const [userUid, setUserUid] = useState(null);
  const [userTasks, setUserTasks] = useState([]);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        setUserUid(user.uid);
        firebase
          .firestore()
          .collection(`Users/${userUid}/Tasks`)
          .get()
          .then(tasks => {
            const userTasks = [];
            setUserTasks([]);
            tasks.forEach(task => {
              userTasks.push({ ...task.data(), doc: task.id });
            });
            setUserTasks(userTasks);
          });
      } else {
        setUserUid(null);
      }
    });
  }, [userUid]);

  useEffect(() => {
    firebase
      .firestore()
      .collection(`Users/${userUid}/Tasks`)
      .onSnapshot(tasks => {
        const userTasks = [];
        setUserTasks([]);
        tasks.forEach(task => {
          userTasks.push({ ...task.data(), id: task.id });
        });
        setUserTasks(userTasks);
      });
  }, [userUid]);

  const addTask = (task, userUid) => {
    firebase.firestore().collection(`Users/${userUid}/Tasks`).add(task);
  };

  const deleteTask = (task, userUid) => {
    firebase
      .firestore()
      .collection(`Users/${userUid}/Tasks`)
      .doc(task.id)
      .delete();
  };
  const changeTask = (task, userUid, changedData) => {
    firebase
      .firestore()
      .collection(`Users/${userUid}/Tasks`)
      .doc(task.id)
      .update(changedData);
  };

  const value = {
    userUid,
    setUserUid,
    userTasks,
    setUserTasks,
    addTask,
    deleteTask,
    changeTask,
  };
  return <UserData.Provider value={value}>{children}</UserData.Provider>;
};

export default UserDataProvider;
