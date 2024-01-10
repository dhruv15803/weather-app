import React, { useState } from 'react'

const WeatherCard = ({currentWeatherData}) => {

    const [isCelsius,setIsCelsius] = useState(true);
    const [isKph,setIsKph] = useState(true);
    const [isInches,setIsInches] = useState(true);

  return (
    <>
    <div className={`flex p-2 border-2 shadow-lg m-2 rounded-xl my-[72px]`}>
        <div className=' w-[50%] flex flex-col'>
            <div className='flex items-center gap-1'>
                <h1 className='text-4xl font-bold' >{isCelsius ? currentWeatherData.current.temp_c : currentWeatherData.current.temp_f}</h1>
                <button onClick={()=>setIsCelsius(true)} className={ isCelsius ? 'text-xl' : 'text-lg opacity-50'}>°C</button>
                <p> | </p>
                <button onClick={()=>setIsCelsius(false)} className={isCelsius ? 'text-xl opacity-50' : 'text-lg'}>°F</button>
            </div>
            <div className='flex items-center'>
                <img className='w-12' src={currentWeatherData.current.condition.icon} alt="condition-icon" />
                <p>{currentWeatherData.current.condition.text}</p>
            </div>
            <div className='flex flex-col gap-2'>
                <p>Humdity : {currentWeatherData.current.humidity} %</p>
                <div className='flex items-center flex-wrap'>
                    <p className='mr-2'>Wind : {isKph ? currentWeatherData.current.wind_kph : currentWeatherData.current.wind_mph}</p>
                    <button onClick={()=>setIsKph(true)} className={isKph ? 'text-lg' : 'text-lg opacity-50'}>kph</button>
                    <p className='mx-1'> | </p>
                    <button onClick={()=>setIsKph(false)} className={isKph ? 'text-lg opacity-50' : 'text-lg'}>mph</button>
                </div>
                <p>Wind direction: {currentWeatherData.current.wind_dir}</p>
                <div className='flex flex-col'>
                    <p>Precipitation({isInches ? "inches" : "mm"}) : </p>
                    <div className='flex items-center gap-2'>
                        <p>{isInches ? currentWeatherData.current.precip_in : currentWeatherData.current.precip_mm}</p>
                        <button onClick={()=>setIsInches(true)} className={isInches ? 'text-lg' : 'text-lg opacity-50'}>in</button>
                        <p>|</p>
                        <button onClick={()=>setIsInches(false)} className={isInches ? 'text-lg opacity-50' : 'text-lg'}>mm</button>
                    </div>
                </div>
            </div>
        </div>
        <div className=' w-[50%] flex flex-col'>
            <div className='flex flex-col my-2'>
                <h1 className='text-xl font-bold'>{currentWeatherData.location.country}</h1>
                <p>{currentWeatherData.location.name}</p>
            </div>
            <p>Local time : {currentWeatherData.location.localtime}</p>
            <p>Feels like {isCelsius ? currentWeatherData.current.feelslike_c + "°C" : currentWeatherData.current.feelslike_f + "°F" }</p>
            <p></p>
        </div>
    </div>
    </>
  )
}

export default WeatherCard