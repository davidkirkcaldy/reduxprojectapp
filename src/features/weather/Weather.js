/*
 *   Copyright (c) 2025 David Kirkcaldy
 *   All rights reserved.
 */
import React, { useEffect }  from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchWeather, selectWeather } from "./weatherSlice.js"; 
import './weather.css';

const Weather = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchWeather());

    }, [dispatch]);

    const weather = useSelector(selectWeather);
    
    return (
        <header className="weather-header">
            <div className="weather-text">
                <h2>{weather.temperature}°C</h2>
                <h3>{weather.description}</h3>
            </div>
            <img className="weather-icon" src={weather.iconUrl} alt={weather.description} />
        </header>
    )
}

export default Weather;
