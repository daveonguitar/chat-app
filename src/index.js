import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { Route, BrowserRouter as Router } from "react-router-dom";
import LoginComponent from "./login/login";
import SignupComponent from "./signup/signup";
import DashboardComponent from "./dashboard/dashboard";

require("dotenv").config();
const firebase = require("firebase");
require("firebase/firestore");

firebase.initializeApp({
  apiKey: process.env.APIKEY,
  authDomain: "chat-app81.firebaseapp.com",
  databaseURL: "https://chat-app81.firebaseio.com",
  projectId: "chat-app81",
  storageBucket: "chat-app81.appspot.com",
  messagingSenderId: "437644453943",
  appId: "1:437644453943:web:2bd1f3fb20e21de63a37b2",
  measurementId: "G-WS20MNYQ7V",
});

const routing = (
  <Router>
    <div id="routing-container">
      <Route path="/login" component={LoginComponent}></Route>
      <Route path="/signup" component={SignupComponent}></Route>
      <Route path="/dashboard" component={DashboardComponent}></Route>
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));

serviceWorker.unregister();
