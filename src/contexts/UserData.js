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

const UserDataProvider = ({ children }) => {
  const [userUid, setUserUid] = useState(null);
  const [userTasks, setUserTasks] = useState([]);
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
    }
  }, [userUid]);

  const addTask = (task, userUid) => {
    clearToast();
    firebase
      .firestore()
      .collection(`Users/${userUid}/Tasks`)
      .add(task)
      .then(response => {
        displayToast("Add Task Successful!", true);
      })
      .catch(response => {
        displayToast(response.message, false);
      });
  };

  const deleteTask = (taskId, userUid) => {
    clearToast();
    firebase
      .firestore()
      .collection(`Users/${userUid}/Tasks`)
      .doc(taskId)
      .delete()
      .then(() => {
        displayToast("Delete Task Successful!", true);
      })
      .catch(() => {
        displayToast("Delete Task Failed!", false);
      });
  };
  const changeTask = (taskId, userUid, changedData) => {
    clearToast();
    firebase
      .firestore()
      .collection(`Users/${userUid}/Tasks`)
      .doc(taskId)
      .update(changedData)
      .then(response => {
        displayToast("Change Task Successful!", true);
      })
      .catch(response => {
        displayToast(response.message, false);
      });
  };

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
    toastData,
    displayToast,
    clearToast,
    addTask,
    deleteTask,
    changeTask,
  };
  return <UserData.Provider value={value}>{children}</UserData.Provider>;
};

export default UserDataProvider;
