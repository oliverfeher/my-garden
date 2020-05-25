import React from "react";
import axios from "axios";
import jwt from "jsonwebtoken";
import NavBar from "./NavBar";
import Garden from "../images/garden.png"

class Plant extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            name: "",
            days: 0,
            date: ""
        }

    }

    handleOnChangeName = (event) =>
    {
        this.setState({
            name: event.target.value
        })
    }

    handleOnChangeDate = (event) =>
    {
        this.setState({
            date: event.target.value
        })
    }

    handleOnChangeDays = (event) =>
    {
        this.setState({
            days: event.target.value
        })
    }

    handleOnSubmit = (event) =>
    {
        event.preventDefault();
        event.persist();
        axios.post(`http://localhost:3001/api/users/${jwt.decode(localStorage.token).user_id}/plant`,
        {
            user: jwt.decode(localStorage.token).user_id,
            plant: this.state
        })
        .then(response => {
            this.props.history.push({
                pathname: "/current",
                state: { user: response.data}
                })
            })
        
    }

    render()
    {
        if(!localStorage.token)
        {
            this.props.history.push("/");
            return null;
        }
        else
        {
            return (
            <>
                <NavBar/>
                <div id="planting-form-container">
                    <img src={Garden} id="form-garden"></img>
                    <form id="planting-form" onSubmit={this.handleOnSubmit}>
                        <label style={{alignSelf: "center", width: "120%"}}className="plants-name">plant's name</label>
                        <input style={{alignSelf: "center", width: "119.5%"}} className="plants-name-input white" type="text" value={this.state.name} onChange={this.handleOnChangeName}/>
                        <label style={{alignSelf: "center", width: "120%"}} className="planted-on">planting date</label>
                        <input style={{alignSelf: "center", width: "119.5%"}} className="planted-date white" type="date" value={this.state.date} onChange={this.handleOnChangeDate}/>
                        <label style={{alignSelf: "center", width: "120%"}} className="days-to-harvest">expected to harvest</label>
                        <input style={{alignSelf: "center", width: "119.5%"}} className="days-to white"type="number" value={this.state.days} onChange={this.handleOnChangeDays}/>
                        <input className="harvest-button" type="submit" value="Plant!" id="plant-button"/>  
                    </form>
                </div>
            </>
            )
        }
    }
}

export default Plant;