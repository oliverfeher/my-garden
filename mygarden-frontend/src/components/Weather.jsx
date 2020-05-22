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
        .then(response => this.setState({
            weather: {
                temp: response.data[0]["Temperature"]["Imperial"],
                status: response.data[0]["WeatherText"]
            }
        }))
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
        if(this.state.weather)
        {
            return (
                <div id="weather">
                    <p>You live in: {this.state.location.city}</p>
                    <p>It is {this.state.weather.status} currently!</p>
                    <p>Current temperature is: {this.state.weather.temp.Value} F</p>
                </div>
            )
        }
        else if(this.state.location)
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