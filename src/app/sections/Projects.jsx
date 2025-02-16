"use client";

import Image from "next/image"
import '@/app/styles/Projects.css'
import cloudBox from '@/images/cloud-box.webp';
// import { projects } from '@/mucks/projects';


import { FastAPI, MySQL, NestJS, Python, React, TailwindCSS, Laravel } from '@/app/utils/icons';
import { Github } from '@/app/utils/icons';
// import { TAGS } from './tags';

export const TAGS = {
  React: {
    name: 'React',
    className: 'bg-[#053f6f]',
    icon: React
  },
  Python: {
    name: 'Python',
    className: 'bg-[#1e293b] text-white py-1 px-2 rounded-md text-sm',
    icon: Python
  },
  TailwindCSS: {
    name: 'Tailwind CSS',
    className: 'bg-[#1e293b] text-white py-1 px-2 rounded-md text-sm',
    icon: TailwindCSS
  },
  FastAPI: {
    name: 'FastAPI',
    className: 'bg-[#1e293b] text-white py-1 px-2 rounded-md text-sm',
    icon: FastAPI
  },
  NestJS: {
    name: 'NestJS',
    className: 'bg-[#831f37] text-white ',
    icon: NestJS
  },
  MySQL: {
    name: 'MySQL',
    className: 'bg-[#066a97] text-white',
    icon: MySQL
  },
  Laravel: {
    name: 'Laravel',
    className: 'bg-[#831f37] text-white',
    icon: Laravel
  },
}

export const projects = [
  {
    name: 'MYPIMES CEMEDE',
    imageUrl: cloudBox,
    description: "Proyecto para la aplicación y realización de cuestionarios personalizados, para la institución CEMEDE de la Universidad Nacional. Desarrollado con tecnologías de vanguardia ",
    tecnologies: [
      TAGS.React, TAGS.NestJS, TAGS.MySQL
    ],
    links: [
      {
        icon: Github,
        nameLink: 'Ver más',
        url: ''
      },
      {
        nameLink: 'Github',
        url: ''
      }]
  },
  {
    name: 'Proyecto Remesas Yabi',
    imageUrl: cloudBox,
    description: "Proyecto de sistema de remesas para la empresa Yabi, desarrollado como un proyecto de curso universitario. Permitia la administración de remesas, clientes, empleados y trasportes. Ademas de visualización rutas en mapa.",
    tecnologies: [
      TAGS.React, TAGS.Laravel, TAGS.MySQL
    ],
    links: [
      {
        icon: Github,
        nameLink: 'Ver más',
        url: ''
      },
      {
        nameLink: 'Github',
        url: ''
      }]
  },

];


const ProjectCard = ({ project }) => {
  return (
    <div className=" flex flex-col md:flex-row gap-4 p-2 rounded-lg ">
      {/* Imagen del proyecto */}
      <div className=" w-full md:w-1/2">
        <picture className='relative group flex flex-col items-center transition duration-500 ease-in-out transform shadow-xl overflow-clip rounded-xl  md:group-hover:shadow-2xl '>
          <Image
            src={cloudBox}
            alt='Imagen del proyecto'
            className='object-cover object-top w-full h-56 transition duration-500 sm:h-full  md:group-hover:scale-105'
          />
          <div className="absolute bottom-0 right-0 m-2 flex flex-row gap-3">
            {project.links?.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#27487b] py-2 px-4 rounded-md text-sm hover:bg-gray-600 hover:scale-105 transition-transform duration-300"
              >
                {link?.icon && (
                  <link.icon className='size-4' />
                )}
                {link.nameLink}
              </a>
            ))}
          </div>
        </picture>
      </div>
 

      <div className=" w-full md:w-1/2 md:max-w-lg gap-5 ">

        <span className="font-semibold text-3xl">{project.name}</span>
        <ul className="technologies mt-3">
          {project.tecnologies.map((Tag) => (
            <li key={Tag.name}>
              <span
                className={`flex items-center gap-x-2 rounded-lg text-sm py-1 px-2 ${Tag.className}`}
              >
                <Tag.icon className='size-4' />
                {Tag.name}
              </span>
            </li>
          ))}
        </ul>
        <p className="text-lg text-justify mt-5 text-gray-700 dark:text-gray-400">{project.description}</p>

      </div>
    </div>
  );
};


export const Projects = () => {
  return (
    <div  className="p-4">
      <div className='w-full flex flex-col items-center'>
        <h2 className="flex items-center mb-6 text-3xl font-semibold gap-x-3 text-black/80 dark:text-white ">
          <svg xmlns="http://www.w3.org/2000/svg" className='size-8 icon icon-tabler icons-tabler-outline icon-tabler-code' width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M7 8l-4 4l4 4" /><path d="M17 8l4 4l-4 4" /><path d="M14 4l-4 16" /></svg>
          Proyectos
        </h2>
      </div>
      <div className="projects">
        {projects.map((project, index) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
      <div className="w'ful flex justify-center items-center p-3">
        <a href="https://github.com/Kevinduran09" className=" hover:text-blue-600">Ver más</a>
      </div>
    </div>
  )
}
