import React from 'react';

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

    render()
    {
        return (
            <form>
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