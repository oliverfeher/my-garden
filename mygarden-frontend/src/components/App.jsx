import React from 'react';
import "../stylesheets/App.css";
import { BrowserRouter, Route, NavLink, Switch } from "react-router-dom";
import Home from './Home';
import Login from './Login';
import Logout from './Logout';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <p>hi</p>
          <Main />
        </div>
      </BrowserRouter>
    );
  }
}

const Main = () =>
{
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/login" component={Login} />
    <Route exact path="/logout" component={Logout} />
  </Switch>
}


export default App;
