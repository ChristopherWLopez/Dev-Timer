import React, { useEffect, useState} from "react";


const BreakTimer = () => {

    

    const [ timeRemaining, setTimeRemaining ] = useState(10*60);
    const [isRunning, setIsRunning] = useState(false);
    const [mode, setMode] = useState("code");

    useEffect(()=>{

        let timeInterval;

        if(isRunning && timeRemaining > 0){
            timeInterval = setTimeRemaining(()=>{

                setIsRunning(prevTime = prevTime -1);
            },1000);
        } else if(timeRemaining===0){
            if(mode==="code"){
                setMode("break");
                setTimeRemaining(60*60);
            }else{
                setMode("code");
                setTimeRemaining(60*60);
            }
        }
        return ()=> clearInterval(timeInterval);
    }, [isRunning, timeRemaining, mode]);


    const startTime=()=>{
        setIsRunning(true);
    }

    const pauseTimer=()=>{
        setIsRunning(false);
    }
    
    const resetTimer=()=>{
        setIsRunning(false);
        setMode("code");
        setTimeRemaining(60*60);
    }

  return (
    <div>
      
    </div>
  )
}

export default BreakTimer
