import React, { useEffect, useRef, useState } from 'react';
import searchIcon from './search.svg';
import linkIcon from './external-link.svg';
import WeatherData from './WeatherData';

const WeatherDashboard = () => {
  const inputValue = useRef();
  const [cityName, setCityName] = useState("Noida");
  const [error, setError] = useState(true);
  const [lang, setLang] = useState(true);
  const [weatherData, setWeatherData] = useState({});
  const API_KEY = "3985679892d9444ab06184101230612";

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${cityName}&aqi=yes`);
        const data = await response.json();
        if (response.ok) {
          setWeatherData(data);
          setError(true);
        } else {
          setError(false);
        }
      } catch (error) {
        console.error("Error fetching weather data:", error);
        setError(false);
      }
    };

    fetchWeatherData();
  }, [cityName]);

  const onKeydownHandler = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      setCityName(inputValue.current.value);
    }
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    setCityName(inputValue.current.value);
  };

  return (
    <div className='box'>
      <div className='cityName'>
        {error ? (
          <p>
            {weatherData.location ? `${weatherData.location.name}, ${weatherData.location.country}` : ""}
            {weatherData.location ? (
              <a href={`https://en.wikipedia.org/wiki/${weatherData.location.name}`} target="_blank" rel="noopener noreferrer">
                <img src={linkIcon} alt='link' />
              </a>
            ) : null}
          </p>
        ) : (
          <p className='invalid'>{lang ? 'Invalid City Name' : 'अमान्य शहर का नाम'}</p>
        )}
        <div className='search'>
          <input type='text' ref={inputValue} onKeyDown={onKeydownHandler} placeholder='City Name' />
          <img style={{ cursor: 'pointer' }} onClick={onSubmitHandler} src={searchIcon} alt='searchIcon' />
        </div>
      </div>
      {weatherData.current && (
        <WeatherData
          weatherData={weatherData.current}
          location={weatherData.location}
          lang={lang}
        />
      )}
      <p onClick={() => setLang(!lang)} className='translater'>{lang ? 'Hindi ?' : 'Eng ?'}</p>
    </div>
  );
};

export default WeatherDashboard;
