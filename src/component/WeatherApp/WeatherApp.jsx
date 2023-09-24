import React from 'react';
import './WeatherApp.css';
import sun_icon from '../Assets/sun.png';
import clouds_icon from '../Assets/clouds.png';
import fog_icon from '../Assets/fog.png';
import rain_icon from '../Assets/rain.png';
import snow_icon from '../Assets/snow.png';
import storm_icon from'../Assets/storm.png';
import sun_cloud_icon from '../Assets/sun&cloud.png';
import sun_rain_icon from '../Assets/sun&rain.png';
import wind_icon from '../Assets/wind.png';
import humidity_icon from '../Assets/humidity.png';
import search_icon from '../Assets/search.png';

const WeatherApp = () => {
  return (
    <div className='container'>
      <div className='top-bar'>
        <input type="text" className='cityInput' placeholder='Search' />
        <div className="search-icon">
          <img src={search_icon} alt="" />
        </div>
      </div>
      <div className="weather-image">
        <img src={clouds_icon} alt="" />
      </div>
      <div className="weather-temp">24°c</div>
      <div className="weather-location">London</div>
      <div className="data-container">
        <div className="element">
          <img src={humidity_icon} alt="" className="icon" />
          <div className="data">
            <div className="humidity-percent">64%</div>
            <div className="text">Humidity</div>
          </div>
        </div>
        <div className="element">
          <img src={wind_icon} alt="" className="icon" />
          <div className="data">
            <div className="humidity-percent">18 km/h</div>
            <div className="text">Wind Speed</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WeatherApp;
