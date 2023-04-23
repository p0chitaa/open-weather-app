import React, { useState, useEffect } from 'react';
import '../css/infoBox.css';
import wind from '../assets/wind.png'

function InfoBox(props) {
    let icon = "";

    switch (props.name) {
        case "WIND":
            icon = "url('wind.png')";
            break;
        case "FEELS LIKE":
            icon = "url('thermometer.png')";
            break;
        case "HUMIDITY":
            icon = "url('newer-humidity.png')";
            break;
        case "PRESSURE":
            icon = "url('pressure.png')";
        default:
            break;
    }

    return (
        <div className="InfoBox">
            <div id="info-title-wrap" style={{backgroundImage: icon}}>
                <p id="info-title">{props.name}</p>
            </div>
            test
        </div>
    );
}

export default InfoBox;