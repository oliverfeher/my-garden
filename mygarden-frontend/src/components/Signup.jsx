import React from "react";
import gardenLogo from "../images/garden.png"
import axios from "axios";

class Signup extends React.Component {
    constructor()
    {
        super();
        this.state = {};
    }

    handleOnChangeName = event =>
    {
        this.setState({
            first_name: event.target.value
        })
    }

    handleOnChangeEmail = event =>
    {
        this.setState({
            email: event.target.value
        })
    }

    handleOnChangePassword = event =>
    {
        this.setState({
            password: event.target.value
        })
    }

    handleOnSubmit = event =>
    {
        event.preventDefault();
        axios.post("http://localhost:3001/api/users", {
            user: this.state
        })
        .then(response =>
            {
                localStorage.setItem("token", response.data.token);
                this.props.history.push("/Dashboard")
            })
    }

    render()
    {
        return (
            <div id="main">
                <img src={gardenLogo} id="garden-logo" alt=""/>
                <h2 className="white text-big">myGarden</h2>
                <form onSubmit={this.handleOnSubmit} id="sign-up-form">
                    <label className="text-medium label-margin">First name:</label>
                    <input type="text" value={this.state.first_name} onChange={this.handleOnChangeName}/>
                    <label className="text-medium label-margin">Email:</label>
                    <input type="email" value={this.state.email} onChange={this.handleOnChangeEmail}/>
                    <label className="text-medium">Password:</label>
                    <input type="password" value={this.state.password} onChange={this.handleOnChangePassword}/>
                    <input type="submit" id="sign-up" className="text-medium sign-up" value="Sign up"/>
                </form>
                <div id="footer">
                    <p className="text-medium">© 2020 - myGarden - All Rights Reserved</p>
                </div>
            </div>
        )
    }
}

export default Signup;