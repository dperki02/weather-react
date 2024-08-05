import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import { ColorRing } from "react-loader-spinner";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import CurrentWeather from "./CurrentWeather";

export default function Weather() {
  const [city, setCity] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [weather, setWeather] = useState({});


  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "502dc8f7ae36e57af1974e18d16a86f8";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
    console.log(`Current weather conditions in ${city}`);
    console.log(apiUrl);
    axios.get(apiUrl).then(displayWeather);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  function displayWeather(response) {
      setLoaded(true);
      setWeather({
        temperature: response.data.main.temp,
        wind: response.data.wind.speed,
        humidity: response.data.main.humidity,
        icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
        description: response.data.weather[0].description,
      });
    }

    let form = (
      <Form
        id="search-form"
        onSubmit={handleSubmit}>
        <InputGroup className="search-input">
          <Form.Control
            placeholder="Enter a city"
            onChange={updateCity}
          />
          <Button
            variant="primary"
            type="submit">
            Submit
          </Button>
        </InputGroup>
      </Form>
    );
  
   if (loaded) {
     return (
       <div className="Weather-app">
         <Container>
           {form}
           <CurrentWeather
             city={city}
             temperature={weather.temperature}
             humidity={weather.humidity}
             wind={weather.wind}
             description={weather.description}
             icon={weather.icon}
           />
         </Container>
       </div>
     );
   } else {
     return (
       <div className="Weather-app">
         <Container>{form}</Container>
         <ColorRing
           visible={true}
           height="120"
           width="120"
           ariaLabel="color-ring-loading"
           wrapperStyle={{}}
           wrapperClass="color-ring-wrapper"
           colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
         />
       </div>
     );
   } 
}
