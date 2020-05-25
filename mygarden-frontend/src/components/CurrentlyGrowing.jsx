import React from "react";

const CurrentlyGrowing = (props) =>
{
    console.log(props.plants.length)
    if(props.plants.length > 0)
    {
        return (
            <div id="currently-growing">
                    <h3 id="currently-growing-title">myGarden</h3>
                    <div id="border-mygarden"></div>
                    <p>You currently have <span style={{color: "red", fontSize: "1.4em"}}>{props.plants.length}</span> plants growing.</p>
            </div>
        )
    }
    else
    {
        return (
            <div id="currently-growing">
                    <h3>myGarden</h3>
                    <p>You don't have any plants growing.</p>
            </div>
        )
    }
}

export default CurrentlyGrowing;