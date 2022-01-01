import React from "react";
import "./App.css";
import Weather from "./Weather";
import 'font-awesome/css/font-awesome.min.css';



export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Tema" />
        <footer>This app was created by Deborah Botchwey and is <a href="https://github.com/deborahbotchwey/react-weather-app.git" className="App">open-sourced</a></footer>
      </div>
    </div>
  );
}


