import React, { useEffect, useState } from "react";
import axios from "axios";

const WeatherWidget = ({ city }) => {
    const [weather, setWeather] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchWeather = async () => {
            try {
                const response = await axios.get(
                    `http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=1d7a9ea91ffe4f1ce9eca62f20cc0226`
                );
                setWeather(response.data);
            } catch (error) {
                console.error(error);
                setError("Failed to fetch weather data."); 
            }
        };

        fetchWeather();
    }, [city]);

    if (error) return <div>Error: {error}</div>;

    if (!weather) return null;

    return (
        <div>
            <h2>Weather in {city}</h2>
            <p>{weather.weather[0].description}</p>
            <p>Temperature: {Math.round(weather.main.temp - 273.15)}°C</p>
        </div>
    );
};

export default WeatherWidget;
