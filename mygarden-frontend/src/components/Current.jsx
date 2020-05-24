import React from "react";
import NavBar from "./NavBar";
import axios from "axios";
import jwt from "jsonwebtoken";

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
        return obj.plants.map(plant => {
            return (
                <div className="plant-container">
                    <p>{plant.name}</p>
                    <p>planted on</p>
                    <p>{plant.plant_date}</p>
                    <p>days to harvest</p>
                    <p>{plant.days_to_harvest}</p>
                    <div>
                        <button>harvest</button>
                        <button>cancel</button>
                    </div>
                </div>
            )
        })
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