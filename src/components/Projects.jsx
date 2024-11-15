import React from "react";
import employeeMSImage from "../assets/agendas.png";
import employeeMSImagee from "../assets/materiales.png";
import employeeMSImageee from "../assets/cuadernillos.png";

const projects = [
  {
    id: 1,
    name: "Agendas",
    technologies: "Nuevo ingreso",
    image: employeeMSImage,
    github: "https://www.google.com/search?sca_esv=d498be0520164435&rlz=1C1CHZN_esAR953AR953&q=agendas+de+organizacion&udm=2&fbs=AEQNm0CbCVgAZ5mWEJDg6aoPVcBgWizR0-0aFOH11Sb5tlNhd7Qv31WAq-g3XdD7m281OKz6jmaFvSnI39BWMnr9KMXX5W7KHOZZXQLTKaZhjadbUGpNb1ZN07loFgkWd13E9f1QpDOUbeemzAgeJCZuArOGfm627FKqNA6Yp-tqvpRddy9Qzgh4xjxaFlUmy2kzi7k3SBwucJZbriVlLBbkpofE9yK6Tg&sa=X&sqi=2&ved=2ahUKEwiLxoS7i8WJAxWpG7kGHdGoNtkQtKgLegQIEhAB&biw=1278&bih=594&dpr=1.07&safe=active&ssui=on#vhid=E2aHTAPhAfqXMM&vssid=mosaic",
  },
  {
    id: 2,
    name: "Materiales de estudio",
    technologies: "Nuevo ingreso",
    image: employeeMSImagee,
    github: "https://www.google.com/search?q=materiales+de+estudio&sca_esv=d498be0520164435&rlz=1C1CHZN_esAR953AR953&udm=2&biw=1278&bih=594&ei=ZQMqZ922Ct385OUPtNyCqAQ&oq=materiales+de+est&gs_lp=EgNpbWciEW1hdGVyaWFsZXMgZGUgZXN0KgIIADIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgARI3DNQ3wdYyx9wAXgAkAEAmAHGAqABtg2qAQgxMy4zLjAuMbgBA8gBAPgBAZgCEqACjg7CAgoQABiABBhDGIoFwgIGEAAYBxgewgILEAAYgAQYsQMYgwHCAg4QABiABBixAxiDARiKBcICCBAAGIAEGLEDwgINEAAYgAQYsQMYQxiKBZgDAIgGAZIHCDE0LjMuMC4xoAfhWw&sclient=img&safe=active&ssui=on#vhid=ZRv1jQpkmMEDMM&vssid=mosaic",
  },
  {
    id: 3,
    name: "Cuadernillos",
    technologies: "Nuevo ingreso",
    image: employeeMSImageee,
    github: "https://www.google.com/search?q=cuadernillos&sca_esv=d498be0520164435&rlz=1C1CHZN_esAR953AR953&udm=2&biw=1278&bih=594&ei=pAEqZ4zvFNOY5OUP9dS6iAI&ved=0ahUKEwiM0be8i8WJAxVTDLkGHXWqDiEQ4dUDCBA&uact=5&oq=cuadernillos&gs_lp=EgNpbWciDGN1YWRlcm5pbGxvczIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgARIwg5QAFjRDHAAeACQAQCYAV-gAfoHqgECMTK4AQPIAQD4AQGYAgygArYIwgILEAAYgAQYsQMYgwHCAg4QABiABBixAxiDARiKBcICCBAAGIAEGLEDwgIKEAAYgAQYQxiKBcICDRAAGIAEGLEDGEMYigWYAwCSBwQxMC4yoAf_Qw&sclient=img&safe=active&ssui=on#vhid=KtC5X78gg_OuXM&vssid=mosaic",
  },
];

const Projects = () => {
  return (
    <div className="bg-gradient-to-t from-blue-700 to- blue-700 text-black py-20" id="project">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">Mis proyectos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-white p-6 rounded-lg hover:shadow-lg 
            transform transition-transform duration-300 hover:scale-105">
              <img src={project.image} alt={project.name} className="rounded-lg mb-4 
              w-full h-48 object-cover" />
              <h3 className="text-2xl font-bold mb-2 text-gray-900">{project.name}</h3>
              <p className="text-gray-400 mb-4">{project.technologies}</p>
              <a href={project.github} className="inline-block bg-gradient-to-t from-pink-200
               to-pink-200 text-black px-4 py-2 rounded-full" target="_blank" 
              rel="noopener noreferrer">Explorar</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
