import firebase from "../config/config";

export const authSignUp = (email, password) => {
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(cred => {
      if (cred) {
        window.location.href =
          "https://infoshareacademy.github.io/jfddr1-fusyzkawy-app/tasks/";
      }
      console.log(cred.user.uid);
    })
    .catch(err => console.log(err.message));
};

export const authSignIn = (email, password) => {
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(cred => {
      if (cred) {
        window.location.href =
          "https://infoshareacademy.github.io/jfddr1-fusyzkawy-app/tasks/";
      }
      console.log(cred.user.uid);
    })
    .catch(err => console.log(err.message));
};

export const authSignOut = () => {
  firebase
    .auth()
    .signOut()
    .then(() => {
      console.log("Log out");
    });
};
