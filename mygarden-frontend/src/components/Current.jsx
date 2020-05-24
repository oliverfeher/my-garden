import React from "react";
import NavBar from "./NavBar";
import axios from "axios";
import jwt from "jsonwebtoken";
import GrowingPlant from "./GrowingPlant";

class Current extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            plants: []
        };
    }

    componentDidMount = () =>
    {
        axios.get(`http://localhost:3001/api/users/${jwt.decode(localStorage.token).user_id}`)
        .then(response =>this.setState(
            {
                plants: response.data.plants
            }
        ))
    }

    renderPlants = (obj) =>
    {
        console.log("test")
        return obj.plants.map(plant => <GrowingPlant plant={plant}/> )
    }

    render()
    {
        if(localStorage.token)
        {
            return (
                <>
                    <NavBar/>
                    <div id="plants-container">
                        {this.state.plants ? this.renderPlants(this.state) : <h1>Loading..</h1>}
                    </div>
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