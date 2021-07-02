import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";


export default function Weather(props){    
    const [city, setCity] = useState(props.defaultCity); 
    const [weather, setWeather] = useState({ready: false});
  

    function handleResponse(response){
        setWeather({            
            temperature: response.data.main.temp,
            wind: response.data.wind.speed,
            humidity: response.data.main.humidity,
            description: response.data.weather[0].description,
            date: new Date(response.data.dt * 1000),
            iconId: response.data.weather[0].icon,
            city: response.data.name, 
            coordinates: response.data.coord,           
            ready: true
        });
    }
    
    function search(){ 
        const apiKey ="4c6055c670b7ec879ff0e997cefecf2a";
        const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        axios.get(url).then(handleResponse);
    }

    function handleSubmit(event){
        event.preventDefault();
        search();
    }

    function updateCity(event){
        setCity(event.target.value);
    }

    if(weather.ready){        
        return(
            <div className="Weather">
                <form className="input-group mt-2 search-form" onSubmit={handleSubmit}>
                    <input className="form-control search-input" type="search" placeholder="Enter city" onChange={updateCity}/>
                    <button className="search-button" type="submit" >
                    <i className="fa fa-search search-button" /></button>   
                </form>

                <WeatherInfo weather={weather}/>
            </div>
        );
    }else{
        search();
        return(<div>
            Loading...
        </div>);
    }

}