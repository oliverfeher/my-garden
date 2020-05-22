import React from "react";
import axios from "axios";
import Sunny from "../images/sunny.png"


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
                }
            });
            this.getWeather(response);
        })
    }

    getWeather = (response) =>
    {
        axios.get(`http://dataservice.accuweather.com/currentconditions/v1/${response.data["Key"]}?apikey=uGmVxpNe4u0m8ceDOfkXkmnOFeSyD8tm`)
        .then(response => this.setState({
            weather: {
                temp: response.data[0]["Temperature"]["Imperial"],
                status: response.data[0]["WeatherText"]
            }
        }))
    }

    


    componentDidUpdate = () =>
    {
        this.getLocation();
    }



    render()
    {
        if(this.state.weather)
        {
            return (
                <div id="weather">
                    <p>WEATHER</p>
                    <div id="forecast">
                        <p>{this.state.location.city}</p>
                        <img src={Sunny} className="weather-logo"/>
                        <div id="weather-stats">
                            <p>{this.state.weather.status}</p>
                            <p id="w-temp">{this.state.weather.temp.Value} F</p>
                        </div>
                    </div>
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
            return (
                <div id="weather">
                    <p>WEATHER</p>
                    <h1>LOADING...</h1>
                </div>
            )
        }
    }
}

export default Weather;