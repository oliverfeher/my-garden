import React from 'react';
import axios from "axios";

class Home extends React.Component
{
  constructor()
  {
    super();
    this.state = {};
  }

  componentDidMount = () =>
  {
    
    navigator.geolocation.getCurrentPosition(position=>this.setState({location: position.coords}))

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
          {!this.state.location ? <p>Your location is: Loading...</p> : <p>Your location is: {this.state.location.latitude}, {this.state.location.longitude}</p>}
          <button onClick={()=>{localStorage.removeItem("token"); this.props.history.push("/")}}>logout</button>
        </div>
      )
    }
    
  
  }
}

export default Home;