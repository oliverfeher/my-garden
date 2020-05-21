import React from 'react';
import axios from "axios";
import Weather from "./Weather"

let coords;

class Home extends React.Component
{
  constructor()
  {
    super();
    this.state = {};
  }

  setCoords(position)
  {
    coords = {
      location: {
        lon: position.coords.latitude,
        lat: position.coords.longitude
      }
    }
  }

  componentDidMount = () =>
  {
    navigator.geolocation.getCurrentPosition(position=> this.setState({
      coords: {
        lat: position.coords.latitude,
        lon: position.coords.longitude
      }
    }))
    // debugger;
    
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
        <div>
          <h1>Hello {this.state.user.first_name}</h1>
          {!this.state.coords ? <p>Your location is: Loading...</p> : <Weather location={this.state.coords}/>}
          <button onClick={()=>{localStorage.removeItem("token"); this.props.history.push("/")}}>logout</button>
        </div>
      )
    }
    
  
  }
}

export default Home;

