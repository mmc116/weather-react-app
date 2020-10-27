import React from "react";
import Conversion from "./Header/Conversion";
import Search from "./Header/Search";
import Selected from "./Main/Selected";
import Info from "./Main/Info";
import './App.css';


export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1> Weather App </h1>
        <div className="header">
          <div className="row">
      <div className="col-sm">
        <Conversion />
      </div>
      <div className="col-sm">
       <Search />
            </div>
            
    </div>
        </div>
        <div className="main">
            <Selected />
              <Info />
              </div>
      <footer>This project was coded by <a href="https://www.linkedin.com/in/marta-chaves-aa1b271b2/" target="_blank" rel="noopener noreferrer"> Marta Chaves</a> and is open-sourced on <a href="https://github.com/mmc116/weather-react-app" target="_blank" rel="noopener noreferrer"> GitHub </a> . </footer>
      </div>
      </div>
        
  );
}


