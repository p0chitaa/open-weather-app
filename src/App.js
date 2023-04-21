import React, { useState } from 'react';
import axios from 'axios';
import HourlyForecast from './components/HourlyForecast';
import SearchIcon from '@mui/icons-material/Search';
import WeeklyForecast from "./components/WeeklyForecast";


function App() {

  return (
    <div className="App">
      <div id="wrapper" className="overflow-y-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide">
        <div className="head">
          <div className="city">
              <p id="city">Detroit</p>
          </div>
          <p className="main-degrees">47°</p>
            <div className="description">
                <p id="description">Partly Cloudy</p>
            </div>
            <div className="high-and-low">
                <p id="high-and-low">H:67° L:47°</p>
            </div>
        </div>
        <HourlyForecast></HourlyForecast>
        <WeeklyForecast></WeeklyForecast>
          <br />
          <br />
      </div>
      <div className="footer">
          <SearchIcon className="search-icon"/>
      </div>
    </div>
  );
}

export default App;
