'use client'

import Image from 'next/image'
import React from 'react'
import ProfileImage from '@/images/ProfileImage.webp'
import { Github, LinkedIn, Threads, Mail } from '../utils/icons';
import SocialMediaItem from '../components/SocialMediaItem'

export const Hero = () => {
  return (
    <div className='flex flex-col justify-normal md:flex-row items-center  md:justify-center '>
      <div
        className="relative w-[298px] h-[298px] xl:w-[398px] xl:h-[398px] md:mr-8 mb-8 md:mb-0 "
      >
        <Image
          priority
          fill
          src={ProfileImage}
          alt="Imagen de perfil"
          className='object-contain rounded-full'
        />
      </div>

      <div className="text-center md:text-left" >
        <h1 className="font-bold text-5xl sm:text-6xl mb-3 tracking-tight text-gray-800 dark:text-white block">
          Hola
        </h1>
        <h2 className='font-bold text-4xl sm:text-5xl mb-3 tracking-tight text-gray-800 dark:text-white block'>
          Soy
          <span className="text-fuchsia-600"> Kevin Durán</span>
        </h2>

        {/* content social media and contact button */}
        <div className='flex flex-row py-2 mt-6 items-center gap-5 justify-between'>
          {/* Icons social medias */}
          <div className='flex flex-row gap-3 items-center'>
            <SocialMediaItem href={'https://github.com/Kevinduran09'}  >
              <Github className='size-3 xl:size-6' />
              <span>GitHub</span>
            </SocialMediaItem>
            <SocialMediaItem href={'https://www.linkedin.com/in/kevin-durán-martínez-1b6868151/'} >
              <LinkedIn className='size-3 xl:size-6' />
              <span>LinkedIn</span>
            </SocialMediaItem>
            {/* <SocialMediaItem href={'https://www.threads.net/@ardm_kv?hl=es-la'}  >
              <Threads className='size-6' />
              <span>Threads</span>
            </SocialMediaItem> */}
            <SocialMediaItem href={'mailto:kevinduran.net.123@gmail.com'} className={' !bg-fuchsia-700'} >
              <span>Contactame</span>
              <Mail className="size-6" />
            </SocialMediaItem>
          </div>

        </div>
      </div>
    </div>
  )
}

