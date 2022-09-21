import React, { useState } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");
  const [res1, setResultArray1] = useState([]);
  const [res2, setResultArray2] = useState([]);
  const [res3, setResultArray3] = useState([]);
  const [res4, setResultArray4] = useState([]);
  const [res5, setResultArray5] = useState([]);
  const APIKEY = "de68f1e62679e41335ce198453b7db51";

  // const url = `https://api.openweathermap.org/data/2.5/weather?id=${location}&&units=metric&APPID=${APIKEY}`;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&&units=metric&APPID=${APIKEY}`;

  const url1 = `https://api.openweathermap.org/data/2.5/weather?id=2735941&&units=metric&APPID=${APIKEY}`; // PORTO
  const url2 = `https://api.openweathermap.org/data/2.5/weather?id=2740636&&units=metric&APPID=${APIKEY}`; // COIMBRA
  const url3 = `https://api.openweathermap.org/data/2.5/weather?id=2267094&&units=metric&APPID=${APIKEY}`; // LEIRIA
  const url4 = `https://api.openweathermap.org/data/2.5/weather?id=2267056&&units=metric&APPID=${APIKEY}`; // LISBOA
  const url5 = `https://api.openweathermap.org/data/2.5/weather?id=2268337&&units=metric&APPID=${APIKEY}`; // FARO

  const r1 = axios.get(url1);
  const r2 = axios.get(url2);
  const r3 = axios.get(url3);
  const r4 = axios.get(url4);
  const r5 = axios.get(url5);

  axios.all([r1, r2, r3, r4, r5]).then(
    axios.spread((...responses) => {
      setResultArray1(responses[0].data);
      setResultArray2(responses[1].data);
      setResultArray3(responses[2].data);
      setResultArray4(responses[3].data);
      setResultArray5(responses[4].data);
    })
  );

  const searchLocation = (event) => {
    if (event.key === "Enter") {
      axios.get(url).then((response) => {
        setData(response.data);
        console.log(response.data);
      });
      setLocation("");
    }
  };

  return (
    <div className="app">
      <div className="search">
        <input
          value={location}
          onChange={(event) => setLocation(event.target.value)}
          onKeyPress={searchLocation}
          placeholder="Enter Location"
          type="text"
        ></input>
      </div>

      <div className="outerContainer">
        <div className="innerContainer">
          <div className="top">
            <div className="location">
              <p>{data.name}</p>
            </div>
            <div className="temp">
              {data.main ? <h1>{data.main.temp.toFixed()}ºC</h1> : null}
            </div>
            <div className="description">
              {data.weather ? (
                <p className="bold">{data.weather[0].main}</p>
              ) : null}
              {data.weather ? <p>{data.weather[0].description}</p> : null}
            </div>
          </div>

          {data.main !== undefined && (
            <div className="bottom">
              <div className="feels">
                {data.main ? (
                  <p className="bold">{data.main.feels_like.toFixed()}ºC</p>
                ) : null}
                <p className="info">Feels Like</p>
              </div>
              <div className="humidity">
                {data.main ? (
                  <p className="bold">{data.main.humidity}%</p>
                ) : null}
                <p className="info">Humidity</p>
              </div>
              <div className="wind">
                {data.main ? (
                  <p className="bold">
                    {(data.wind.speed * 3.6).toFixed(1)} KMH
                  </p>
                ) : null}
                <p className="info">Wind Speed</p>
              </div>
            </div>
          )}
        </div>
        <div className="innerContainer">
          <div className="top">
            <div className="location">
              <p>{data.name}</p>
            </div>
            <div className="temp">
              {data.main ? <h1>{data.main.temp.toFixed()}ºC</h1> : null}
            </div>
            <div className="description">
              {data.weather ? (
                <p className="bold">{data.weather[0].main}</p>
              ) : null}
              {data.weather ? <p>{data.weather[0].description}</p> : null}
            </div>
          </div>

          {data.main !== undefined && (
            <div className="bottom">
              <div className="feels">
                {data.main ? (
                  <p className="bold">{data.main.feels_like.toFixed()}ºC</p>
                ) : null}
                <p className="info">Feels Like</p>
              </div>
              <div className="humidity">
                {data.main ? (
                  <p className="bold">{data.main.humidity}%</p>
                ) : null}
                <p className="info">Humidity</p>
              </div>
              <div className="wind">
                {data.main ? (
                  <p className="bold">
                    {(data.wind.speed * 3.6).toFixed(1)} KMH
                  </p>
                ) : null}
                <p className="info">Wind Speed</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
