import React, { useState } from "react";
import axios from "axios";
import Main from "./Main/Main";
import Search from "./Main/Search";

export default function Weather() {
  const [weather, setweather] = useState ({});
  function showWeather(response) { 
    setweather({
      city: response.data.name,
      temperature: Math.round(response.data.main.temp),
      description: response.data.weather[0].description,
      realfeel: Math.round(response.data.main.feels_like),
      humidity: response.data.main.humidity,
      windspeed: Math.round(response.data.wind.speed),
      
    })
  }

  function getWeather(position) {
  const apiKey = "ff3fb90c5258ccf0229e6dfb9eb39e40";
    let lat = position.coords.latitude;
    let long = position.coords.longitude;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKey}&units=metric`;


    axios.get(apiUrl).then(showWeather);
  }

  function location() {
    navigator.geolocation.getCurrentPosition(getWeather);
    }
    
    location();

    return (
      <div className="container">
        <h1> Weather App </h1>
        <div className="header">
          <div className="row">
      <div className="col-sm">
        <button id="current-location" onClick={location}>Current Location</button>
          <button id="metric">°C | Km/h</button>
          <button id="imperial">°F | Mp/h</button>
      </div>
      <div className="col-sm">
       <Search />
            </div>
            
    </div>
        </div>
        <Main data={weather} />
                </div>
                
    
    )
}
                 
                    
    