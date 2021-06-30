import React from "react";
import { GoogleOutlined, FacebookOutlined } from "@ant-design/icons";
// import "firebase/app";

// import firebase from "firebase/app";
import {
  googleAuthProvider,
  facebookAuthProvider,
  firebase,
} from "../firebase";

const LoginPage = () => {
  return (
    <div id='login-page'>
      <div id='login-card'>
        <h1>Welcome to Varta!</h1>

        <div
          className='login-button google'
          onClick={() => firebase.auth().signInWithRedirect(googleAuthProvider)}
        >
          <GoogleOutlined /> Continue with Google
        </div>
        <br />
        <br />
        <div
          className='login-button facebook'
          onClick={() =>
            firebase.auth().signInWithRedirect(facebookAuthProvider)
          }
        >
          <FacebookOutlined /> Continue with Facebook
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
