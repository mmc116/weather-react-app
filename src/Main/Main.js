import React from "react";
import Time from "./Time";


export default function Main(props) {
    return (
        <div className="main">
                <h1 id="city">{props.data.city}</h1>
        <Time />
        <h3 id="temperature">
          {props.data.temperature}°C
        </h3>
        <img src="http://openweathermap.org/img/wn/10d@2x.png" alt="" id="icon" />
        <br />
        <h5 id="description" className="text-capitalize">{props.data.description}</h5>
        <hr />
              <ul className="moreInfo">
          <li id="real-feel">Real Feel: {props.data.realfeel}°c</li>
          <li id="humidity">Humidity: {props.data.humidity}%</li>
          <li id="wind-speed">Wind: {props.data.windspeed} km/h</li>
        </ul>
         </div>
    )
}

