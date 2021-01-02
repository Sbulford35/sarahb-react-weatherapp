import React from "react";
import "./Weather.css";
import "./App.css";
import App from "./App";

export default function Weather() {
  let weatherData = {
    city: "Duryea",
    currently: "Sunny",
    date: "Mon, December 28, 2020",
    time: "9:30",
    temperature: "63",
    feelsLike: "44",
    low: "36",
    humidity: "34",
    wind: "10",
    sunrise: "6:48",
    sunset: "7:02",
    pressure: "Low",
    icon: "fas fa-sun"
  };

  return (
    <div className="Weather">
      <p>
        <span className="today">{weatherData.date}</span>
        <br />
        <span className="time">
          <i className="far fa-clock"></i> Last Updated at {weatherData.time}pm
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
            <span className="mostly">{weatherData.currently}</span>
            <br />
            <span className="temperature">
              {" "}
              <strong>{weatherData.temperature}</strong>
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
            <li className="feel">Feels like: {weatherData.feelsLike}°F</li>
            <li className="low">Today's Low: {weatherData.low}°F</li>
            <li className="humidity">Humidity: {weatherData.humidity}%</li>
            <li className="wind">Wind: {weatherData.wind}mph</li>
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
}