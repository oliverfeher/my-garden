import React from "react";
import axios from "axios";
import jwt from "jsonwebtoken";
import NavBar from "./NavBar";
import { Redirect } from "react-router-dom";

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

        // const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
        // const firstDate = new Date(response.data.plants[0].plant_date.replace("-", ","));
        // const secondDate = new Date(firstDate.getDate()+response.data.plants[0].days_to_harvest);

        // const diffDays = Math.round(Math.abs((firstDate - secondDate) / oneDay));
        
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
                    <form id="planting-form" onSubmit={this.handleOnSubmit}>
                        <label>plant's name</label>
                        <input type="text" value={this.state.name} onChange={this.handleOnChangeName}/>
                        <label>planting date</label>
                        <input type="date" value={this.state.date} onChange={this.handleOnChangeDate}/>
                        <label>expected to harvest</label>
                        <input type="number" value={this.state.days} onChange={this.handleOnChangeDays}/>
                        <input type="submit"/>  
                    </form>
                </div>
            </>
            )
        }
    }
}

export default Plant;