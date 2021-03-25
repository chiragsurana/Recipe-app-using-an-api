import React ,{useEffect} from 'react';
import ShowWeather from './ShowWeather';
import History from './History';
//const apikey ="6c3b404ab5288760baae606c0b0bfedf";
//const basekey ="api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}";
const Weather = ({status,hist,setHist,stats,setStats, weather , setWeather,show,setShow }) => {
    useEffect( ()=> {  
       console.log('clicked'); 
      
        },
     [])
     console.log(status);
   const search=(e)=>{
     e.preventDefault();
console.log(e.target.value);
       fetch(`https://api.openweathermap.org/data/2.5/weather?q=${weather}&appid=6c3b404ab5288760baae606c0b0bfedf`)
  .then(res =>res.json())
  .then(data =>
     {
         setShow(data) ;
      })
      setHist([...hist,weather]);
     console.log(hist);
    
   console.log(weather);
 
    }
 
    return ( 
        <>
        <div className="image">
         
            <form className="form"  >
            <input  className="form-input"type="text" value={weather} onChange={ function(e) {setWeather(e.target.value)}} ></input>
<button  onClick={search} className="form-button"  >click here</button>
</form>

 <ShowWeather show={show} stats={stats}/>
 
</div>
<History status={status} hist={hist} setHist={setHist}/>
 </>
     )}
 

export default Weather;
