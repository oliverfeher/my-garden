import React from "react";
import gardenLogo from "../images/garden.png"
import { Link } from 'react-router-dom';

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

    render()
    {
        return (
            <div id="main">
                <img src={gardenLogo} id="garden-logo" alt=""/>
                <h2 className="white text-big">myGarden</h2>
                    <form onSubmit={this.handleOnSubmit} id="log-in-form">
                        <label className="text-medium">First name:</label>
                        <br />
                        <input type="text" value={this.state.password} onChange={this.handleOnChangeName}/>
                        <br />
                        <label className="text-medium">Email:</label>
                        <br/>
                        <input type="e-mail" value={this.state.email} onChange={this.handleOnChangeEmail}/>
                        <br/>
                        <label className="text-medium">Password:</label>
                        <br/>
                        <input type="password" value={this.state.password} onChange={this.handleOnChangePassword}/>
                        <br />
                        <input type="submit" id="sign-up" className="text-medium" value="Sign up"/>
                    </form>
                <div id="footer">
                    <p className="text-medium">© 2020 - myGarden - All Rights Reserved</p>
                </div>
            </div>
        )
    }
}

export default Signup;