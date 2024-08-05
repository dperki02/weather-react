import React from "react";
import "./App.css";
import Weather from "./Weather";
import akasa from "./akasalogo.png";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello from Weather App </h1>
        <img
          className="App-logo"
          src={akasa}
          alt="Akasa"
        />
        <Weather />
        <div className="App-footer">
          This project was coded by
          <a
            href="https://github.com/dperki02/"
            target="_blank"
            rel="noopener noreferrer">
            {" "}
            Dana Paulette Perkins
          </a>{" "}
          and is
          <a
            href="https://github.com/dperki02/tiempo"
            target="_blank"
            rel="noopener noreferrer">
            {" "}
            open-sourced on Github
          </a>{" "}
          and website hosted on
          <a
            href="https://asaka-tiempo.netlify.app/"
            target="_blank"
            rel="noopener noreferrer">
            {" "}
            Netlify
          </a>
        </div>
      </header>
    </div>
  );
}
