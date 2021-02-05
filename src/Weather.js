import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";

export default function Weather(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      imgUrl: "https://ssl.gstatic.com/onebox/weather/64/cloudy.png",
      wind: response.data.wind.speed,
      city: response.data.name,
    });
  }
function search() {
  const apiKey = "0e7fda8f04980882d2b3cbcbbbb1c0e4";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
  axios.get(apiUrl).then(handleResponse);
}

  function handleSubmit(event) {
   event.preventDefault();
   alert();
  }

function handleCityChange(event){
setCity(event.target.value);

}

  if (weatherData.ready) {
    return (
      
        <div className="Weather">
          <form onSubmit={handleSubmit}>
        
            <div className="row">
              <div className="col-9">
                <input
                  type="search"
                  placeholder="Type a city name"
                  className="form-control"
                  autoFocus="on"
                  autoComplete="off"
                />
              </div>
              <div className="col-3">
                <input
                  type="submit"
                  value="Search"
                  className="btn btn-outline-secondary w-100"
                  onChange={handleCityChange}
                />
              </div>
            </div>
          </form>
          < WeatherInfo  data={weatherData} />
    
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}