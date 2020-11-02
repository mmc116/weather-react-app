import React, { useState } from "react";
import axios from "axios";
import Time from "./Main/Time"
import Convert from "./Main/Convert";

import "./weather.css";

export default function Weather() {
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
      windspeed: Math.round(response.data.wind.speed),
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
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
    
  if (loaded) {
    return (
      <div className="container">
        <div className="header">
          <div className="row">
            <div className="col-sm">
              <Convert data={setInfo}/>
            </div>
            <div className="col-sm">
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
            </div>
      <div className="main">
        <h1 id="city">{info.city}</h1>
        <Time />
        <h3 id="temperature">
          {info.temperature}°C
        </h3>
              <img src={info.icon} alt="" id="icon" />
        <br />
        <h5 id="description" className="text-capitalize">{info.description}</h5>
        <hr />
        <ul className="moreInfo">
          <li id="real-feel">Real Feel: {info.realfeel}°c</li>
          <li id="humidity">Humidity: {info.humidity}%</li>
          <li id="wind-speed">Wind: {info.windspeed} km/h</li>
        </ul>
            </div>
          </div>
        </div>
        </div>
    )

  } else {
    return (
      <div className="container">
        <div className="header">
          <div className="row">
            <div className="col-sm">
              <button id="metric">°C | Km/h</button>
              <button id="imperial">°F | Mp/h</button>
            </div>
            <div className="col-sm">
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
            </div>
            <div className="main">
        <h1 id="city">Lisbon</h1>
        <Time />
        <h3 id="temperature">
          20°C
        </h3>
        <img src={info.icon} alt="" id="icon" />
        <br />
        <h5 id="description" className="text-capitalize">Cloudy</h5>
        <hr />
        <ul className="moreInfo">
          <li id="real-feel">Real Feel: 19°c</li>
          <li id="humidity">Humidity: 60%</li>
          <li id="wind-speed">Wind: 2 km/h</li>
        </ul>
      </div>
          </div>
        </div>
      </div>
    )
      
  }
  }
 
  

  
    
       
                 
                    
    