import React from "react";
import "./Weather.css"


export default function weather(){
    return(<div className="Weather">
        <form input-group mt-2>
            <input type="search" placeholder="Enter city" />
            <input type="submit" value="Search" />
        </form>

        <h1>Calgary</h1>

        <ul>
            <li> Sunday, 8:00am</li>
            <li className="description">Light rain showers </li>
        </ul>

        <ul className="overview">
            <li>Humidity: 74%</li>
            <li className="description"> Wind: 18 km/h</li>
        </ul>
    </div>);
}