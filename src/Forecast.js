import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Forecast.css";
import ForecastDay from "./ForecastDay";


export default function Forecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  let apiKey = "4c6055c670b7ec879ff0e997cefecf2a";
  let latitude = props.coordinates.lat;
  let longitude = props.coordinates.lon;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="Forecast">
        <div className="row">
          {forecast.map(function (dailyForecast, index) {
            if (index < 5) {
              return (
                <div className="col" key={index}>
                  <ForecastDay data={dailyForecast} />
                </div>
              );
            } else {
              return " ";
            }
          })}
        </div>
      </div>
    );
  } else {
    axios.get(apiUrl).then(handleResponse);
    return ("...Loading");
  }
}