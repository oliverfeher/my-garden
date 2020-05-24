import Sunny from "../images/sunny.png"
import Rainy from "../images/storm.png"
import Cloudy from "../images/sky.png"
import DefaultWeather from "../images/clear.png"
import React from "react";

const WeatherLogo = (state) =>
{
        if(state.weather.status.toLowerCase().includes("rain"))
        {
            return (
                <div id="forecast" style={{backgroundColor: "#0C4B94"}}>
                        <p>{state.location.city}</p>
                        <img src={Rainy} className="weather-logo"/>
                        <div id="weather-stats">
                            <p id="w-status">{state.weather.status}</p>
                            <p id="w-temp">{state.weather.temp.Value} F</p>
                        </div>
                </div>
            )
            
        }
        else if(state.weather.status.toLowerCase().includes("sun"))
        {
            return (
                <div id="forecast" style={{backgroundColor: "#FFA200"}}>
                        <p>{state.location.city}</p>
                        <img src={Sunny} className="weather-logo"/>
                        <div id="weather-stats">
                            <p id="w-status">{state.weather.status}</p>
                            <p id="w-temp">{state.weather.temp.Value} F</p>
                        </div>
                </div>
            )
            
        }
        else if(state.weather.status.toLowerCase().includes("cloud"))
        {
            return (
                <div id="forecast" style={{backgroundColor: "#717171"}}>
                        <p>{state.location.city}</p>
                        <img src={Cloudy} className="weather-logo"/>
                        <div id="weather-stats">
                            <p id="w-status">{state.weather.status}</p>
                            <p id="w-temp">{state.weather.temp.Value} F</p>
                        </div>
                </div>
            )
        }
        else
        {
            return (
                <div id="forecast" style={{backgroundColor: "#8083E0"}}>
                        <p>{state.location.city}</p>
                        <img src={DefaultWeather} className="weather-logo"/>
                        <div id="weather-stats">
                            <p id="w-status">{state.weather.status}</p>
                            <p id="w-temp">{state.weather.temp.Value} F</p>
                        </div>
                </div>
            )
        }
}

export default WeatherLogo;