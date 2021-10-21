import React, { useEffect, useState } from "react";
import axios from "axios";
import ReactDOM from "react-dom";

import Header from "./Header.jsx";
// import Testing from './components/Testing.js';
import CallLists from "./components/CallLists.jsx";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Footer from "./components/Footer.js";
import ContactIcon from "./components/ContactIcon.js";
import SettingsIcon from "./components/SettingsIcon.js";
import CircleIcon from "./components/CircleIcon.js";
import IncomingCalls from "./components/IncomingCalls.js";
import ArchivedCalls from "./components/ArchivedCalls.js";
import CallDetails from "./components/CallDetails.js";
const App = () => {
  return (
    <Router>
      <div className="container">
        <Header />
        <div className="container-view">
          <Switch>
            <Route exact path="/" component={CallLists} />
          </Switch>
          <Switch>
            <Route exact path="/contacts" component={ContactIcon} />
          </Switch>
          <Switch>
            <Route exact path="/settings" component={SettingsIcon} />
          </Switch>
          <Switch>
            <Route exact path="/circleicon" component={CircleIcon} />
          </Switch>
          <Switch>
            <Route exact path="/allcalls" component={CallLists} />
          </Switch>
          <Switch>
            <Route exact path="/incoming" component={IncomingCalls} />
          </Switch>
          <Switch>
            <Route exact path="/:callId">
              <CallDetails />
            </Route>
          </Switch>
          <Switch>
            <Route exact path="/archived">
              <ArchivedCalls />
            </Route>
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,

  document.getElementById("app")
);

export default App;
