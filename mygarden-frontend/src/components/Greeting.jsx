import React from "react";
import getTodaysDate from "../helpers/CurrentDate";

const Greeting = (props) =>
{
    return (
        <div id="greeting">
            <p id="welcome-user">Welcome back, {props.userName}!</p>
            <p id="date">{getTodaysDate()}</p>
        </div>
    )
}


export default Greeting;