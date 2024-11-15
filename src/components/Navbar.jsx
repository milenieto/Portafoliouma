import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-gradient-to-b from-gray-500 to-slate-500 text-white px-8 md:px-16 lg:px-24'>
        <div className='container py-2 flex justify-center md:justify-between items-center'>
            <div className='text-2xl font-bold hidden md:inline'>Uma</div>
            <div className='space-x-6'>
                <a href="#home" className='hover:text-gray-400'>Incio</a>
                <a href="#about" className='hover:text-gray-400'>Sobre Mi</a>
                <a href="#service" className='hover:text-gray-400'>Servicios</a>
                <a href="#project" className='hover:text-gray-400'>Proyectos</a>
                <a href="#contact" className='hover:text-gray-400'>Contacto</a>
            </div>
            <a className='bg-gradient-to-t from-slate-300 to-slate-200 text-black hidden md:inline
            transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full' href="#contact">Contactame</a>
        </div>
    </nav>
  )
}

export default Navbar