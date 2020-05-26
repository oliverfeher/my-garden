import React from 'react';
import axios from "axios";
import jwt from "jsonwebtoken";
import NavBar from "./NavBar";
import HistoryPlant from "./HistoryPlant";


class History extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            plants: []
        }
    }

    componentDidMount = () =>
    {
        axios.get(`http://localhost:3001/api/users/${jwt.decode(localStorage.token).user_id}`)
        .then(response =>this.setState(
            {
                plants: response.data.plants.filter(plant=> plant.status === "harvested")
            }
        ))
    }

    renderPlants = () =>
    {
        return this.state.plants.map(plant => <HistoryPlant plant={plant} />)
    }

    render()
    {
        return (
            <>
                <NavBar/>
                <div id="history-comp">
                    <div style={{backgroundColor: "white", borderRadius: "25px",
                padding: "1% 20% 1% 20%", margin: "2% 0 2% 0", }}>
                        <h1 style={{color: "black", fontSize: "2.5em"}}>Plant History</h1>
                    </div>
                    <div id="history-plant-container">
                        {this.renderPlants()}
                    </div>
                </div>
            </>
        )
    }
}

export default History;