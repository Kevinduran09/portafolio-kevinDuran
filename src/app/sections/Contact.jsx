'use client'
import React, { useState } from 'react'
import { data } from '../data/data';

export default function Contact() {
  const [tooltipVisible, setTooltipVisible] = useState(false);
  const { Personal_Information } = data
  const emailAdress = Personal_Information.email;

  const copyToClipboard = async () => {

  

    try {
      await navigator.clipboard.writeText(emailAdress);
      setTooltipVisible(true);
      setTimeout(() => setTooltipVisible(false), 2000); 
    } catch (err) {
      console.error("Error al copiar:", err);
    }
  };

  return (
    <div className='mx-3 md:mx-20 '>
      <div className="w-full text-center my-10">
        <span className='text-4xl font-bold'>Si quieres saber mas de mi puedes contactarme!</span>
      </div>
      <div className='flex flex-row gap-3 relative'>
        <div className='bg-gray-300 border-2 border-gray-500 rounded-lg p-2 w-full'>
          <span className='text-gray-950 font-medium'>{emailAdress}</span>
        </div>

        <div className="relative">
          <button
            type='button'
            className='flex items-center gap-2 p-2 bg-fuchsia-600 rounded-lg cursor-pointer transition-all duration-300 ease-in-out hover:-translate-y-1 relative'
            onClick={copyToClipboard}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-copy"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M7 7m0 2.667a2.667 2.667 0 0 1 2.667 -2.667h8.666a2.667 2.667 0 0 1 2.667 2.667v8.666a2.667 2.667 0 0 1 -2.667 2.667h-8.666a2.667 2.667 0 0 1 -2.667 -2.667z" /><path d="M4.012 16.737a2.005 2.005 0 0 1 -1.012 -1.737v-10c0 -1.1 .9 -2 2 -2h10c.75 0 1.158 .385 1.5 1" /></svg>
            Copiar
          </button>


          {tooltipVisible && (
            <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded-md opacity-100 transition-all !duration-700">
              ¡Copiado!
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
