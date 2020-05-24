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
                    <h3>{plant.name}</h3>
                    <p className="planted-on">planted on</p>
                    <p className="planted-date">{plant.plant_date}</p>
                    <p className="days-to-harvest">days to harvest</p>
                    <p className="days-to">{plant.days_to_harvest}</p>
                    <div classname="harvest-buttons">
                        <button className="harvest-button">harvest</button>
                        <button className="cancel-button">cancel</button>
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