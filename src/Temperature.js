import React, {useState} from "react";

export default function Temperature(props){
    const [unit, setUnit] = useState("celsius");

    function showFahrenheit(event){
        event.preventDefault();
        setUnit("fahrenheit");
    }

    function showCelsius(event){
        event.preventDefault();
        setUnit("celsius");
    }
    function fahrenheit(){
        return (props.celsius * 9/5) + 32;
    }

    if(unit === "celsius"){
        return(
            <h2 className="temp">
                {Math.round(props.celsius)}
                <span className="temp-unit">
                    <strong>°C</strong> |<a href="/" onClick={showFahrenheit}>°F</a>
                </span> 
            </h2>
        ); 
    }else{        
        return(
            <h2 className="temp">
                {Math.round(fahrenheit())}
                <span className="temp-unit">
                    <a href="/" onClick={showCelsius}>°C</a> |<strong>°F</strong>
                </span> 
            </h2>
        );
    }

}