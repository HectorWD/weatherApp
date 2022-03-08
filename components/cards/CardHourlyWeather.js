import React from 'react';
import moment from 'moment-timezone';
import Image from 'next/image';

const CardHourlyWeather = ({ hourlyWeather, timezone }) => {
  return (
    <div className='
    flex flex-row 
    max-h-1/4  m-2 lg:justify-around lg:items-center
    overflow-auto
    bg-slate-600'>
      {hourlyWeather.length > 0 &&
        hourlyWeather.map((weather, index) => (
          <div className='text-center 
          ease-in duration-100
          border-yellow-500 hover:border-t-2'
          key={weather.dt}
          >
            <span
            className='font-semibold text-white'
            >
            {
              index == 0 ? 'Now'
                : moment.unix(weather.dt).tz(timezone).format("LT")
            }
            </span>
            <div className='w-20 h-20 bg-sky-400'>
            <Image
              src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
              alt={`${weather.weather[0].description}`}
              height={100}
              width={100}
            />
            </div>
            <span
            className='font-semibold text-white'
            > {weather.temp.toFixed(0)}&deg;C </span>
          </div>
        ))}
    </div>
  )
}
export default CardHourlyWeather
