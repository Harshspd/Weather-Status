import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css"
import {useState} from "react";

export default function SearchBox({updateInfo}) {
    let[city,setCity] = useState("");
    let[error,setError] = useState("");

    const API_URL="http://api.openweathermap.org/data/2.5/weather";
    const API_KEY ="186a8aeff6c96d042b1e9a388f5d7f1a";

    let getWeatherInfo = async()=>{
        try{
            let response =  await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let jsonResponse= await response.json();
            let result= {
               city : city,
               temp :jsonResponse.main.temp,
               tempMin :jsonResponse.main.temp_min,
               tempMax :jsonResponse.main.temp_max,
               feelsLike: jsonResponse.main.feels_like,
                weather :jsonResponse.weather[0].description,
                humidity :jsonResponse.main.humidity,
                wind :jsonResponse.wind.speed,
       
               };
                console.log(result);
                return result;
        }catch(err){
           throw err;
        }
      
    };
    
    let handleChange =(event)=>{
        setCity(event.target.value);
    };
     
    let handleSubmit =async(event)=>{
        try{
            event.preventDefault();
        console.log(city);
        setCity("");
       let newinfo= await getWeatherInfo();
       updateInfo(newinfo);
        } catch(err){
            setError("no such place exist in our API");
        }
       
        };

    return(
     <div className="SearchBox">
        
        <form onSubmit={handleSubmit}>
        <TextField id="city" label="City Name" variant="filled" required value={city} onChange={handleChange}/>
       <br></br><br></br>
        <Button variant="contained"type="submit">Search </Button>
        </form>
        </div>
    );
}