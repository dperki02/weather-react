import logo from "./logo.svg";
import React from "react";
import "./App.css";
import Weather from "./Weather"

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello from React</h1>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer">
          Learn React
        </a>
        <Weather city="Omaha"/>
      </header>
    </div>
  );
}