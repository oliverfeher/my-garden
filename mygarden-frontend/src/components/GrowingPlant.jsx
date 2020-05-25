import React from "react";
import Veggies from "../images/veggies.png"
import Moment from "moment";

const GrowingPlant = (props) =>
{
    return (
        <div className="plant-container">
            <img src={Veggies} className="veggie-logo"/>
            <h3>{props.plant.name}</h3>
            <p className="planted-on">planted on</p>
            <p className="planted-date white">{props.plant.plant_date}</p>
            <p className="days-to-harvest">days to harvest</p>
            <p className="days-to white">{getRemainingDays(props.plant.plant_date, props.plant.days_to_harvest)} days</p>
            <div className="harvest-buttons">
                <button className="harvest-button">harvest</button>
                <button className="cancel-button">cancel</button>
            </div>
        </div>
    )
}

// COUNT REMAINING DAYS BASED ON USER INPUT PLUS TODAYS DATE
const getRemainingDays = (date, days) =>
{
    let firstDate = Moment(date)
    let secondDate = firstDate.add(days, "days")
    let diffDays = secondDate.diff(Moment(), "days", true);
    return Math.floor(diffDays);
}

export default GrowingPlant;