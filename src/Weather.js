import React from "react";
import "./Weather.css"


export default function weather(){
    return(<div className="Weather">
        <form className="input-group mt-2">
            <input className= "form-control" type="search" placeholder="Enter city" autoFocus/>
            <input type="submit" value="Search" />
        </form>

        <h1>Calgary</h1>

        <ul>
            <li> Sunday, 8:00am</li>
            <li className="description">Light rain showers </li>
        </ul>

        <ul className="row overview">
            <li classsName="col-4">Humidity:74%</li>
            <li className="col-4">Wind:18 km/h</li>
        </ul>
    </div>);
}