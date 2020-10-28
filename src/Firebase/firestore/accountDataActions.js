import firebase from "../config/config";

export const addAccountData = (userUid, accountData) => {
  firebase.firestore().collection(`Users`).doc(userUid).set(accountData);
};

export const changeAccountData = (userUid, changedData) => {
  firebase.firestore().collection(`Users`).doc(userUid).update(changedData);
};
