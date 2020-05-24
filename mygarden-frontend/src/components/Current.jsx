import React from "react";
import NavBar from "./NavBar";

class Current extends React.Component
{
    constructor(props)
    {
        super(props);
    }

    render()
    {
        if(this.props.location.state)
        
        {
            return (
                <>
                    <NavBar/>
                    <div></div>
                </>
            )
        }
        else
        {
            return (
                <>
                    <NavBar/>
                    <div></div>
                </>
            )
        }
    }
}

export default Current;