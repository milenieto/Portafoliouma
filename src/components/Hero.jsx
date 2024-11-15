import React from 'react'
import HeroImage from '../assets/Uma.png'

const Hero = () => {
  return (
    <div className='bg-blue-400 text-white text-center py-16'>
        <img src={HeroImage} alt="" 
        className='mx-auto mb-5 w-48 h-48 rounded-full object-cover transform 
        transition-transform duration-300 hover:scale-105'/>
        <h1 className='text-4xl font-bold text-gray-900'>
            Soy {" "}
            <span className='text-transparent bg-clip-text bg-gradient-to-b from-pink-700 to-pink-600'>Milena Nieto</span>
            -Estudiante
        </h1>
        <p className='mt-4 text-lg text-black'>
            Me perfecciono en Diseño de interioires y redes sociales.
        </p>
        <div className='mt-8 space-x-4'>
            <button
            className='bg-gradient-to-t from-pink-700 to-pink-400 text-white
            transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>Escribime</button>
           
        </div>

    </div>
  )
}

export default Hero