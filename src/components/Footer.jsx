import React from "react";
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white text-white py-8">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <div className="flex flex-col md:flex-row md:space-x-12 items-center mb-4">
          <div className="flex-1 mb-4 md:mb-0">
            <h3 className="text-2xl font-bold mb-2">Milena</h3>
            <p className="text-gray-900">
              Estudiante, diseño de interioires y manejo de redes sociales.
            </p>
          </div>
          <div className="flex-1 w-full">
            <form className="flex items-center justify-center">
              <input
                type="email"
                placeholder="Ingresa tu Mail"
                className="w-full p-2 rounded-l-lg bg-black-200 border border-black-600 
                focus:outline-none focus:border-red-400 text-gray-800"
              />
              <button
                type="submit"
                className="bg-gradient-to-t from-pink-100 to-pink-200 to-pink-300 text-black px-4 
                py-2 rounded-r-lg"
              >
                Suscribete
              </button>
            </form>
          </div>
        </div>

        <div
          className="border-t border-gray-600 pt-4 flex flex-col md:flex-row 
          justify-between items-center"
        >
          <p className="text-gray-600">
            &copy; {new Date().getFullYear()} Uma Lubatti. Todos los derechos reservados.
          </p>
          <div className="flex space-x-4 my-4 md:my-0">
            <a href="#" className="text-gray-600 hover:text-white">
              <FaFacebook />
            </a>
            <a href="#" className="text-gray-600 hover:text-white">
              <FaTwitter />
            </a>
            <a href="#" className="text-gray-600 hover:text-white">
              <FaLinkedin />
            </a>
            <a href="#" className="text-gray-600 hover:text-white">
              <FaGithub />
            </a>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-600 hover:text-white">
              Privacidad
            </a>
            <a href="#" className="text-gray-600 hover:text-white">
              Terminos de servicio
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
