import React from "react";

import "./Time.css";

export default function Time() {
    let date = new Date();
    
    let hours = date.getHours();
    if (hours < 10) hours = `0${hours}`;
   let minutes = date.getMinutes();
    if (minutes < 10) hours = `0${minutes}`;
    
    
    let weekDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let months = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
  let weekDay = weekDays[date.getDay()];
  let monthDay = date.getDate();
  let month = months[date.getMonth()];
  let year = date.getFullYear();
    
    return (
      <div className="time">
        <h3>
            {hours}:{minutes} {weekDay} 
            <br />
          {monthDay}.{month}.{year}
          </h3>
     </div>
 )
}
