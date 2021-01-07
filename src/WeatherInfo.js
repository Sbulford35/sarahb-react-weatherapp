import React from "react";

export default function WeatherInfo(props) {
    return (
        <div className="WeatherCurrent">
         <h2 className="currently">
          <em>Your current weather in</em>
        </h2>
        <h1 className="searchedCity">{props.data.city}</h1>
        <hr />
        <br />
        <div className="row">
          <div className="col-4">
            <div className="current-sky">
              <span className="now">{props.data.currently}</span>
              <br />
              <span className="temperature">
                {" "}
                <strong>{Math.round(props.data.temperature)}</strong>
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
              <li className="feel">
                Feels like: {Math.round(props.data.feelsLike)}°F
              </li>
              <li className="low">
                Today's Low: {Math.round(props.data.low)}°F
              </li>
              <li className="humidity">Humidity: {props.data.humidity}%</li>
              <li className="wind">Wind: {Math.round(props.data.wind)} MPH</li>
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
          <div className="col-4">Sunrise: {props.data.sunrise}am</div>
          <div className="col-4">Sunset: {props.data.sunset}pm</div>
          <div className="col-4">Pressure: {props.data.pressure}</div>
        </div>
        <hr />
        </div>
    );
}