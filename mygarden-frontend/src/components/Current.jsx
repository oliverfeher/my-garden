import React from "react";
import NavBar from "./NavBar";
import axios from "axios";
import jwt from "jsonwebtoken";
import GrowingPlant from "./GrowingPlant";
import { Link } from "react-router-dom";

class Current extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            plants: []
        };
    }
    
    handleOnCancelClick = event =>
    {
        axios.delete(`http://localhost:3001/api/users/${jwt.decode(localStorage.token).user_id}/plants/${event.target.getAttribute('data-set')}`)
        .then(response => console.log(response));
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

    // RENDER EXISTING PLANTS THAT ARE CURRENTLY GROWING
    renderPlants = (obj) =>
    {
        return obj.plants.map(plant => <GrowingPlant plant={plant} key={plant.id} plantId={plant.id} handleOnCancelClick={this.handleOnCancelClick}/> )
    }

    render()
    {
        if(localStorage.token)
        {
            if(this.state.plants.length === 0)
            {
                return (
                    <>
                        <NavBar/>
                        <h1 id="no-plants-yet">You don't have any plants yet!</h1>
                        <h3>Let's go <Link id="plant-some" to={"/plant"}>plant</Link> some!</h3>
                    </>
                )
            }
            else
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
        }
        else
        {
            this.props.history.push("/");
        }
    }
}

export default Current;