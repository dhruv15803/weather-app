// Oras - name
import { BrowserRouter as Router,Routes,Route } from "react-router-dom"
import Layout from "./Layouts/Layout"
import Home from "./Pages/Home"
import { useState } from "react";
import Forecasts from "./Pages/Forecasts";
import HourByHour from "./Pages/HourByHour";


function App() {

  const [city,setCity] = useState("");
  const [currentWeatherData,setCurrentWeatherData] = useState([]);
  const [invalidCityMessage,setInvalidCityMessage] = useState("");
  const [isForecast,setIsForecast] = useState(false);
  const [foreCastDays,setForeCastDays] = useState(1);
  const [day,setDay] = useState(0);
  const [isLoading,setIsLoading] = useState(false);
  const [isFetchData,setIsFetchData] = useState(false);

  const fetchWeatherData = async (e)=>{
    e.preventDefault();
    try {
      setIsLoading(true);
      setIsFetchData(true);
      const response = await fetch(`http://api.weatherapi.com/v1/${isForecast ? "forecast":"current"}.json?key=765ea109af1c4e2f9db121152240601&q=${city}&days=${parseInt(foreCastDays) + 1}&aqi=yes`);
      if(response.status!==200){
        setInvalidCityMessage('Please enter a valid city name');
        setIsLoading(false);
        setIsFetchData(false);
        setTimeout(()=>{
          setInvalidCityMessage("");
        },3000)
        return;
      }
      const data = await response.json();
      setCurrentWeatherData(data);
      setIsLoading(false);
    } catch (error) {
      console.log('fetching error:- ',error); 
    }
  }

  

console.log(currentWeatherData);

  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home
          isLoading={isLoading}
           city={city}
           setCity={setCity}
           fetchWeatherData={fetchWeatherData}
           currentWeatherData={currentWeatherData}
           invalidCityMessage={invalidCityMessage}
           isForecast={isForecast}
           setIsForecast={setIsForecast}
           foreCastDays={foreCastDays}
           setForeCastDays={setForeCastDays}
           isFetchData={isFetchData}
          />}/>
          <Route path="forecasts" element={<Forecasts day={day} setDay={setDay} foreCastData={currentWeatherData?.forecast?.forecastday}/>}/>
          <Route path="forecasts/hourly" element={<HourByHour day={day} foreCastData = {currentWeatherData?.forecast?.forecastday}/>}/>
        </Route>
      </Routes>
    </Router>
    </>
  )
}

export default App
