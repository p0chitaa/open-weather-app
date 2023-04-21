import React from 'react';
import '../css/hourly.css';
import clock from '../assets/clock.png';

function HourlyForecast() {
    return (
        <div className="hourly">
            <div id="title-wrap">
                <p id="title">HOURLY FORECAST</p>
            </div>
            <div id="slider" className="w-full h-[85] overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide">
            <div className="hour">
                testing
            </div>
            <div className="hour">
                testing<br />again
            </div>
            <div className="hour">
                testing<br />again
            </div>
            <div className="hour">
                testing<br />again
            </div>
            <div className="hour">
                testing<br />again
            </div>
            <div className="hour">
                testing<br />again
            </div>
            <div className="hour">
                testing<br />again
            </div>
            <div className="hour">
                testing<br />again
            </div>
            <div className="hour">
                testing<br />again
            </div>
            <div className="hour">
                testing<br />again
            </div>
            <div className="hour">
                testing<br />again
            </div>
            </div>
        </div>
    );
}

export default HourlyForecast;