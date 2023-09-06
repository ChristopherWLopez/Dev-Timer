import React from 'react'
import Timer from "../timers/PomodoroTimer/Timer"
import BreakTimer from '../timers/BreakTimer/BreakTimer';
import OpenAI from "../ChatGPT/ChatGPTAPI";
import MyChatComponent from '../ChatGPT/ChatAPI';

//9000000 is about 15 minutes and that is the desired lenght of time you want to work on a task without asking for help

export default function Main () {
        return (  
          <>
            <Timer/>
            <BreakTimer/>
            <OpenAI/>
            <MyChatComponent/>
          </>
  );
}
