import React from 'react';
import axios from "axios";

class History extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            plants: []
        }
    }

    render()
    {
        return (
            <div>History comp</div>
        )
    }
}

export default History;