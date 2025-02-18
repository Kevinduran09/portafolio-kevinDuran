import React from 'react'
const EDUCATION = [
    {
        courseName: "Ingenieria en sistemas de información",
        institution: "Universidad Nacional de Costa Rica",
        description: "Carrera universitaria en sistemas de información con enfasis en el desarrollo de software y soluciones tecnologicas.",
        date: "Diciembre, 2025",

    },
    {
        courseName: "Aprende Javascript ES9, HTML, CSS3 y NodeJS desde cero",
        institution: "Udemy",
        description: "Curso online sobre desarrollo de software Frontend y Backend con tecnologías Javascript.",
        date: "2023",
        link: 'https://www.udemy.com/certificate/UC-4b2baa33-3d04-4048-a56e-d96e43fb2a77/'
    },
    {
        courseName: "Mypimes-CEMEDE",
        institution: "CEMEDE",
        description: "Desarrollo de un sistema para la aplicación y realización de cuestionarios personalizados, para CEMEDE Universidad Nacional.",
        date: "2024",

    }
];
const EducationItem = (props) => {

    return (
        <>
            <span className="absolute flex items-center justify-center w-6 h-6 rounded-full -start-3 bg-gray-800">
                <svg className="w-2.5 h-2.5 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                </svg>
            </span>
            <time className="mb-1 text-base font-normal leading-none text-fuchsia-400">{props.date} - {props.institution}</time>
            <h3 className="text-xl font-semibold text-white">{props.courseName}</h3>
            <p className="mb-4 text-lg font-normal text-gray-300">{props.description}</p>
            {props.link && (
                <a href={props.link} target='_blank' className="inline-flex items-center px-4 py-2 text-sm font-medium  rounded-lg   focus:z-10  focus:outline-none  focus:text-blue-700 bg-gray-800 text-fuchsia-400 border-gray-600  hover:bg-gray-700">Conocer más<svg className="w-3 h-3 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                </svg></a>
            )}

        </>
    );
};
export const Experience = () => {
    return (

        <div className="p-5">
            <h2 className='w-full flex justify-center items-center gap-x-3 text-4xl font-semibold mb-4 text-center'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-8 icon icon-tabler icons-tabler-outline icon-tabler-briefcase"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M3 7m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" /><path d="M8 7v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2" /><path d="M12 12l0 .01" /><path d="M3 13a20 20 0 0 0 18 0" /></svg>
                Experiencia
            </h2>
            <div>
                <ol className="relative border-s-2 border-gray-700">
                    {EDUCATION.map((education, index) => (
                        <li className="mb-10 ms-6" key={index}>
                            <EducationItem key={education.courseName} {...education} />
                        </li>
                    ))}


                </ol>


            </div>
        </div>

    )
}
