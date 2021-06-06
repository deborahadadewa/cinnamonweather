import React from "react";
import "./App.css";
import Weather from "./Weather";


export default function App() {
  return (
    <div className="App">
      <div className= "container">
        <Weather />
        <footer>This app was created by Deborah Botchwey and is <a href="https://github.com/deborahbotchwey/weather-app.git">open-sourced</a></footer>     
      </div>
    </div>
  );
}


