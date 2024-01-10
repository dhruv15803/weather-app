import React, { useState } from 'react'
import lowTempIcon from '../Images/low-temperature.png'
import highTempIcon from '../Images/high-temperature.png'
import { FaLessThan } from "react-icons/fa";
import { FaGreaterThan } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Forecasts = ({foreCastData,day,setDay}) => {

    const [isCelsius,setIsCelsius] = useState(true);
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
    <h1 className='text-xl font-bold text-center my-4'>Average day by day data</h1>
    <div className='border-2 flex flex-col items-center p-2 m-4 rounded-lg shadow-xl'>
        <h1>{foreCastData[day].date} {dayObj[f]}</h1>
        <div className='flex items-center w-full p-2'>
            <div className='flex items-center w-1/2 gap-1'>
                <h1 className='text-3xl font-bold'>{isCelsius ? foreCastData[day].day.avgtemp_c : foreCastData[day].day.avgtemp_f}</h1>
                <button onClick={()=>setIsCelsius(true)} className={isCelsius ? 'text-lg' : 'text-lg opacity-50'}>°C</button>
                <p>|</p>
                <button onClick={()=>setIsCelsius(false)} className={isCelsius ? 'text-lg opacity-50':'text-lg'}>°F</button>
            </div>
            <div className='flex flex-col items-center w-1/2'>
                <img className='w-12' src={foreCastData[day].day.condition.icon} alt="weather-icon" />
                <p className='text-md'>{foreCastData[day].day.condition.text}</p>
            </div>
        </div>
        <div className='p-2 flex items-center w-full gap-2'>
            <div className='flex'>
                <img className='w-8' src={lowTempIcon} alt="" />
                <p className='text-lg'>{isCelsius ? foreCastData[day].day.mintemp_c + "°C" : foreCastData[day].day.mintemp_f + "°F" }</p>
            </div>
            <div className='flex'>
                <img className='w-8' src={highTempIcon} alt="" />
                <p className='text-lg'>{isCelsius ? foreCastData[day].day.maxtemp_c + "°C" :foreCastData[day].day.maxtemp_f + "°F" }</p>
            </div>            
        </div>
        {/* humidity,precipitation, wind, chance of rain , chance of snow */}
        <div className='flex flex-col w-full p-2 gap-2'>
            <div className='flex  gap-2'>
              <p>Humidity: {foreCastData[day].day.avghumidity} %</p>
              <p>Precipitation: {foreCastData[day].day.totalprecip_in} inches</p>
            </div>
            <div className='flex gap-2'>
            <p>Max wind: {foreCastData[day].day.maxwind_kph} kph</p>
            <p>visibility: {foreCastData[day].day.avgvis_km} km</p>
            </div>
            <div className='flex gap-2'>
            <p>Chance of rain : {foreCastData[day].day.daily_chance_of_rain} %</p>
            <p>Chance of snow : {foreCastData[day].day.daily_chance_of_snow} %</p>
            </div>
        </div>
        <Link to='hourly'><button className='my-2 p-2 bg-blue-500 text-white rounded-lg'>Click here for hour by hour details</button></Link>
        <div className='flex justify-center my-2 gap-2'>
            <button onClick={()=>setDay(prevDay=>prevDay-1)} disabled={day===0} className='disabled:opacity-50' ><FaLessThan/></button>
            <button onClick={()=>setDay(prevDay=>prevDay+1)} disabled={day === foreCastData.length-1} className='disabled:opacity-50'><FaGreaterThan/></button>
        </div>
    </div>
    </>
  )
}

export default Forecasts