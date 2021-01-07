import React from "react";
import axios from 'axios';
import ReactAnimatedWeather from 'react-animated-weather';

export default function Weather(props) {

    function updateWeather(response) {
       alert(`The weather in ${props.city} is ${response.data.main.temp}°C`);
    }

    let apiKey = "8faad2c6827a8ece72c2320ecccefbdb";
      let units = "metric";
      let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=${units}`;

      axios.get(apiUrl).then(updateWeather);
    
    return (
  <ReactAnimatedWeather
    icon='CLEAR_DAY'
    color='yellow'
    size= '200'
    animate='true'
  />
    );
}