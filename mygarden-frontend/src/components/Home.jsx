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
    axios.post("http://localhost:3001/api/authorize", {
      token: localStorage.token
    })
    .then(response => this.setState({
      user: response.data.user
    }))
  }
  render()
  {
    if(!this.state.user)
    {
      return (
        <div>Loading...</div>
      )
    }
    else {
      return (
        <h1>Hello {this.state.user.first_name}</h1>
      )
    }
    
  }
}

export default Home;