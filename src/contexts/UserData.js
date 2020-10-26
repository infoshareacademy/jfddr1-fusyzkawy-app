import React, { useState, useEffect, createContext } from "react";
import firebase from "../Firebase/config/config";

export const UserData = createContext();

// Single Task's Data

// const Task = {
// title: "",
// type: "",
// description: "",
// start: "",
// end: "",
// status: "",
// priority: "",
// project: "",
// };

// Single Task's stage

// const stageTask = {
// start: "",
// end: "",
// taskId: "",
// rangeId: "",
// };

const UserDataProvider = ({ children }) => {
  const [userUid, setUserUid] = useState(null);
  const [userTasks, setUserTasks] = useState([]);
  const [stagesTasks, setStagesTasks] = useState([]);
  const [toastData, setToastData] = useState({
    active: false,
    show: false,
    text: "",
    success: false,
  });

  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        setUserUid(user.uid);
      } else {
        setUserUid(null);
      }
    });
  }, [userUid]);

  useEffect(() => {
    if (userUid) {
      const snapUserTasks = firebase
        .firestore()
        .collection(`Users/${userUid}/Tasks`)
        .onSnapshot(tasks => {
          const userTasks = [];
          setUserTasks([]);
          tasks.forEach(task => {
            userTasks.push({ ...task.data(), taskId: task.id });
          });
          setUserTasks(userTasks);
        });
      return () => snapUserTasks();
    }
  }, [userUid]);

  useEffect(() => {
    if (userUid) {
      const snapStagesTasks = firebase
        .firestore()
        .collection(`Users/${userUid}/StagesTasks`)
        .onSnapshot(stages => {
          const stagesTasks = [];
          setStagesTasks([]);
          stages.forEach(stage => {
            stagesTasks.push({ ...stage.data(), stageId: stage.id });
          });
          setStagesTasks(stagesTasks);
        });
      return () => snapStagesTasks();
    }
  }, [userUid]);

  const clearToast = () => {
    setToastData({
      active: false,
      show: false,
      text: "",
      success: false,
    });
  };

  const displayToast = (text, success) => {
    clearToast();
    setToastData({
      active: true,
      show: true,
      text: text,
      success: success,
    });
  };

  const value = {
    userUid,
    setUserUid,
    userTasks,
    setUserTasks,
    stagesTasks,
    setStagesTasks,
    toastData,
    displayToast,
    clearToast,
  };
  return <UserData.Provider value={value}>{children}</UserData.Provider>;
};

export default UserDataProvider;
