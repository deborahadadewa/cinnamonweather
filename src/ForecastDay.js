import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function ForecastDay(props) {

  function maxTemperature() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}°`;
  }

  function minTemperature() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}°`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);

    let days = ["Sun", "Mon", "Tues", "Wed", "Thur", "Fri", "Sat"];
    let day = date.getDay();

    return days[day];
  }

  return (
    <div>
      <div className="Forecast-day">{day()}</div>
      <WeatherIcon iconId={props.data.weather[0].icon} size={45} />
      <div className="Forecast-temperatures">
        <span className="hi">{maxTemperature()}</span>
        <span className="lo">{minTemperature()}</span>
      </div>
    </div>
  );
}