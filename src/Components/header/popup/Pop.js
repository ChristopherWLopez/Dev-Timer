import React,{ useState} from 'react'
import Modal from "../modal/Modal.js";

const Pop = ({ isOpen, isClose }) => {

    const [input, setSetUserInput]=useState('');



  return (
    <div>
        <form>
            <input
            type="text"
            value={input}
            onChange={(e)=> setSetUserInput(e.target.value)}
            />
            {input}
        </form>
      
    </div>
  )
}

export default Pop
