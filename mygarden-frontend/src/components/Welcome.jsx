import React from 'react';
import axios from "axios";

class Welcome extends React.Component
{
    constructor()
    {
        super();
        this.state = {
            email: "",
            password: ""
        }
    }


    handleOnChangeEmail = (event) =>
    {
        this.setState({
            email: event.target.value
        })
    }

    handleOnChangePassword = (event) =>
    {
        this.setState({
            password: event.target.value
        })
    }

    handleOnSubmit = (event) =>
    {
        event.preventDefault();
        let user = {
            email: this.state.email,
            password: this.state.password
        }

        axios.post("http://localhost:3001/api/login",
        {
            user
        })
        .then(response => console.log(response.data.token))
    }

    render()
    {
        return (
            <form onSubmit={this.handleOnSubmit}>
                <label>Email:</label>
                <br/>
                <input type="e-mail" value={this.state.email} onChange={this.handleOnChangeEmail}/>
                <br/>
                <label>Password</label>
                <br/>
                <input type="password" value={this.state.password} onChange={this.handleOnChangePassword}/>
                <br />
                <input type="submit"/>
            </form>
        )
    }
}

export default Welcome;