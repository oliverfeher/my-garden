import React from 'react';
import "../stylesheets/App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Dashboard from './Dashboard';
import Welcome from "./Welcome"
import Signup from "./Signup";


class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
          <Main />
      </BrowserRouter>
    );
  }
}

const Main = () =>
(
  <Switch>
    <Route exact path="/" component={Welcome} />
    <Route exact path="/dashboard" component={Dashboard} />
    <Route exact path="/signup" component={Signup} />
  </Switch>
)


export default App;
