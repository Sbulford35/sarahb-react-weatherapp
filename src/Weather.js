import React, { useState } from "react";
import LiveDate from "./LiveDate";
import WeatherInfo from "./WeatherInfo";
import axios from "axios";
import Loader from "react-loader-spinner";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      city: response.data.name,
      currently: response.data.weather[0].description,
      date: new Date(response.data.dt * 1000),
      feelsLike: response.data.main.feels_like,
      low: response.data.main.temp_min,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      sunrise: new Date(response.data.sys.sunrise * 1000),
      sunset: response.data.sys.sunset,
      pressure: response.data.main.pressure,
    });
  }

function search() {
const apiKey = "738213e2d75e5700ee8029528ef19c1a";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(handleResponse);
}

function handleSubmit(event) {
  event.preventDefault();
  search();
}

function handleCityChange(event) {
setCity(event.target.value);
}

if (weatherData.ready) {
    return (
      <div className="Weather">
        <div>
          <LiveDate date={weatherData.date} />
        </div>
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-6">
              <input
                type="search"
                className="form-control"
                placeholder="Enter city here..."
                autoComplete="off"
                autoFocus="on"
                onChange={handleCityChange}
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
        <WeatherInfo data={weatherData}/>
      </div>
    );
  } else {
search();
    return <Loader type="Rings" color="orange" height={100} width={100} />;
  }
}