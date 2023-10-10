import React,{ useState} from 'react'

const Pop = () => {

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
