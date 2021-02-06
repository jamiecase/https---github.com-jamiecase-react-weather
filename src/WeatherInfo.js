import React from "react";
import FormattedData from "./FormattedData";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
export default function WeatherInfo(props) {
  return (
    <div>
      <div className="WeatherInfo">
        <h1>{props.data.city}</h1>
        <ul>
          <li>
            <i>
              <FormattedData date={props.data.date} />
            </i>
          </li>
          <li>{props.data.description}</li>
        </ul>
      </div>
      <div className="row">
        <div className="col-6">
           <div className="float-left">
              <WeatherIcon code={props.data.icon} />
            </div>
            <div className="clearfix current-temperature">
       
            
            <div className="float-right">
            <WeatherTemperature celsius={props.data.temperature} />
            </div>
          </div>
        </div>
        <div className="col-5 humidity-and-wind">
          <ul>
            <li>
              Humidity: <span>{props.data.humidity}</span>%
            </li>
            <li className="wind-li">
              Wind: <span>{Math.round(props.data.wind)}</span> km/h
            </li>
          </ul>
        </div>
      </div>
      <div className="row"></div>
    </div>
  );
}