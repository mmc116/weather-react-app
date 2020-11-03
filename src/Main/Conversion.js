import React, { useState } from "react";
import Time from "./Time";

import "./Conversion.css";


export default function Conversion(props) {
    const [metric, setMetric] = useState({});
    const [imperial, setImperial] = useState({});

    function metricUnit(event) {
        event.preventDefault();
        setMetric({
            celcius: props.data.temperature,
            kmh: props.data.windspeed,
            realfeel: props.data.realfeel
        });
        return (
            <div className="main">
                <h1 id="city">{props.data.city}</h1>
                <Time />
                <h3 id="temperature">
                    {metric.celcius} °C|<a href="/" onClick={imperialUnit}>°F</a>
                </h3>
                <img src={props.data.icon} alt="" id="icon" />
                <br />
                <h5 id="description" className="text-capitalize">{props.data.description}</h5>
                <hr />
                <ul className="moreInfo">
                    <li id="real-feel">Real Feel: {metric.realfeel}°c</li>
                    <li id="humidity">Humidity: {props.data.humidity}%</li>
                    <li id="wind-speed">Wind: {metric.kmh} km/h</li>
                </ul>
            </div>
        )
    }

    function imperialUnit(event) {
        event.preventDefault();
        setImperial({
            fahrenheit: (props.data.temperature * 9) / 5 + 32,
            mph: props.data.windspeed / 1.609,
            realfeel: (props.data.realfeel* 9) / 5 + 32

        })
        return (
            <div className="main">
                <h1 id="city">{props.data.city}</h1>
                <Time />
                <h3 id="temperature">
                    {imperial.fahrenheit} <a href="/" onClick={metricUnit}>°C</a>|°F
                </h3>
                <img src={props.data.icon} alt="" id="icon" />
                <br />
                <h5 id="description" className="text-capitalize">{props.data.description}</h5>
                <hr />
                <ul className="moreInfo">
                    <li id="real-feel">Real Feel: {imperial.realfeel}°c</li>
                    <li id="humidity">Humidity: {props.data.humidity}%</li>
                    <li id="wind-speed">Wind: {imperial.mph} km/h</li>
                </ul>
            </div>
        )
    }
    
      
   }
    



    




 


   
    



