import React from "react";


class Weather extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {};
    }

    getLocation = () =>
    {
        console.log(this.state)
        // axios.get(`http://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=uGmVxpNe4u0m8ceDOfkXkmnOFeSyD8tm&q=${coords.location.latitude}%2C${coords.location.longitude}`)
        // .then(response => { 
        //   this.setState({location: response.data["EnglishName"]});
        // })
    }

    render()
    {
        return (
            <div>
                <p>{this.props.location.lat}</p>
                <p>{this.props.location.lon}</p>
            </div>
        )
    }
}

export default Weather;