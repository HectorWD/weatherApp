import React from 'react'
import moment from 'moment-timezone'
import Image from 'next/image'

const CardWeekWeather = ({ daily, timezone }) => {
    return (
        <div className='m-2'>
            <span className='ml-2 text-3xl font-semibold'>Weekly 
            <strong className='font-light ml-2'>weather</strong>
            </span>
            <div className='flex flex-col'>
                {daily.length > 0 &&
                    daily.map((weather, index) => (
                        <div className='
                         m-2 p-2 pt-4
                         flex flex-row justify-around items-center
                         bg-slate-500 text-white font-semibold
                         rounded-lg'
                         key={weather.dt}
                         >
                            <div className='flex flex-row'>
                                <div>
                                    <span className='text-xl'> {
                                        index == 0 ? 'Today' :
                                            moment.unix(weather.dt).tz(timezone).format('dddd')
                                    } </span>
                                    <div>
                                        <span className='text-orange-200'> {weather.temp.max}&deg;C </span>
                                        <span className='font-light text-cyan-200'> {weather.temp.min}&deg;C </span>
                                    </div>
                                </div>

                            </div>

                            <div className='flex flex-1  flex-row justify-center '>
                                <div className='pr-2'>
                                    <p>Sunrise</p>
                                    <span>{moment.unix(weather.sunrise).tz(timezone).format('LT')} </span>
                                </div>
                                <div>
                                    <p>Sunset</p>
                                    <span>{moment.unix(weather.sunset).tz(timezone).format('LT')} </span>
                                </div>
                            </div>
                            <div className='flex flex-col'>
                            <div className='w-20 h-16 '>
                                <Image
                                    src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                                    alt={`${weather.weather[0].description}`}
                                    height={100}
                                    width={100}
                                />
                            </div>
                                <p className='w-20 text-sm text-center'> {weather.weather[0].description} </p>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    )
}

export default CardWeekWeather