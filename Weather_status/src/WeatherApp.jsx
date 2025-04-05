import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import {useState} from "react";
export default function WeatherApp() {
    const [weatherInfo,setWeatherInfo] =useState({
        city : "New Delhi",
        feelsLike: 9.38,
         humidity: 87,
          temp: 10.05,
        tempMax: 10.05,
         tempMin: 10.05,
        weather: "mist",
         wind: 1.03,
    });

    let updateInfo =(newInfo)=>{
        setWeatherInfo(newInfo);
    }
    return (
        <div style={{textAlign:"center"}}>
            <h2> Weather app by Harsh</h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    );
}