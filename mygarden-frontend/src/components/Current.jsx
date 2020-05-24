import React from "react";
import NavBar from "./NavBar";
import axios from "axios";
import jwt from "jsonwebtoken";

class Current extends React.Component
{
    constructor(props)
    {
        super(props);
    }

    componentDidMount = () =>
    {
        axios.get(`http://localhost:3001/api/users/${jwt.decode(localStorage.token).user_id}`)
        .then(response => console.log(response))
    }

    render()
    {
        if(localStorage.token)
        {
            return (
                <>
                    <NavBar/>
                    <div></div>
                </>
            )
        }
        else
        {
            this.props.history.push("/");
        }
    }
}

export default Current;