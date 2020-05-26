import React from "react";

const HistoryPlant = props =>
{
    return (
        <div className="history-plant">
            <p>{props.plant.name.toUpperCase()}</p>
            <p><span style={{color: "#E2AD59"}}>Planted on: </span>{props.plant.plant_date}</p>
            <p>Status: <span style={{color: "green"}}>{props.plant.status}</span></p>
        </div>
    )
}

export default HistoryPlant;