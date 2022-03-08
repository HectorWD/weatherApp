import moment from "moment-timezone"
import Image from "next/image"


const CardTodayWeather = ({ city, wheater,timezone }) => {
    return (
        <div
            className="
            grid grid-cols-2
            mx-2 my-2 
            ">
            <div
                className="bg-indigo-500
                            w-full p-4 rounded-l-md "
            >
                <h1
                    className="text-2xl font-medium text-white "
                >
                    {city.name} ({city.country})
                </h1>
                <h2>
                    <span
                        className="text-xl font-semibold text-orange-200 mr-2"
                    >{wheater.temp.max.toFixed(0)}&deg;C</span>
                    <span
                        className="text-xl font-semibold text-cyan-200 mr-2"
                    >{wheater.temp.min.toFixed(0)}&deg;C</span>
                </h2>
                <div className="
                flex flex-row 
                font-semibold text-white mt-2">  
            <div className="mr-2">
                <span>Sunrise</span><br/>
                <span> {moment.unix(wheater.sunrise).tz(timezone).format('LT')} </span>
            </div>
            <div>
                <span>Sunset</span><br/>
                <span> {moment.unix(wheater.sunset).tz(timezone).format('LT')}</span>
            </div>
            
                </div>
            </div>
                <div 
                className="
                bg-indigo-500 w-full pb-8 rounded-r-md
                flex flex-col justify-end items-center">
                    <Image
                    src={`https://openweathermap.org/img/wn/${wheater.weather[0].icon}@2x.png`}
                    alt={'Weather Icon'}
                    width={125}
                    height={125}
                    />
                    <span
                    className="-mt-6 text-lg font-light text-white"
                    >{wheater.weather[0].main} </span>
                </div>
        </div>
    )
}

export default CardTodayWeather

// {`https://openweathermap.org/img/wn/${wheater.weather[0].icon}@2x.png`}
//<span> {wheater.weather[0].main} </span>