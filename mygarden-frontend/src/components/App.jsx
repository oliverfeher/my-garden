import React from 'react';
import "../stylesheets/App.css";
import { BrowserRouter, Route, NavLink, Switch } from "react-router-dom";
import Home from './Home';
import Welcome from "./Welcome"
import Signup from "./Signup";
// import Login from './Login';
// import Logout from './Logout';


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
    <Route exact path="/welcome" component={Home} />
    <Route exact path="/signup" component={Signup} />
    {/*<Route exact path="/logout" component={Logout} /> */}
  </Switch>
)


export default App;
