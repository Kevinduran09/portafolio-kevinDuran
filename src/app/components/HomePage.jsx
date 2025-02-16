'use client'


import Image from 'next/image'
import React from 'react'
import me from '@/images/me.jpg'
import { icons } from '../utils/icons';
import SocialMediaItem from './SocialMediaItem'

export const HomePage = () => {
  return (
    <section className='flex flex-col md:flex-row items-center sm:justify-center justify-center '>
      <Image
        src={me}
        alt="Imagen de perfil"
        className="w-[15rem] h-[15rem] sm:order-first sm:w-[16rem] sm:h-[16rem] md:w-[20rem] md:h-[20rem] lg:w-[24rem] lg:h-[24rem] rounded-full border-white border-2 object-cover md:mr-8 mb-8 md:mb-0"
      />
      <div className="text-center md:text-left">
        <h1 className="font-bold text-5xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-3">
          Hola
        </h1>
        <h2 className='font-bold text-4xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-3'>
          Soy 
          <span className=' text-fuchsia-600'> kevin Durán</span>
        </h2>
        
        {/* <span className="block text-gray-300 text-sm sm:text-base lg:text-lg mt-6 max-w-xl leading-relaxed">
          Estudiante de Ingeniería de Software, apasionado por crear soluciones tecnológicas innovadoras que transforman ideas en realidades. Especializado en el desarrollo de aplicaciones y herramientas prácticas.
        </span> */}
        {/* content social media an contact button */}
        <div className='flex flex-row justify-between py-2 mt-6 items-center gap-5'>
          {/* Icons social medias */}
          <div className='flex flex-row gap-3 items-center'>
            <SocialMediaItem icon={icons.github} href={'https://github.com/Kevinduran09'} />
            <SocialMediaItem icon={icons.linkedin} href={'https://www.linkedin.com/in/andrey-martinez-1b6868151/'} />
            <SocialMediaItem icon={icons.Threals} href={'https://www.threads.net/@ardm_kv?hl=es-la'} />
          </div>
          {/* Contact button */}
          <button className='btn mt-1 bg-fuchsia-600 text-white hover:bg-fuchsia-700 px-2 py-3 rounded-lg flex flex-row items-center gap-2  duration-500 ease-in-out'>
            Contactame
            {icons.mail}
          </button>
        </div>
      </div>
    </section>
  )
}

