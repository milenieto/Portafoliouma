import React from 'react'
import { FaEnvelope, FaMapMarkedAlt, FaPhone } from 'react-icons/fa'

const Contact = () => {
  return (
    <div className="bg-white text-black py-10" id="contact">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">Contactame</h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <div className="flex-1">
            <h3 className='text-3xl font-bold text-wg bg-clip-text bg-gradient-to-t from-pink-200 to-pink-200'>Hablemos!</h3>
            <p className= 'text-black '>Si necesitas ayuda respecto una mejor planificación y organización con tus diseños, contactame</p>
            <div className='mb-4 mt-8'>
                <FaEnvelope className='inline-block text-pink-200 mr-2'></FaEnvelope>
                <a href="mailto: lubattiuma@gmail.com" className='hover:underline text-blue'>
                   mlubattiuma9@gmail.com
                </a>
            </div>
            <div className='mb-4'>
                <FaPhone className='inline-block text-pink-200 mr-2'></FaPhone>
                <span className='text-blue'>3541522909</span>
            </div>
            <div className='mb-4'>
                <FaMapMarkedAlt className='inline-block text-pink-200 mr-2'></FaMapMarkedAlt>
                <span className='text-blue'>Gob peña 98, Villa Carlos Paz, Argentina </span>
            </div>
          </div>
          <div className='flex-1 w-full'>
            <form className='space-y-4'>
                <div>
                    <label htmlFor="name" className='block mb-2'>Nombre y Apellido</label>
                    <input type="text" 
                    className='w-full p-2 rounded bg-gray-200 border border-gray-600 focus:outline-none
                    focus:border-pink-400 text-gray-800'
                    placeholder='Ingresa tu nombre'/>
                </div>
                <div>
                    <label htmlFor="emial" className='block mb-2'>Mail</label>
                    <input type="text" 
                    className='w-full p-2 rounded bg-gray-200 border border-gray-600 focus:outline-none
                    focus:border-pink-200 text-gray-800' 
                    placeholder='Ingresa tu Mail'/>
                </div>
                <div>
                    <label htmlFor="message" className='block mb-2'>Comentario</label>
                    <textarea type="text" 
                    className='w-full p-2 rounded bg-gray-200 border border-gray-600 focus:outline-none
                    focus:border-pink-200 text-gray-800'
                    rows="5"
                    placeholder='Ingresa tu comentario'/>
                </div>
                <button className='bg-gradient-to-t from-pink-200 to-pink-300 text-white hidden md:inline
            transform transition-transform duration-300 hover:scale-105 px-8 py-2 rounded-full'>Enviar</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact