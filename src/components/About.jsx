import React from "react";
import AboutImage from '../assets/Uma.png'

const About = () => {
  return (
    <div className="bg-white-400 from-sky-600 to-black-800 text-pink-600 py-5" id="about">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-5">Sobre Mi</h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <img
            src={AboutImage}
            alt=""
            className="w-72 h-80 rounded object-cover mb-8 md:mb-0"
          />
          <div className="flex-1">
            <p className="text-lg mb-5">
              Estoy en mi último año en el Instituto Remedios Escalada de San Martin,
              me gusta mucho el diseño, arte, voy a estdiar la carrera de Arquitectura y a su vez hare un curso de diseño de interiores.
              Soy una persona muy perseverante y crativa, amo las manualidades.
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <label htmlFor="htmlandcss" className="w-4/12">
                  Planificacion
                </label>
                <div className="grow bg-black-100 rounded-full h-2.5">
                  <div
                    className="bg-gradient-to-t from-pink-700 to-blue-500 h-2.5 rounded-full 
                    transform transition-transform duration-300 hover:scale-105 w-10/12"
                  ></div>
                </div>
              </div>
              <div className="flex items-center">
                <label htmlFor="htmlandcss" className="w-4/12">
                Manejo de redes sociales
                </label>
                <div className="grow bg-gray-100 rounded-full h-2.5">
                  <div
                    className="bg-gradient-to-t from-pink-700 to-blue-500 h-2.5 rounded-full 
                    transform transition-transform duration-300 hover:scale-105 w-11/12"
                  ></div>
                </div>
              </div>
              <div className="flex items-center">
                <label htmlFor="htmlandcss" className="w-4/12">
                Diseño de interioires
                </label>
                <div className="grow bg-gray-100 rounded-full h-2.5">
                  <div
                    className="bg-gradient-to-t from-pink-700 to-blue-500  to-blue-500 h-2.5 rounded-full 
                    transform transition-transform duration-300 hover:scale-105 w-9/12"
                  ></div>
                </div>
              </div>
            </div>
            <div className="mt-12 flex justify-between text-center">
                <div>
                    <h3 className="text-2xl font-bold text-transparent bg-clip-text 
                bg-blue-700">
                        +7
                    </h3>
                    <p>Otros empleos</p>
                </div>
                <div>
                    <h3 className="text-2xl font-bold text-transparent bg-clip-text 
                bg-blue-700">
                        +1
                    </h3>
                    <p>Años de experiencia</p>
                </div>
                <div>
                    <h3 className="text-2xl font-bold text-transparent bg-clip-text 
                bg-blue-700">
                        +5
                    </h3>
                    <p>Clientes que utilizaron mi asistencia</p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
