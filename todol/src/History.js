import React from 'react'
import Showed from './Showed.js';
const History = ({status,hist,setHist}) => {
    console.log(status);
    console.log(hist);
   
       
         return (
             
     ( status ==true)? ( 
       <>
       <div className="history">
      
     {hist.map((h)=>{
         <Showed h={h}/>
     })}
      
       </div>
       </> 
     ):('') 
     
            )}
 
export default History
