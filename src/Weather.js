import React from "react";
import axios from 'axios';
import ReactAnimatedWeather from 'react-animated-weather';

import "./Weather.css";

export default function Weather() {
  return (
    <form className="form-control">
      <input type="search" placeholder="Search a city.." className="search-button" />
      <input type="Submit" value="Search" className="submit-button" />
    </form>
  )
}