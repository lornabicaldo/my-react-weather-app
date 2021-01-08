import React from "react";
import axios from 'axios';
import ReactAnimatedWeather from 'react-animated-weather';

import SearchForm from "./SearchForm";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="WeatherApp">
     <SearchForm />
    </div>
  )
}