/*eslint-disable*/
import React,{useState} from 'react';
import Weather from './Weather';
import  Contents from './Contents';
import ShowWeather from './ShowWeather';
import './App.css';
 const App=() => {
 const [weather,setWeather]=useState(" ");
 const [show,setShow]=useState({});
 const [stats,setStats]=useState({main:{}});
 const [hist,setHist]=useState([ ]);
 const [status,setStatus]=useState(false);
 console.log(status);
  return (
    <>
     
    <div className="App">
    <div className="content">
             <h1>The weather app</h1>
             <button className="content-button" onClick={function() {setStatus(!status)}}>History</button>
                      </div>
         <div className="weather">
         <Weather status={status} hist ={hist} setHist={setHist}stats={stats} setStats={setStats} weather={weather} setWeather={setWeather} show={show} setShow={setShow} />
    </div>
   
    </div>
 
    </>
  );
  } 

export default App;
