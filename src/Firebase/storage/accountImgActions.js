import firebase from "../config/config";

export const uploadUserImg = (userUid, userImg) => {
  return firebase
    .storage()
    .ref(`UsersImgs/${userUid}/userImg.jpg`)
    .put(userImg);
};
export const getUserImg = path => {
  return firebase.storage().ref(path).getDownloadURL();
};
export const deleteUserImg = userUid => {
  return firebase
    .storage()
    .ref()
    .child(`UsersImgs/${userUid}/userImg.jpg`)
    .delete();
};
