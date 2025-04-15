import React from 'react';
import Image from "next/image";
import { Github, Website } from '../utils/icons';
import imagen from '../../../public/CEMEDE.webp'
export const ProjectCard = ({ project }) => {
    return (
        <div className="flex flex-col lg:flex-row gap-5 md:gap-10  rounded-2xl items-center w-full">
            {/* Imagen del proyecto */}
            <div className="w-full md:w-2xl lg:w-1/2">
                <picture className='relative group flex flex-col items-center overflow-clip rounded-2xl md:group-hover:shadow-2xl transition-all duration-500'>
                    <Image
                        src={project.imageUrl}
                        width={400}
                        height={300}
                        alt='Imagen del proyecto'
                        className='object-fill object-top w-full h-full md:h-72 sm:h-96 md:group-hover:scale-105 transition duration-500'
                    />
                    <div className="absolute bottom-0 right-0 m-4 flex flex-row gap-3">
                        {project.github && (
                            <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 bg-[#27487b] py-2 px-4 rounded-md text-sm hover:bg-gray-600 hover:scale-105 transition-transform duration-300"
                            >
                                Github
                                <Github className='size-4' />
                            </a>
                        )}
                        {project.demo && (
                            <a
                                href={project.demo}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 bg-[#27487b] py-2 px-4 rounded-md text-sm hover:bg-gray-600 hover:scale-105 transition-transform duration-300"
                            >
                                Demo
                                <Website className='size-4' />
                            </a>
                        )}
                    </div>
                </picture>
            </div>

            <div className="w-full h-full py-0 md:py-5 md:w-2xl lg:w-1/2 flex flex-col min-h-[320px] space-y-5">
                <h3 className="font-semibold text-4xl">{project.name}</h3>
                <ul className="technologies flex flex-wrap gap-2">
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
                <p className="text-lg text-justify text-gray-300 leading-relaxed">
                    {project.description}
                </p>
            </div>
        </div>
    );
};