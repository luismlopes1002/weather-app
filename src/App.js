import React, { userState } from "react";
import axios from "axios";

function App() {
  //const url = 'https://api.openweathermap.org/data/2.5/weather?id=2267056&APPID=de68f1e62679e41335ce198453b7db51'

  return (
    <div className="app">
      <div className="container">
        <div className="top">
          <div className="location">
            <p>Lisbon</p>
          </div>
          <div className="temp">
            <h1>27ºC</h1>
          </div>
          <div className="description">
            <p>Clouds</p>
          </div>
        </div>
        <div className="bottom">
          <div className="feels">
            <p className="bold">27ºC</p>
            <p>Feels Like</p>
          </div>
          <div className="humidity">
            <p className="bold">57%</p>
            <p>Humidity</p>
          </div>
          <div className="wind">
            <p className="bold">11 KMH</p>
            <p>Wind Speed</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
