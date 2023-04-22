import React, { useEffect } from 'react';
import '../css/infoBox.css';
import wind from '../assets/wind.png'

function InfoBox(props) {
    useEffect (() => {
        const titleWrap = document.getElementById("info-title-wrap");
        if (props.name==="WIND") {
            titleWrap.style.backgroundImage = "url('wind.png')";
        }
    })

    return (
        <div className="InfoBox">
            <div id="info-title-wrap">
                <p id="info-title">{props.name}</p>
            </div>
            test
        </div>
    );
}

export default InfoBox;