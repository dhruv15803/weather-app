import React from 'react'
import HeroImg from '../Images/HeroImg.png';
import WeatherCard from '../Components/WeatherCard';
import { Link } from 'react-router-dom';
import Loader from '../Components/Loader';

// city={city} setCity={setCity} fetchWeatherData={fetchWeatherData} currentWeatherData={currentWeatherData}

const Home = ({city,setCity,fetchWeatherData,currentWeatherData,invalidCityMessage,isForecast,setIsForecast,foreCastDays,setForeCastDays,isLoading,isFetchData}) => {
    let days = [1,2,3,4,5,6,7,8,9,10];
  return (
    <>
    {isFetchData===false ? <div className='flex justify-center items-center flex-col transition ease-in-out'>
        <img src={HeroImg} className='h-64' alt="hero-image"/>
        <div className='text-center text-lg p-3 font-bold '>
            <p>Oras is a real time weather app for instant weather conditions,forecasts,tidal and marine data</p>
        </div>
    </div> : <>
        {isLoading ? <>
        <div className='my-2 flex justify-center'>
        <Loader/>
        </div>
        
        </> : <WeatherCard currentWeatherData={currentWeatherData}/> }
    </>}
    <form onSubmit={(e)=>fetchWeatherData(e)} className='flex flex-col items-center gap-4 p-2'>
        <input value={city} onChange={(e)=>setCity(e.target.value)} className='border-2 rounded-lg p-2' type="text" name="city" id="city" placeholder='Enter a place/city'/>
        <div className='flex items-center gap-1'>
            <input checked={isForecast} onChange={(e)=>setIsForecast(e.target.checked)} type="checkbox" name="forecast" id="forecast"/>
            <p>Get forecast</p>
        </div>
        {isForecast ? <select className='border-2 rounded-lg p-2' value={foreCastDays} onChange={(e)=>setForeCastDays(e.target.value)}>
            {days.map((item,i)=>{
                return <option key={i} value={item}>{item}</option>
            })}
        </select> : null}
        <p className='text-red-500'>{invalidCityMessage}</p>
        <div className='flex items-center my-2 gap-4'>
            <button className='bg-blue-500 text-white rounded-lg p-2'>Submit</button>
            {currentWeatherData.forecast!=null && <Link to="/forecasts"><button className='bg-blue-500 text-white rounded-lg p-2' >Forecast</button></Link>}
        </div>
    </form> 
    </>
  )
}

export default Home