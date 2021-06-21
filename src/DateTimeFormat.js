import React from "react";

export default function DateTimeFormat(props){

    function addZeroes(num){
        return ( num < 10 ? `0{num}` : num );
    }

    function TwelveHourTime(hours){
        
        hours = hours % 12;

        if(hours === 0){
            hours = 12;
        }

        return hours;
    }

    let days = [ 
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday", 
        "Thursday", 
        "Friday", 
        "Saturday"
    ];

    let day = days[props.date.getDay()];
    let hour = addZeroes(props.date.getHours());
    let AmOrPm = (hour >= 12) ? "PM" : "AM";
    hour = TwelveHourTime(hour);

    let minutes = addZeroes(props.date.getMinutes());
// "Sunday, 4:25pm"
    return(<p>{day}, {hour}:{minutes} {AmOrPm}</p>);
}
