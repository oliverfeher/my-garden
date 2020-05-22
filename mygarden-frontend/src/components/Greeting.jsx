import React from "react";

const Greeting = (props) =>
{
    return (
        <div id="greeting">
            <p id="welcome-user">Welcome back, {props.userName}!</p>
            <p id="date">Today's date: {getTodaysDate()}</p>
        </div>
    )
}


// RENDER CURRENT DATE
const getTodaysDate = () => {
    let date = new Date();
    const months = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"];
    let currentDate = ` ${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`;
    return currentDate;
}

export default Greeting;