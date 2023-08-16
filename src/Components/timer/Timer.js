import React, { useState, useEffect } from 'react'


 const Timer = () => {

    const [timeRemaining, setTimeRemaining ] = useState(25*60);
    const [isRunning, setIsRunning]=useState(false);
    const [mode, setMode]= useState("work");


    useEffect(()=>{

        let interval;

        if(isRunning && timeRemaining > 0){
             interval = setInterval(()=>{
                setTimeRemaining(prevTime=> prevTime -1);
            },1000);
        } else if (timeRemaining===0){
            if(mode==="work"){
                setMode("break");
                setTimeRemaining(5*60);
            } else {
                setMode("work");
                setTimeRemaining(25*60);
            }
        }
        return ()=> clearInterval(interval);
    } ,[isRunning, timeRemaining, mode]);

    const startTime =()=>{
        setIsRunning(true);
    }

    const pauseTimer=()=>{
        setIsRunning(false); 
       }

    const resetTimer=()=>{
        setIsRunning(false);
        setMode("work");
        setTimeRemaining(25*60);
    }
  return (
        <div className="pomodoro">
          <div className="timer">
            {Math.floor(timeRemaining / 60)}:{(timeRemaining % 60).toString().padStart(2, "0")}
          </div>
          <div className="mode">{mode === "work" ? "Work" : "Break"}</div>
          <button onClick={startTime}>Start</button>
          <button onClick={pauseTimer}>Pause</button>
          <button onClick={resetTimer}>Reset</button>
        </div>
  );
 }

 export default Timer;