import React from 'react';

import { ListItem } from '../components/ListItem';
import { data } from '../data/data';

export default function AboutMe() {
    const { habilities, technologies } = data
    return (
        <div className="w-full ">
            <h2 className='w-full justify-center flex items-center gap-x-3 text-4xl font-semibold text-center my-5'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-8 icon icon-tabler icons-tabler-outline icon-tabler-code"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" /><path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" /></svg>
                Sobre Mí 
            </h2>

            <div className='px-6'>
                <p className='text-lg  leading-7 tracking-wider  mb-4'>
                    Soy Kevin Andrey Durán Martínez, estudiante de ingeniería en sistemas de información y desarrollador de software. Apasionado por la tecnología y el desarrollo de soluciones tecnológicas. <span className='text-fuchsia-500'>Siempre en continuo aprendizaje buscando nuevos retos y oportunidades para mejorar mis conocimientos.</span>
                </p>
                <p className='text-lg  leading-7  tracking-wider mb-4'>
                    Cuento con experiencia en diversas tecnologías y herramientas de desarrollo de software que me permiten construir soluciones modernas y solidas. <span className='text-fuchsia-500'>Con experiencia en proyectos reales</span>, he participado en el desarrollo de MYPIMES, una aplicación para la organización CEMEDE que <span className='text-fuchsia-500'>soluciona una problemática ante el control de las pymes dentro del territorio de Costa Rica.  </span>
                </p>
                
                <a
                  
                    className='flex items-center gap-2 p-2 bg-fuchsia-600 hover:bg-fuchsia-700 transition-all !duration-300 ease-in rounded-lg cursor-pointer my-6 w-fit'
                    href='Currículum Vitae CV Kevin Duran.pdf'
                    
                    target='_blank'
                >
                    Descargar CV
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="icon icon-tabler icons-tabler-filled icon-tabler-file-cv"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M12 2l.117 .007a1 1 0 0 1 .876 .876l.007 .117v4l.005 .15a2 2 0 0 0 1.838 1.844l.157 .006h4l.117 .007a1 1 0 0 1 .876 .876l.007 .117v9a3 3 0 0 1 -2.824 2.995l-.176 .005h-10a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-14a3 3 0 0 1 2.824 -2.995l.176 -.005zm-2.5 8a2.5 2.5 0 0 0 -2.5 2.5v3a2.5 2.5 0 1 0 5 0a1 1 0 0 0 -2 0a.5 .5 0 1 1 -1 0v-3a.5 .5 0 1 1 1 0a1 1 0 0 0 2 0a2.5 2.5 0 0 0 -2.5 -2.5m6.743 .03a1 1 0 0 0 -1.213 .727l-.53 2.119l-.53 -2.119a1 1 0 1 0 -1.94 .486l1.5 6c.252 1.01 1.688 1.01 1.94 0l1.5 -6a1 1 0 0 0 -.727 -1.213m-1.244 -7.031l4.001 4.001h-4z" /></svg>
                </a>
                <ListItem 
                    title="Habilidades Blandas" 
                    icon={
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-brand-tinder"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M18.918 8.174c2.56 4.982 .501 11.656 -5.38 12.626c-7.702 1.687 -12.84 -7.716 -7.054 -13.229c.309 -.305 1.161 -1.095 1.516 -1.349c0 .528 .27 3.475 1 3.167c3 0 4 -4.222 3.587 -7.389c2.7 1.411 4.987 3.376 6.331 6.174z" /></svg>
                    } 
                    items={habilities} 
                />

                <ListItem 
                    title="Tecnologias" 
                    icon={
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-world-code"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M20.942 13.02a9 9 0 1 0 -9.47 7.964" /><path d="M3.6 9h16.8" /><path d="M3.6 15h9.9" /><path d="M11.5 3a17 17 0 0 0 0 18" /><path d="M12.5 3c2 3.206 2.837 6.913 2.508 10.537" /><path d="M20 21l2 -2l-2 -2" /><path d="M17 17l-2 2l2 2" /></svg>
                    } 
                    items={technologies} 
                />
            </div>
        </div>
    );
}
