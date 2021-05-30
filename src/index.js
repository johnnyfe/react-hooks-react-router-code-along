import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import About from "./Components/About"
import Home from "./Components/Home"
import Login from "./Components/Login" 
import Navbar from "./Components/Navbar"


ReactDOM.render(
  <Router>
    <Navbar />
    <Switch>
    <Route path="/about">
      <About />
    </Route>
    <Route path="/login">
      <Login />
    </Route>
    <Route exact path="/">
      <Home />
    </Route>
    </Switch>
  </Router>
  , document.getElementById("root"));
