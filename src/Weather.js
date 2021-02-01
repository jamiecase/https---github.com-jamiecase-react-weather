
import React,{useState} from "react";
import "./Weather.css";
import axios from "axios";
import FormattedData from "./FormattedData";

export default function Weather() {
  const [weatherdata, setWeatherData] = useState ({ ready: false }) ;

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready:true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: "wednesday 07:00",
      description:response.data.weather[0].description,
      imgUrl: "https://ssl.gstatic.com/onebox/weather/64/cloudy.png",
      wind:response.data.wind.speed,
      city:response.data.name,
    });
    if(weatherData.ready){
     return (
    <div className="App">
      <div className="Weather">
        <form className="mt-2 mb-3">
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Type a city name"
                className="form-control"
                autofocus="on"
                autocomplete="off"
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-outline-secondary w-100"
              />
            </div>
          </div>
        </form>
        <div className="weather-overview">
          <h1>{weatherData.city}</h1>
          <ul>
            <li>
              <i>
                <FormattedDate date= {weatherData.date}/>
              </i>
            </li>
            <li>{weatherData.description}</li>
          </ul>
        </div>
        <div className="row">
          <div className="col-6">
            <div className="clearfix current-temperature">
              <img
                src={weatherData.imgUrl}
                alt={weatherData.description}
                className="float-left"
              />
              <div className="float-left">
                <strong>{weatherData.temperature}</strong>
                <span className="units">
                  <a href="/">°C</a> | <a href="/">°F</a>
                </span>
              </div>
            </div>
          </div>

          <div className="col-5 humidity-and-wind">
            <ul>
              <li>
                Humidity: <span>{weatherData.humidity}</span>%
              </li>
              <li className="wind-li">
                Wind: <span>{weatherData.wind}</span> km/h
              </li>
            </ul>
          </div>
        </div>
        <div className="row"></div>
      </div>
      );
       } else {
        const apiKey ="0e7fda8f04980882d2b3cbcbbbb1c0e4";
        let apiUrl =`https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
        axios.get(apiURL).then(handleResponse);
        return"Loading...";
      }
      
    
      
    </div>
  ); } 

