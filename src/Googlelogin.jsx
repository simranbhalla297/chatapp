import React, { useEffect } from "react";
import firebase from "./Firebase.js";
function Googlelogin() {
  const onSubmit = () => {
    console.log("google log in");
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(function (result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        // ...
      })
      .catch(function (error) {
        // Handle Errors here.
        console.log(error);
        // ...
      });
  };
  useEffect(() => {
    var listner = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        console.log(" user log in");
      } else {
        console.log(" user not logged in");
      }
    });

    return () => {
      listner();
      console.log("clean up function");
    };
  });

  return (
    <div>
      <h1>hellow</h1>
      <button onClick={onSubmit}>Sign in with Google</button>
    </div>
  );
}

export default Googlelogin;
