import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
    const [ready, setReady] = useState(false);
    const [weatherData, weatherData] = useState(null);
    
    
    function handleResponse(response) {
        console.log(response.data);
        setTemperature(response.data.main.temp);
        setReady(true);
    }

    if (ready) {
return (
    <div className="Weather">
      <p>
        <span className="today">Mon, December 28, 2020</span>
        <br />
        <span className="time">
          <i className="far fa-clock"></i> Last Updated at 9:30pm
        </span>
      </p>
      <form>
        <div className="row">
          <div className="col-6">
            <input
              type="search"
              className="form-control"
              placeholder="Enter city here..."
              autocomplete="off"
            />
          </div>
          <div className="col-3">
            <button type="submit" className="btn btn-primary w-100">
              Search
            </button>
          </div>
          <div className="col-3">
            <button type="submit" className="btn btn-secondary w-100">
              Current
            </button>
          </div>
        </div>
      </form>
      <h2 className="currently">
        <em>Your current weather in</em>
      </h2>
      <h1 className="searchedCity">Duryea</h1>
      <hr />
      <br />
      <div className="row">
        <div className="col-4">
          <div className="current-sky">
            <span className="mostly">Sunny</span>
            <br />
            <span className="temperature">
              {" "}
              <strong>{Math.round(temperature)}</strong>
            </span>
            <span className="units">
              <a href="/" className="active">
                {" "}
                <strong>°F</strong>{" "}
              </a>{" "}
              |{" "}
              <a href="/" className="active">
                {" "}
                <strong>°C</strong>{" "}
              </a>
            </span>
          </div>
        </div>
        <div className="col-3">
          <i className="fas fa-sun" width="150px"></i>
        </div>
        <div className="col-5">
          <ul className="main-list">
            <li className="feel">Feels like: 44°F</li>
            <li className="low">Today's Low: 36°F</li>
            <li className="humidity">Humidity: 34%</li>
            <li className="wind">Wind: 10mph</li>
          </ul>
        </div>
      </div>
      <hr />
      <div className="row">
        <div className="col-4">
           <i className="far fa-sun"></i>
        </div>
        <div className="col-4">
           <i className="far fa-moon"></i>
        </div>
        <div className="col-4">
          <i className="fas fa-thermometer-quarter" width="400px"></i>
        </div>
      </div>
      <div className="row">
        <div className="col-4">Sunrise: 6:48am</div>
        <div className="col-4">Sunset: 7:02pm</div>
        <div className="col-4">Pressure: Low</div>
      </div>
      <hr />
    </div>
    );
}else{
    const apiKey = "738213e2d75e5700ee8029528ef19c1a";
    let city = "Duryea";
    let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading. . .";
  }
}