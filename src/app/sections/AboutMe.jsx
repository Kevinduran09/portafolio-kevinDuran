import React from 'react';


const SKILLS = [
    'Trabajo en equipo',
    'Comunicación efectiva',
    'Resolución de problemas',
    'Adaptabilidad',
]
const STACKS = [
    'React',
    'Python',
    'FastAPI',
    'MySQL',
    'NestJS',
    'Java',
    'SQLServer',
]


export default function AboutMe() {
    return (
        <div className="w-full ">

            <h2 className='w-full justify-center flex items-center gap-x-3 text-4xl font-semibold text-center my-5'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-8 icon icon-tabler icons-tabler-outline icon-tabler-code"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" /><path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" /></svg>
                Sobre Mí 
            </h2>

            <div className='px-6'>
                <p className='text-lg  leading-6 mb-4'>
                    Soy Kevin Durán Martínez, estudiante de Ingeniería de software, apasionado por la Tecnologia. <span className='text-fuchsia-500'>Con experiencia en diversas tecnologías y lenguajes de programación.</span> Me gusta aprender y estar en constante crecimiento.
                </p>
                <p className='text-lg  leading-6 mb-4'>
                    Busco siempre nuevos retos y oportunidades para seguir creciendo y aprendiendo. <span className='text-fuchsia-500'>He participado en el desarrollo de software para MYPIMES CEMEDE.</span>
                </p>

                <span className='flex items-center gap-2 mt-6 '>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-brand-tinder"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M18.918 8.174c2.56 4.982 .501 11.656 -5.38 12.626c-7.702 1.687 -12.84 -7.716 -7.054 -13.229c.309 -.305 1.161 -1.095 1.516 -1.349c0 .528 .27 3.475 1 3.167c3 0 4 -4.222 3.587 -7.389c2.7 1.411 4.987 3.376 6.331 6.174z" /></svg>
                    Habilidades Blandas
                </span>

                <ul className='flex flex-row flex-wrap gap-5 py-4'>
                    {SKILLS.map((skill, index) => (
                        <li key={skill} className='flex items-center gap-2 px-3 py-1.5  bg-gray-800 rounded-full'>
                            <span className='text-sm font-medium text-gray-300'>{skill}</span>
                        </li>
                    ))}

                </ul>
                <span className='flex items-center gap-2 mt-6 '>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-world-code"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M20.942 13.02a9 9 0 1 0 -9.47 7.964" /><path d="M3.6 9h16.8" /><path d="M3.6 15h9.9" /><path d="M11.5 3a17 17 0 0 0 0 18" /><path d="M12.5 3c2 3.206 2.837 6.913 2.508 10.537" /><path d="M20 21l2 -2l-2 -2" /><path d="M17 17l-2 2l2 2" /></svg>
                    Tecnologias
                </span>
                <ul className='flex flex-row flex-wrap gap-5 py-4'>
                    {STACKS.map((stack, index) => (
                        <li key={stack} className='flex items-center gap-2 px-3 py-1.5  bg-gray-800 rounded-full'>
                            <span className='text-sm font-medium text-gray-300'>{stack}</span>
                        </li>
                    ))}

                </ul>
            </div>






        </div>
    );
}
