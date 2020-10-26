import firebase from "../config/config";

export const addStageTask = (taskId, userUid, stageTime) => {
  firebase
    .firestore()
    .collection(`Users/${userUid}/StagesTasks`)
    .add({ ...stageTime, taskId });
};

export const changeStageTask = (stageId, userUid, changedData) => {
  firebase
    .firestore()
    .collection(`Users/${userUid}/StagesTasks`)
    .doc(stageId)
    .update(changedData);
};

export const deleteStageTask = (stageId, userUid) => {
  firebase
    .firestore()
    .collection(`Users/${userUid}/StagesTasks`)
    .doc(stageId)
    .delete();
};

export const deleteAllStagesTask = (taskId, userUid) => {
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
