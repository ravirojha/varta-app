import firebase from "firebase/app";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCf6ydrKm_8MbC8jF8qkfJHZYJ0Ypr7oOU",
  authDomain: "varta-b707c.firebaseapp.com",
  projectId: "varta-b707c",
  storageBucket: "varta-b707c.appspot.com",
  messagingSenderId: "181154057910",
  appId: "1:181154057910:web:a76afb0e8cb85f44782017",
};

firebase.initializeApp(config);

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();

export { firebase, googleAuthProvider, facebookAuthProvider };
