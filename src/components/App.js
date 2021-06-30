import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { AuthProvider } from "../contexts/AuthContext";

import Chats from "./Chats";
import LoginPage from "./LoginPage";

const App = () => {
  return (
    <div style={{ fontFamily: "Avenir" }}>
      <Router>
        <AuthProvider>
          <Switch>
            <Route path='/chats' component={Chats} />
            <Route path='/' component={LoginPage} />
          </Switch>
        </AuthProvider>
      </Router>
    </div>
  );
};

export default App;
