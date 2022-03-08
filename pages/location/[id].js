import Head from 'next/head'
import Link from 'next/link'
import CardTodayWeather from '../../components/cards/CardTodayWeather'
import cities from '../../lib/city.list.json'
import moment from 'moment-timezone'
import CardHourlyWeather from '../../components/cards/CardHourlyWeather'
import CardWeekWeather from '../../components/cards/CardWeekWeather'
import InputSearch from '../../components/inputs/InputSearch'

const City = ({ city, dailyWeather, hourlyWeather,timezone }) => {
    return (
        <div className='flex flex-col'>
            <Head>
                <title> {city.name} - Weather App </title>
            </Head>
            <InputSearch anotherSearch={false} />
            <CardTodayWeather city={city} wheater={dailyWeather[0]} timezone={timezone} />
            <CardHourlyWeather hourlyWeather={hourlyWeather} timezone={timezone}/>
            <CardWeekWeather daily={dailyWeather} timezone={timezone} />
        </div>
    )
}
export default City

//helper para optener datos legibles de horario
const getHourlyWeather = (hourlyData,timezone) => {
    const endOfDay= moment().tz(timezone).endOf('day').valueOf();
    const eodTimeStamp= Math.floor(endOfDay/1000);
    //Extraemos los datos de current todayData
    const todayData = hourlyData.filter((data) => data.dt < eodTimeStamp);
    return todayData;
}

export async function getServerSideProps({ params }) {
    try {
        const data = cities.find(city => city.id.toString() === params.id)
        if (!data) {
            return {
                notFound: true
            };
        }
        const res = await fetch(`http://api.openweathermap.org/data/2.5/onecall?lat=${data.coord.lat}&lon=${data.coord.lon}&appid=${process.env.API_KEY}&units=metric&exclude=minutely`);
        const info = await res.json();
        const hourlyWeather = getHourlyWeather(info.hourly,info.timezone);
        return {
            props: {
                city: data,
                timezone:info.timezone,
                currentWeather: info.current,
                dailyWeather: info.daily,
                hourlyWeather: hourlyWeather
            }
        }

    } catch (error) {
        console.log(error)
    }

}