import firebase from "firebase/app";
import "firebase/firestore";
import firebaseConfig from "../hidden/firebaseConfig";

firebase.initializeApp(firebaseConfig);

// Firestore exports
export const firestore = firebase.firestore();

async function component() {
  const element = document.createElement("div");
  element.innerHTML = JSON.stringify(
    await firestore
      .doc("users/Ncf7nIwi1jgnPuwwdWvgruWYxpr2/todos/bEYKh45q9H39is5udWlg")
      .get()
  );

  return element;
}

document.body.appendChild(component());

// WITH NO CONFIG, -rw-r--r--  1 jackdwyer  primarygroup   353K Apr 18 17:59 dist/main.js
// Run `yarn run build`
// Run `ls -lh dist/main.js` to get the above
