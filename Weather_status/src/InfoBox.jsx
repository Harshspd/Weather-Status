import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import UmbrellaIcon from '@mui/icons-material/Umbrella';


export default function InfoBox({info}){
    const INIT_URL = "https://media.istockphoto.com/id/2175083463/photo/new-delhi-delhi-india-fire-truck-spraying-water-over-delhi-streets-amid-pollution-emergency.jpg?s=612x612&w=0&k=20&c=MkS9w1sChN8Bq3oXYo3sPzIWG3jCv1HIdqh90nHzeCY=";
    
    const HOT_URL ="https://plus.unsplash.com/premium_photo-1688804790068-4a0978939cd0?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGhvdCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
    const COLD_URL ="https://images.unsplash.com/photo-1674407866481-a39b2239f771?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
    const RAIN_URL ="https://media.istockphoto.com/id/1257951336/photo/transparent-umbrella-under-rain-against-water-drops-splash-background-rainy-weather-concept.jpg?s=612x612&w=is&k=20&c=GMlTyTFSxiKCiWyDI-NjFFN0RX6Z5yzRbdR3ThuJEyA=";
    return (
        <div className="InfoBox">
         <h1>Weather info -{info.weather}</h1>
         <div className="cardContainer">
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity>80?RAIN_URL:info.temp>15?HOT_URL:COLD_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}{info.humidity>80?<UmbrellaIcon/>:info.temp>15?<WbSunnyIcon/>:<AcUnitIcon/>}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          <p>Temperature ={info.temp}&deg;C</p>
          <p>Humidity ={info.humidity}</p>
          <p>Min Temp ={info.tempMin}</p>
          <p>Max Temp ={info.tempMax}</p>
          <p> The Weather can be described as {info.weather} and feels like {info.feelsLike}&deg;C</p>
          
        </Typography>
      </CardContent>
    </Card>
        </div>
        </div>
    );
}