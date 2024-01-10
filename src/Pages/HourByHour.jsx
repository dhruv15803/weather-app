import React, { useState } from 'react'
import { FaLessThan } from 'react-icons/fa';
import { FaGreaterThan } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const HourByHour = ({foreCastData,day}) => {
    const [hourIndex,setHourIndex] = useState(0);
    const [isCelsius , setIsCelsius] = useState(true);
    let hour_by_hour = foreCastData[day].hour[hourIndex];
    let d = new Date(foreCastData[day].date);
    let f = d.getDay();

    const dayObj = {
        0:"Sunday",
        1:"Monday",
        2:"Tuesday",
        3:"Wednesday",
        4:"Thursday",
        5:"Friday",
        6:"Saturday",
    }

  return (
    <>
    <Link relative='path' to='..'><button className='text-blue-500 text-lg mx-2 my-2'>Go back to average day by day data</button></Link>
    <div className='flex p-4 m-2 rounded-lg shadow-lg'>
        <div className='flex flex-col w-1/2'>
            <div className='flex gap-1 items-center'>
                <p className='text-3xl font-bold'>{isCelsius ? hour_by_hour.temp_c: hour_by_hour.temp_f}</p>
                <button onClick={()=>setIsCelsius(true)} className={isCelsius ? 'text-lg': "text-lg opacity-50"}>°C</button>
                <p>|</p>
                <button onClick={()=>setIsCelsius(false)} className={isCelsius ? 'text-lg opacity-50' : 'text-lg'}>°F</button>
            </div>
            <div className='flex items-center my-2'>
                <img className='w-12' src={hour_by_hour.condition.icon} alt="weather-icon" />
                <p className='text-md'>{hour_by_hour.condition.text}</p>
            </div>
            <div className='flex flex-col'>
                <p>Humidity: {hour_by_hour.humidity} %</p>
                <p>Wind: {hour_by_hour.wind_kph} kph ({hour_by_hour.wind_dir})</p>
                <p>Pressure: {hour_by_hour.pressure_in} inches</p>
                <p>Precipitation: {hour_by_hour.precip_in} inches</p>
            </div>
        </div>
        <div className='flex flex-col w-1/2'>
            <p className='text-xl font-bold'>{hour_by_hour.time}</p>
            <p className='text-xl'>{dayObj[f]}</p>
            <p className='text-xl my-2'>Feels like {isCelsius ? hour_by_hour.feelslike_c + "°C" :  hour_by_hour.feelslike_f + "°F"}</p>
            <p>Dew point: {isCelsius ? hour_by_hour.dewpoint_c + "°C" : hour_by_hour.dewpoint_f + "°F"}</p>
            <p>Visibility : {hour_by_hour.vis_km} km</p>
            <p>Chance of rain : {hour_by_hour.chance_of_rain} %</p>
            <p>Chance of snow : {hour_by_hour.chance_of_snow} %</p>
        </div>
    </div>
    <div className='flex justify-center my-2 gap-2'>
        <button onClick={()=>setHourIndex(prev=>prev-1)} disabled={hourIndex===0} className='disabled:opacity-50'><FaLessThan/></button>
        <button onClick={()=>setHourIndex(prev=>prev+1)} disabled={hourIndex===23} className='disabled:opacity-50'><FaGreaterThan/></button>
    </div>
    </>
  )
}

export default HourByHour