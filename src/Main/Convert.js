import React, { useState } from "react";

import "./Convert.css";


export default function Temperature(props) {
    const [temp, setTemp] = useState({});
    const [speed, setSpeed] = useState({});


    function temperature(event) {
        event.preventDefault();
        setTemp({
            fahrenheit: Math.round(props * 9) / 5 + 32,
            celcius: props.temperature,
        }
        )
            }
            
    function windspeed (event) { 
     event.preventDefault();
        setSpeed({
            kmh: props.windspeed,
            mph: Math.round(props.windspeed / 1.609)
        })
     } 
    
    return (
        <div id="convertion-buttons">
            <button id="metric" onClick={[temp.celcius, speed.kmh]}>°C | Km/h</button>
            <button id="imperial" onClick={[temp.fahrenheit, speed.mph]}>°F | Mp/h</button>
      </div>
    )



    }





    

 
 
 
 
 