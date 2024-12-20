import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react';
import { ApiContext } from '../context/ApiContext';

const HomePage = () => {
    //Programatically navigation
    console.log(useContext(ApiContext))
  const navigate = useNavigate();
function handleClick(){
  navigate('/about')
}
  return (
    <div>
      <h1 className='text-center text-4xl font-semibold'>Homepage</h1>
      <button onClick={handleClick} className='px-8 py-2 border-black bg-slate-900 text-white rounded-lg mx-5 my-5'>
        Go to about page
      </button>
    </div>

  )
}

export default HomePage