import React, { useState } from 'react';
import axios from 'axios';
import HourlyForecast from './components/HourlyForecast';
import SearchIcon from '@mui/icons-material/Search';
import WeeklyForecast from "./components/WeeklyForecast";


function App() {

  return (
    <div className="App">
      <div className="wrapper">
        <div className="head">
          <div className="city">
              <p>Detroit</p>
          </div>
          <div className="degrees">
              <p className="main-degrees">63° F</p>
          </div>
            <div className="description">
                <p>Partly Cloudy</p>
            </div>
            <div className="high-and-low">
                <p>H:67° L:47°</p>
            </div>
        </div>
        <HourlyForecast></HourlyForecast>
        <WeeklyForecast></WeeklyForecast>
      </div>
      <div className="header">
          <SearchIcon className="search-icon"/>
      </div>
    </div>
  );
}

export default App;
