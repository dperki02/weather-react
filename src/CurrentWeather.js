import React from "react";
import "./CurrentWeather.css";

export default function CurrentWeather(props) {
  let iconUrl = `https://openweathermap.org/img/w/${props.icon}.png`;
  console.log(iconUrl);
  if (props.temperature === "") {
    return;
  } else {
    return (
        <div className="weather">
          <div className="top">
            <div>
              <p className="city">{props.city}</p>
              <p className="weather-description">{props.description}</p>
            </div>
          </div>
          <div className="bottom">
            <p className="temperature">{Math.round(props.temperature)} ºF</p>
            <p className="details">DETAILS</p>

            <p>
              Humidity: <strong>{props.humidity}%</strong>
            </p>
            <p>
              Wind: <strong>{props.wind} km/h</strong>{" "}
            </p>
          </div>
          <img
            className="weather-icon"
            src={props.icon}
            alt="weather icon"
          />
            </div>
    );
  }
}
