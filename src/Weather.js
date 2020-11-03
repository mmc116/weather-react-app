import React, { useState } from "react";
import axios from "axios";
import Time from "./Main/Time"
import Conversion from "./Main/Conversion";


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
        <Conversion data={Weather} />
        </div>
       
     
        
    )

  } else {
    return (
      <div className="container">
        <div className="header">
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
        <Conversion data={Weather} />
            </div> 
      
    )
      
  }
  }
 
  

  
    
       
                 
                    
    