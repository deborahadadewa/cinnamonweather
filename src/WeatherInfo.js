import React, {useState} from "react";
import ReactAnimatedWeather from 'react-animated-weather';
import WeatherIcon from "./WeatherIcon";
import DateTimeFormat from "./DateTimeFormat";
import Temperature from "./Temperature";


export default function WeatherInfo(props){
    const [overviewVisibility, setOverviewVisibility] = useState(false);

    function showOverview(){
        overviewVisibility ? setOverviewVisibility(false) : setOverviewVisibility(true);

    }
    return(<div className="weatherInfo">

            <h3>{props.weather.city}</h3>

            <WeatherIcon iconId= {props.weather.iconId} />

            <Temperature celsius={props.weather.temperature} />

            <ul>                  
                <li className="description"><h1>{props.weather.description}</h1></li>
                <li><DateTimeFormat date = {props.weather.date}/></li>           
            </ul>

            <button onClick={showOverview}>Toggle overview</button>

            {
            overviewVisibility ?
                 
            <ul className="row overview">
                <li className="col">Humidity: 74%</li>
                <li className="col">Wind: 18 km/h</li>
            </ul> : " "  
            }
           
    </div>);
}