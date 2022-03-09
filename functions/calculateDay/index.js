import React from 'react';



const calculateDay = (mood) =>{
    
    const CurrHour = new Date().getHours()
    const CurrDay =  new Date().getDate()
    const CurrMonth = new Date().getMonth()
    
    console.log("dia",CurrDay)
    console.log("hora",CurrHour)
    console.log("mes",CurrMonth)
    console.log("mood",mood)
  
  }

export default calculateDay;  