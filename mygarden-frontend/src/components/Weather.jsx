import React from "react";
import axios from "axios";


class Weather extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {};
    }

    getLocation = () =>
    {
        axios.get(`http://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=uGmVxpNe4u0m8ceDOfkXkmnOFeSyD8tm&q=${this.props.location.lat}%2C${this.props.location.lon}`)
        .then(response => { 
          this.setState({
              location: {
                city: response.data["EnglishName"],
                key: response.data["Key"]
                }
            });
        })
    }

    getWeather = () =>
    {
        axios.get(`http://dataservice.accuweather.com/currentconditions/v1/${this.state.location.key}?apikey=uGmVxpNe4u0m8ceDOfkXkmnOFeSyD8tm`)
        .then(response => console.log(response))
    }


    componentDidUpdate = () =>
    {
        this.getWeather();
    }
    componentDidMount = () =>
    {
        this.getLocation();
    }

    render()
    {
        if(this.state.location)
        {
            return (
                <div>
                    <p>You live in: {this.state.location.city}</p>
                </div>
            )
        }
        else
        {
            return <p>loading..</p>
        }
    }
}

export default Weather;