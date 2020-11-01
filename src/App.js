import React from "react";
import Weather from "./Weather";

import './App.css';

export default function App() {
  return (
    <div className="App">

      

      <Weather />
      <div className="Footer>">
        <footer className="git">
          This project was coded by <a href="https://www.linkedin.com/in/marta-chaves-aa1b271b2/" target="_blank" rel="noopener noreferrer"> Marta Chaves</a> and is open-sourced on <a href="https://github.com/mmc116/weather-react-app" target="_blank" rel="noopener noreferrer"> GitHub </a> .
      </footer>

        <footer className="photo">
          Photo by
        <a
            href="https://unsplash.com/@claybanks?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText"
            target="_blank"
            rel="noopener noreferrer"
          >
            Clay Banks
        </a>
        on
        <a
            href="https://unsplash.com/s/photos/japan?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText"
            target="_blank"
            rel="noopener noreferrer"
          >
            Unsplash
        </a>
        </footer>
      </div>
    </div>
     
      
        
  );

}