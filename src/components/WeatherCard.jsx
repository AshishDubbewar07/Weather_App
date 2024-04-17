import React, { useState } from "react";
import clear from "../assets/clear.png";
import cloud from "../assets/cloud.png";
import drizzle from "../assets/drizzle.png";
import humidity from "../assets/humidity.png";
import rain from "../assets/rain.png";
import searchimg from "../assets/search.png";
import snow from "../assets/snow.png";
import wind from "../assets/wind.png";

const WeatherCard = () => {

  const api_key="8ed1b772037c9c98d0d7cafb0c29e8bf"

  let[weatherIcon,setWeatherIcon]=useState(clear)

  const search=async()=>{
     
    const city = document.getElementById('search').value.trim();
    if(city[0].value==="")
    {
      return 0;
    }
    else{
      let url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=Metric&appid=${api_key}`

      let response=await fetch(url)
      let data=await response.json()
      const humidityElement = document.getElementById("humidity");
      const windspeedElement = document.getElementById("windspeed");
      const cityElement = document.getElementById("location");
      const tempElement = document.getElementById("temp");
      humidityElement.innerHTML = data.main.humidity+"%";
        windspeedElement.innerHTML = data.wind.speed+"Km/hr";
        cityElement.innerHTML = data.name;
      tempElement.innerHTML=data.main.temp+"°C";

      if (data.weather[0].icon === "01d" || data.weather[0].icon === "01n") {
        setWeatherIcon(clear);
    } else if (data.weather[0].icon === "02d" || data.weather[0].icon === "02n") {
        setWeatherIcon(cloud);
    } else if (data.weather[0].icon === "03d" || data.weather[0].icon === "03n") {
        setWeatherIcon(drizzle);
    }
    else if(data.weather[0].icon === "04d" || data.weather[0].icon === "04n")
    {
      setWeatherIcon(drizzle)
    }
    else if(data.weather[0].icon === "05d" || data.weather[0].icon === "05n")
    {
      setWeatherIcon(rain)
    }
    else {
        setWeatherIcon(clear);
    }

    }
   
  }


  

  return (
    <div className="h-[550px] bg-blue-300 w-[400px] m-auto mt-14 align-middle bg-gradient-to-b from-sky-500 to-indigo-500 rounded-xl text-white">
      <div className="flex justify-center p-5 gap-2">
        <input
          id="search"
          type="text"
          placeholder="Enter city name"
          className="p-2 rounded-2xl w-[250px] h-12 border-none outline-none pl-6 text-black"
        />
        <div className="flex justify-center items-center w-11 bg-white rounded-xl">
          <img src={searchimg} alt="" className="" onClick={search}/>
        </div>
      </div>
      <div>
        <div className="flex justify-center">
          <img src={weatherIcon} alt="" />
        </div>
        <div className="flex flex-col justify-center items-center mb-7">
          <p className="font-semibold text-4xl"id="temp">24°C</p>
          <p className="font-medium text-4xl" id="location">Nanded</p>
        </div>
        <div className="flex justify-evenly">
          <div className="flex gap-4">
            <img src={humidity} alt="" />
            <div>
              <p id="humidity">64%</p>
              <p> humidityt</p>
            </div>
          </div>
          <div className="flex gap-4">
            <img src={wind} alt="" />
            <div>
              <p id="windspeed">18km/hr</p>
              <p>wind</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
