import firebase from "../config/config";
import { addAccountData } from "../firestore/accountDataActions";

export const authSignUp = (
  email,
  password,
  initialAccountData,
  displayToast
) => {
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(response => {
      addAccountData(response.user.uid, initialAccountData);
      displayToast("Registration Successful!", true);
    })
    .catch(response => {
      displayToast(response.message, false);
    });
};

export const authSignIn = (email, password, displayToast) => {
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(response => {
      displayToast("Logged In Successful!", true);
    })
    .catch(response => {
      displayToast(response.message, false);
    });
};

export const authSignOut = displayToast => {
  firebase
    .auth()
    .signOut()
    .then(response => {
      displayToast("Logged Out Successful!", true);
    });
};
