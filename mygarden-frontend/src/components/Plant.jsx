import React from "react";
import axios from "axios";

class Plant extends React.Component
{
    constructor(props)
    {
        super(props);

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
            return <div>Planting</div>
        }
    }
}

export default Plant;