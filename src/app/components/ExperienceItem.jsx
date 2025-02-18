import React from 'react';

export const ExperienceItem = (props) => {
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
