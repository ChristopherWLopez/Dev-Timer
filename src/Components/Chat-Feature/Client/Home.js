import React, { useState } from 'react';
import { useNavigate  } from 'react-router-dom';

const Home=()=>{
    const navigate = useNavigate();
    const [userName, setUserName] = useState('');

    const handleSubmit=(e)=>{
        e.preventDefault();
        localStorage.setItem('useName', userName);
        navigate('/chat');
    };
    return(
        <form className='home_container' onSubmit={handleSubmit}>
            <h2 className='Home_header'>Sign in to the Open Chat</h2>
            <label htmlFor='userName'>Username</label>
            <input
                input='text'
                minLength={6}
                name='username'
                id='username'
                classname='username_input'
                value={userName}
                onChange={(e)=>setUserName(e.target.value)}
                />
                <button className='home_cta'>SIGN IN</button>
        </form>
    );
};

export default Home;