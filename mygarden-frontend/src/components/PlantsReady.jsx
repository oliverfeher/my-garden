import React from "react";
import Moment from "moment";


const PlantsReady = (props) =>
{
    if(props.plants.length > 0)
    return (
        <div id="plants-ready">
            <h3>You have <span style={{color: "red", fontSize: "1.4em"}}>{countPlants(props.plants.filter(plant=> plant.status === "planted")).length}</span> plants ready in less than <span style={{color: "green", fontSize: "1.4em"}}>10</span> days.</h3>
            <div id="listed-plants">
                {listPlants(countPlants(props.plants.filter(plant=> plant.status === "planted")))}
            </div>
        </div>
    )
    else
    {
        return (
            <div id="plants-ready">
                <h3>You have <span style={{color: "red", fontSize: "1.4em"}}>0</span> plants.</h3>
            </div>
        )
    }
}

const listPlants = (arr) =>
{
    return arr.map(plant => {
        return <p>- {plant.name}, planted on: {plant.plant_date}</p>
    })
}

const countPlants = (arr) =>
{
    let filtered = arr.filter(plant => getRemainingDays(plant.plant_date, plant.days_to_harvest) < 14);
    return filtered
}

const getRemainingDays = (date, days) =>
{
    let firstDate = Moment(date)
    let secondDate = firstDate.add(days, "days")
    let diffDays = secondDate.diff(Moment(), "days", true);
    return Math.ceil(diffDays);
}

export default PlantsReady;