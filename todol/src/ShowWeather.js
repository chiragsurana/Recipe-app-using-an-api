import React, { Children } from 'react';
import Weather from './Weather';

 const ShowWeather = ({show}) => {
   
   
   console.log(show)
    return (
       
        (typeof show.main !="undefined")?(
            <>
            <div className="head">
            <div className="top">
        <h1>City : {show.name}</h1> 
       <p>The temperature is {Math.floor(show.main.temp-273)}</p>
       </div>
       <div className="mid">
      <p> feels_like:  {Math.floor(show.main.feels_like-273)}</p>
<p> humidity:   {show.main.humidity}</p>
<p>pressure:  {show.main.pressure} </p>
<p> temp_max:   {Math.floor(show.main.temp_max-273)}</p>
<p>temp_min:   {Math.floor(show.main.temp_min-273)}</p>
       </div>
       
       
       </div>
       </>
        ):('')
        
    )
}

export default ShowWeather
