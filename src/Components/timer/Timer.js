import React, { useState, useEffect } from 'react'


const Timer = () => {

    const [timeRemaining, setTimeRemaining ] = useState(25*60);
    const [isRunning, setIsRunning]=useState(false);
    const [mode, setMode]= useState("work");

    useEffect(()=>{
        let interval;
        if(isRunning && timeRemaining > 0){
            
        }
    } );
  return (
    <>
        {seconds}
    </>
  );
}

export default Timer
