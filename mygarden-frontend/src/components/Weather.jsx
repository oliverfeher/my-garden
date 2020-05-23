import React from "react";
import axios from "axios";
import WeatherLogo from "../helpers/WeatherLogo";
import Loading from "../images/loading.gif";


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
        }).then(data => data)
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

    
    componentDidMount = () =>
    {
        if(this.props.location)
        {
            this.getLocation();
        }
    }

    componentDidUpdate = () =>
    {
        if(!this.state.weather)
        {    
            this.getLocation();
        }
    }
    

    render()
    {

        if(this.state.weather)
        {
            return (
                <div id="weather">
                    <p id="weather-title">WEATHER</p>
                    {WeatherLogo(this.state)}
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
                    <br/>
                    <img src={Loading}/>
                </div>
            )
        }
    }
}

export default Weather;