import React from "react";
import axios from 'axios';
import ReactAnimatedWeather from 'react-animated-weather';

export default function Weather() {
  return (
    <form>
      <input type="search" placeholder="Search a city.." />
      <input type="Submit" value="Search" />
    </form>
  )
}