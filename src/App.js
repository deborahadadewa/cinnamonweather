import React from "react";
import "./App.css";
import Weather from "./Weather";
import 'font-awesome/css/font-awesome.min.css';
import CinnamonWeatherLogo from "./images/cinnamonWeatherLogo.png";



export default function App() {
  return (
    <div className="App fade-in">
      <div className="container">
        <h3 className="title">Cinnamon <img src={CinnamonWeatherLogo} alt="Cinnamon Weather Logo" align="middle" style={{ width: "5.5rem" }} /> Weather</h3>

        <Weather defaultCity="Tema" />
        <footer>This app was created by Deborah Botchwey and is <a href="https://github.com/deborahbotchwey/cinnamonweather.git" className="App">open-sourced</a></footer>
      </div>
    </div>
  );
}


