import firebase from "../config/config";
import { deleteAllStagesTask } from "./stagesActions";

export const addTask = (task, userUid, clearToast, displayToast) => {
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

export const deleteTask = (taskId, userUid, clearToast, displayToast) => {
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

export const changeTask = (
  taskId,
  userUid,
  changedData,
  clearToast,
  displayToast
) => {
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
