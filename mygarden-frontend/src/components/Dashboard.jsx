import React from 'react';
import axios from "axios";
import Weather from "./Weather";
import NavBar from "./NavBar";
import Greeting from './Greeting';


class Dashboard extends React.Component
{
  constructor()
  {
    super();
    this.state = {};
  }

 
  componentDidMount = () =>
  {
    navigator.geolocation.getCurrentPosition(position=> this.setState({
      coords: {
        lat: position.coords.latitude,
        lon: position.coords.longitude
      }
    }))
    
    if(localStorage.token)
    {
      axios.post("http://localhost:3001/api/authorize", {
        token: localStorage.token
      })
      .then(response => this.setState({
        user: response.data.user
      }))
    }
    else
    {
      this.props.history.push("/")
    }
  }

  
  render()
  {
    if(!localStorage.token)
    {
      this.props.history.push("/")
    }
    if(!this.state.user)
    {
      return (
        <div>Loading...</div>
      )
    }
    else
    {
      return (
        <div id="dashboard">
          <NavBar />
          <div id="dashboard-main">
            <Greeting userName={this.state.user.first_name} />
            <div id="dashboard-divs">
              <div id="currently-growing">
                <div id="plants-ready"></div>
              </div>
              <Weather location={this.state.coords}/>
            </div>
          </div>
        </div>
      )
    }
    
  
  }
}

export default Dashboard;

