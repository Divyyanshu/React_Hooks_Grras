import React from 'react'
import { useNavigate } from 'react-router-dom';
import { DataContext } from '../context/DataContext';
import { useContext } from 'react';

const AboutPage = () => {

const {name} = useContext(DataContext);

  const navigate = useNavigate();
  
  function handleClickforHome(){
    navigate('/')
  }
  function handleClickforBack(){
    navigate(-1)
  }
  return (
    <div>
    <h1 className='text-center text-4xl font-semibold'>AboutPage: {name}</h1>
    <button onClick={handleClickforHome} className='px-8 py-2 border-black bg-slate-900 text-white rounded-lg mx-5 my-5'>
      Go to Home page
    </button>
    <button onClick={handleClickforBack} className='px-8 py-2 border-black bg-slate-900 text-white rounded-lg mx-5 my-5'>
      BACK
    </button>
  </div>
  )
}

export default AboutPage