
import Image from 'next/image'
import React from 'react'


import { Github, LinkedIn, Mail } from '../utils/icons';
import SocialMediaItem from '../components/SocialMediaItem'
import { TypedText } from '../components/TypedText';
import { data } from '../data/data';

export const Hero = async () => {

  const { Personal_Information } = data;



  return (
    <div className=' md:h-screen flex flex-col justify-normal md:flex-row items-center  md:justify-center '>
      <div
        className="relative w-[298px] h-[298px] xl:w-[398px] xl:h-[398px] md:mr-8 mb-8 md:mb-0 "
      >
        <Image
          priority
          fill
          src='/kevin_duran.webp'
          alt="Kevin Durán"
          className='object-cover rounded-full'
        />
      </div>

      <div className="text-center md:text-left flex-1 w-full" >
        <h1 className="font-bold text-5xl sm:text-6xl mb-3 tracking-tight  block">
          Hola
        </h1>
        <h2 className='font-bold text-4xl sm:text-5xl mb-3 tracking-tight  block'>
          Soy
          <span className="text-fuchsia-600"> {Personal_Information.name}</span>
        </h2>
        <TypedText className={'text-4xl sm:text-4xl text-fuchsia-600 text-wrap'} datalist={Personal_Information.titles} />

        <div className='flex flex-row py-2 mt-6 items-center gap-5 justify-center md:justify-between'>
          <div className='flex flex-row gap-3 items-center'>
            <SocialMediaItem href={'https://github.com/Kevinduran09'} className={'bg-gray-800  hover:bg-gray-700 '} >
              <Github className='size-3 xl:size-6' />
              <span>GitHub</span>
            </SocialMediaItem>
            <SocialMediaItem href={Personal_Information.linkedin} className={'bg-gray-800  hover:bg-gray-700 '} >
              <LinkedIn className='size-3 xl:size-6' />
              <span>LinkedIn</span>
            </SocialMediaItem>
            <SocialMediaItem href={`mailto:${Personal_Information.email}`} className={'bg-fuchsia-700 hover:bg-fuchsia-600'} >
              <span>Contactame</span>
              <Mail className="size-6" />
            </SocialMediaItem>
          </div>
        </div>
      </div>
    </div>
  )
}

