import React from "react";

const services = [
  {
    id: 1,
    title: "Utilización de redes sociales",
    description: "Publicacion de contenidos.",
  },
  {
    id: 2,
    title: "Planificación de diseño de interior",
    description: "Ordenamiento de proyectos y trabajos personales.",
  },
  {
    id: 3,
    title: "Atencion a los clientes y al personal actual",
    description: "Respondo preguntas, y resuelvo inquietudes de la comunidad",
  },

];
const Service = () => {
  return (
    <div className="bg-gradient-to-b from-pink-500 to-pink-500 text-black py-5
    " id="service">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">Mis Servicios</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white px-6 pb-6 rounded-lg hover:shadow-lg transform 
              transition-transform duration-300 hover:scale-105"
            >
              <div
                className="text-right text-2xl font-bold text-transparent bg-clip-text 
              bg-gradient-to-t from-red-700 to-purple-500"
              >
                {service.id}
              </div>
              <h3 className="mt-2 text-2xl font-bold text-transparent bg-clip-text 
              bg-gradient-to-r from-red-700 to-purple-500">
                {service.title}
              </h3>
              <p className="mt-2 text-gray-900">{service.description}</p>
              <a href="#" className="mt-4 inline-block text-blue-500 hover:text-blue-500">Leer mas</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;
