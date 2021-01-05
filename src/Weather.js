import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
    const [weatherData, setWeatherData] = useState({ ready: false });
    
    
    function handleResponse(response) {
        console.log(response.data);
        setWeatherData({
        ready: true,
        temperature: response.data.main.temp,
        city: response.data.main.name,
        currently: response.data.weather[0].description,
        date: "Mon, December 28, 2020",
        time: "9:30",
        feelsLike: response.data.main.feels_like,
        low: response.data.main.temp_min,
        humidity: response.data.main.humidity,
        wind: response.data.wind.speed,
        sunrise: response.data.sys.sunrise,
        sunset: response.data.sys.sunset,
        pressure: response.data.main.pressure
        });
    }

    if (weatherData.ready) {
return (
    <div className="Weather">
      <p>
        <span className="today">{weatherData.date}</span>
        <br />
        <span className="time">
          <i className="far fa-clock"></i> {weatherData.time}
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
      <h1 className="searchedCity">{weatherData.city}</h1>
      <hr />
      <br />
      <div className="row">
        <div className="col-4">
          <div className="current-sky">
            <span className="now">{weatherData.currently}</span>
            <br />
            <span className="temperature">
              {" "}
              <strong>{Math.round(weatherData.temperature)}</strong>
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
          <i className="far fa-sun"></i>
        </div>
        <div className="col-5">
          <ul className="main-list">
            <li className="feel">Feels like: {Math.round(weatherData.feelsLike)}°F</li>
            <li className="low">Today's Low: {Math.round(weatherData.low)}°F</li>
            <li className="humidity">Humidity: {weatherData.humidity}%</li>
            <li className="wind">Wind: {Math.round(weatherData.wind)} MPH</li>
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
        <div className="col-4">Sunrise: {weatherData.sunrise}am</div>
        <div className="col-4">Sunset: {weatherData.sunset}pm</div>
        <div className="col-4">Pressure: {weatherData.pressure}</div>
      </div>
      <hr />
    </div>
    );
}else{
    const apiKey = "738213e2d75e5700ee8029528ef19c1a";
    let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading. . .";
  }
}