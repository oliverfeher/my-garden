import React from 'react';
import axios from "axios";
import gardenLogo from "../images/garden.png"
import { Link } from 'react-router-dom';

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
        .then(response => {
            // VALIDATE IF RESPONSE WAS OK
            if(!response.data.error)
            {
                localStorage.setItem("token", response.data.token);
                this.props.history.push("/welcome")
            }
            else
            {
                let errorMsg = document.createElement("p");
                errorMsg.innerText = response.data.error;
                document.querySelector("form").appendChild(errorMsg)
                this.props.history.push("/")
            }
        })
    }

    render()
    {
        return (
            <div id="main">
                <img src={gardenLogo} id="garden-logo" alt=""/>
                <h2 className="white text-big">myGarden</h2>
                    <form onSubmit={this.handleOnSubmit} id="log-in-form">
                        <label>Email:</label>
                        <br/>
                        <input type="e-mail" value={this.state.email} onChange={this.handleOnChangeEmail}/>
                        <br/>
                        <label>Password</label>
                        <br/>
                        <input type="password" value={this.state.password} onChange={this.handleOnChangePassword}/>
                        <br />
                        <input type="submit" id="log-in"/>
                        <Link to={"/signup"} id="sign-up">Sign up</Link>
                    </form>
                <div id="footer">
                    <p>© 2020 - myGarden - All Rights Reserved</p>
                </div>
            </div>
        )
    }
}

export default Welcome;