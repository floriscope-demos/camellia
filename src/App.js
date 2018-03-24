import React, { Component } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import Home from "./containers/Home";
import logo from "./assets/images/logo.svg";
import "./assets/styles/App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
