import React from "react";
import ReactAnimatedWeather from 'react-animated-weather';
import WeatherIcon from "./WeatherIcon";
import DateTimeFormat from "./DateTimeFormat";


export default function weatherInfo(props){
    return(<div className="weatherInfo">

            {/* weather info start */}
            <h3>{props.weather.city}</h3>

            <WeatherIcon iconId= {props.weather.iconId} />

            <h2 className="temp">{Math.round(props.weather.temperature)}<span><a href="/">°C</a> |<a href="/">°F</a></span> </h2>
            <ul>                  
                <li className="description"><h1>{props.weather.description}</h1></li>
                <li><DateTimeFormat date = {props.weather.date}/></li>           
            </ul>

            {/* 
            <ul className="row overview">
                <li className="col">Humidity: 74%</li>
                <li className="col">Wind: 18 km/h</li>
            </ul>  */}
           
    </div>);
}