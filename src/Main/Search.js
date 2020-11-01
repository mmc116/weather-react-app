import { useState } from "react";
import React from "react";
import axios from "axios";
import Time from "./Time"


export default function Search() {
  const [city, setCity] = useState("");
  const [info, setInfo] = useState({});
  const [loaded, setLoaded] = useState(false)
    
  function showCity(response) {
    setLoaded(true);
    setInfo({
      city: response.data.name,
      temperature: Math.round(response.data.main.temp),
      description: response.data.weather[0].description,
      realfeel: Math.round(response.data.main.feels_like),
      humidity: response.data.main.humidity,
      windspeed: Math.round(response.data.wind.speed)
    });
  }
  
  function searchCity(event) {
    event.preventDefault();
    const apiKey = "ff3fb90c5258ccf0229e6dfb9eb39e40";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showCity);
  };

  function cityChange(event) {
    setCity(event.target.value)
  };
    
 let engine = (
    <div className="search">
      <form onSubmit={searchCity}>
        <input
          type="search"
          id="search-input"
          placeholder="Search City"
          autocomplete="off"
          onChange={cityChange}
        />
        <button id="search-button"><i class="fas fa-search"></i></button>
      </form>
    </div>
  );

  if (loaded) {
    return (
        <div className="main">
                <h1 id="city">{info.city}</h1>
        <Time />
        <h3 id="temperature">
          {info.temperature}°C
        </h3>
        <img src="http://openweathermap.org/img/wn/10d@2x.png" alt="" id="icon" />
        <br />
        <h5 id="description" className="text-capitalize">{info.description}</h5>
        <hr />
              <ul className="moreInfo">
          <li id="real-feel">Real Feel: {info.realfeel}°c</li>
          <li id="humidity">Humidity: {info.humidity}%</li>
          <li id="wind-speed">Wind: {info.windspeed} km/h</li>
        </ul>
         </div>
    )

  } else {
    return engine;
 }
  }