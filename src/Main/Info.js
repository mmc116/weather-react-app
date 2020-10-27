import React from "react";

import "./Info.css";


export default function Info() {
    return (
        <div className="info">
      <h5 id="description">Rainy</h5>
      <hr />
      <ul className="moreInfo">
        <li id="real-feel">Real Feel: 18°c</li>
        <li id="humidity">Humidity: 15%</li>
        <li id="wind-speed">Wind: 16 km/h</li>
            </ul>
        </div>
    )
}

