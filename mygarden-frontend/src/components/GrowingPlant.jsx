import React from "react";

const GrowingPlant = (props) =>
{
    return (
        <div className="plant-container">
            <h3>{props.plant.name}</h3>
            <p className="planted-on">planted on</p>
            <p className="planted-date">{props.plant.plant_date}</p>
            <p className="days-to-harvest">days to harvest</p>
            <p className="days-to">{props.plant.days_to_harvest}</p>
            <div classname="harvest-buttons">
                <button className="harvest-button">harvest</button>
                <button className="cancel-button">cancel</button>
            </div>
        </div>
    )
}

export default GrowingPlant;