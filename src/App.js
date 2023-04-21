import React, { useState } from 'react';
import axios from 'axios';
import SearchIcon from '@mui/icons-material/Search';


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
        <div className="hourly">
            <div className="hour">
                testing
            </div>
            <div className="hour">
                testing again
            </div>
        </div>
        <div className="forecast">
            <div className="day">
                even more testing!
            </div>
        </div>
      </div>
      <div className="header">
          <SearchIcon />
      </div>
    </div>
  );
}

export default App;
