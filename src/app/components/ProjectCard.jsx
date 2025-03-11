import React from 'react';
import Image from "next/image";
import { Github, Website } from '../utils/icons';
import imagen from '../../../public/CEMEDE.webp'
export const ProjectCard = ({ project }) => {

    return (
        
        
        <div className=" flex flex-col md:flex-row gap-7 p-2 rounded-lg items-center ">
            {/* Imagen del proyecto */}
            <div className=" w-full md:w-1/2">
                <picture className='relative group flex flex-col items-center transition duration-500 ease-in-out transform shadow-xl overflow-clip rounded-xl  md:group-hover:shadow-2xl '>
                    <Image
                        src={project.imageUrl}
                        width={200}
                        height={200}
                        alt='Imagen del proyecto '
                        className='object-cover object-top w-full h-56 transition duration-500 sm:h-60  md:group-hover:scale-105 '
                    />
                    <div className="absolute bottom-0 right-0 m-2 flex flex-row gap-3">
                        {project.github && (
                            <a
                              
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 bg-[#27487b] py-2 px-4 rounded-md text-sm hover:bg-gray-600 hover:scale-105 transition-transform duration-300"
                            >
                                Github
                                <Github className='size-4'/>
                            </a>
                        )}
                        {
                            project.demo && (
                                <a
                                 
                                    href={project.demo}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 bg-[#27487b] py-2 px-4 rounded-md text-sm hover:bg-gray-600 hover:scale-105 transition-transform duration-300"
                                >
                                    Demo
                                    <Website className='size-4'/>
                                </a>
                            )
                        }
                       
                    </div>
                </picture>
            </div>

            <div className="w-full h-full md:w-1/2 md:max-w-lg gap-5">
                <span className="font-semibold text-3xl">{project.name}</span>
                <div className="flex flex-col">
                    <ul className="technologies mt-5">
                        {project.technologies.map((Tag) => (
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
                    <p className="text-lg text-justify mt-5 text-gray-300">{project.description}</p>
                </div>
            </div>
        </div>
    );
};
