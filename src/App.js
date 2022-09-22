import React, { useState } from "react";
import axios from "axios";

function App() {
  const [res, setResultArray] = useState([]);
  const APIKEY = "de68f1e62679e41335ce198453b7db51";

  // const url1 = `https://api.openweathermap.org/data/2.5/weather?id=2735941&units=metric&APPID=${APIKEY}`; // PORTO
  // const url2 = `https://api.openweathermap.org/data/2.5/weather?id=2740636&units=metric&APPID=${APIKEY}`; // COIMBRA
  // const url3 = `https://api.openweathermap.org/data/2.5/weather?id=2267094&units=metric&APPID=${APIKEY}`; // LEIRIA
  // const url4 = `https://api.openweathermap.org/data/2.5/weather?id=2267056&units=metric&APPID=${APIKEY}`; // LISBOA
  // const url5 = `https://api.openweathermap.org/data/2.5/weather?id=2268337&units=metric&APPID=${APIKEY}`; // FARO

  const url1 = `https://api.openweathermap.org/data/2.5/weather?APPID=${APIKEY}&units=metric&q=PORTO`;
  const url2 = `https://api.openweathermap.org/data/2.5/weather?APPID=${APIKEY}&units=metric&q=COIMBRA`;
  const url3 = `https://api.openweathermap.org/data/2.5/weather?APPID=${APIKEY}&units=metric&q=LEIRIA`;
  const url4 = `https://api.openweathermap.org/data/2.5/weather?APPID=${APIKEY}&units=metric&q=LISBOA`;
  const url5 = `https://api.openweathermap.org/data/2.5/weather?APPID=${APIKEY}&units=metric&q=FARO`;

  const r1 = axios.get(url1);
  const r2 = axios.get(url2);
  const r3 = axios.get(url3);
  const r4 = axios.get(url4);
  const r5 = axios.get(url5);

  function getData() {
    axios.all([r1, r2, r3, r4, r5]).then(
      axios.spread((...responses) => {
        setResultArray(responses);
      })
    );
  }

  return (
    <div className="app">
      <div className="search">
        <button onClick={getData}>get data</button>
      </div>

      <div className="outerContainer">
        {/* {res[1].data.main !== undefined && (
          
        )} */}
        {res.map((obj) => (
          <div className="innerContainer" key={obj.data.id}>
            <div className="top">
              <div className="location">
                <p>{obj.data.name}</p>
              </div>
              <div className="temp">
                {obj.data.main ? (
                  <h1>{obj.data.main.temp.toFixed()}ºC</h1>
                ) : null}
              </div>
              <div className="description">
                {obj.data.weather ? (
                  <p className="bold">{obj.data.weather[0].main}</p>
                ) : null}
                {obj.data.weather ? (
                  <p>{obj.data.weather[0].description}</p>
                ) : null}
              </div>
            </div>

            <div className="bottom">
              <div className="feels">
                {obj.data.main ? (
                  <p className="bold">{obj.data.main.feels_like.toFixed()}ºC</p>
                ) : null}
                <p className="info">Feels Like</p>
              </div>
              <div className="humidity">
                {obj.data.main ? (
                  <p className="bold">{obj.data.main.humidity}%</p>
                ) : null}
                <p className="info">Humidity</p>
              </div>
              <div className="wind">
                {obj.data.main ? (
                  <p className="bold">
                    {(obj.data.wind.speed * 3.6).toFixed(1)} KMH
                  </p>
                ) : null}
                <p className="info">Wind Speed</p>
              </div>
            </div>
          </div>
        ))}
        {/* {res1.main !== undefined && (
          
        )} */}
      </div>
    </div>
  );
}

export default App;
