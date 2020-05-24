import React from "react";
import Veggies from "../images/veggies.png"

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
    const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
    const firstDate = new Date(date.replace("-", ","));
    let secondDate = new Date();
    secondDate.setDate(firstDate.getDate() + days)
    // debugger;
    const diffDays = Math.round(Math.abs((firstDate - secondDate) / oneDay));
    return diffDays;
}

export default GrowingPlant;