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
        deleteAllStagesTask(taskId, userUid);
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

  const addStageTask = (taskId, userUid, stageTime) => {
    firebase
      .firestore()
      .collection(`Users/${userUid}/StagesTasks`)
      .add({ ...stageTime, taskId });
  };

  const changeStageTask = (stageId, userUid, changedData) => {
    firebase
      .firestore()
      .collection(`Users/${userUid}/StagesTasks`)
      .doc(stageId)
      .update(changedData);
  };

  const deleteStageTask = (stageId, userUid) => {
    firebase
      .firestore()
      .collection(`Users/${userUid}/StagesTasks`)
      .doc(stageId)
      .delete();
  };

  const deleteAllStagesTask = (taskId, userUid) => {
    const batch = firebase.firestore().batch();
    firebase
      .firestore()
      .collection(`Users/${userUid}/StagesTasks`)
      .where("taskId", "==", `${taskId}`)
      .get()
      .then(snapshot => {
        snapshot.docs.forEach(doc => {
          batch.delete(doc.ref);
        });
        return batch.commit();
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
    stagesTasks,
    addStageTask,
    changeStageTask,
    deleteStageTask,
    deleteAllStagesTask,
  };
  return <UserData.Provider value={value}>{children}</UserData.Provider>;
};

export default UserDataProvider;
