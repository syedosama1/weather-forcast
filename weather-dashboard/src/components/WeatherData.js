import React from 'react';

const WeatherData = (props) => {

  const getTime = (timeStamp) => {
    return `${new Date(timeStamp * 1000).getHours()} : ${new Date(
      timeStamp * 1000
    ).getMinutes()}`;
  };

  
  return (
    <div className='weatherData'>
      <div className='currtemp'>
        <div className='tempAndLogo'>
          <div>
            <img src={`https://cdn-icons-png.flaticon.com/512/4440/4440865.png`} width={200} alt='icon'/>
          </div>
          <div>
            {Math.round(props.weatherData.temp_c)}&deg;C
            <p>{props.weatherData.condition.text}</p>
          </div>
        </div>
        <div className='windData'>
            <p>{props.lang?'Wind: ':'हवा: '}<span>{props.weatherData.wind_kph}&nbsp;kph</span></p>
            <p>{props.lang?'Humidity: ':'नमी: '}<span>{props.weatherData.humidity}&nbsp;%</span></p>
            <p>{props.lang?'Pressure: ':'दबाव: '}<span>{props.weatherData.pressure_mb}&nbsp;mb</span></p>
        </div>
      </div>
      <div id='scrolledItem' className='forcastdata'>
        <div>
            <p>{props.lang?'SUNRISE':'सूर्योदय'}</p>
            <img src={'https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/sunrise.svg'} width={100} alt='icon'/>
            <p>{getTime(props.location.localtime_epoch)}</p>
        </div>
        <div>
            <p>{props.lang?'WIND':'हवा'}</p>
            <img src={'https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/wind.svg'} width={100} alt='icon'/>
            <p>{props.weatherData.wind_kph}&nbsp;kph</p>
        </div>
        <div>
            <p>{props.lang?'PRESURE':'दबाव'}</p>
            <img src={'https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/pressure-low.svg'} width={100} alt='icon'/>
            <p>{props.weatherData.pressure_mb}&nbsp;mb</p>
        </div>
        <div>
            <p>{props.lang?'SUNSET':'सूर्यास्त'}</p>
            <img src={'https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/sunset.svg'} width={100} alt='icon'/>
            <p>{getTime(props.location.localtime_epoch)}</p>
        </div>
      </div>
     
    </div>
  )
}

export default WeatherData;
