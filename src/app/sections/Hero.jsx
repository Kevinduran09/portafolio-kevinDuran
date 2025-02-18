
import Image from 'next/image'
import React from 'react'
import ProfileImage from '@/images/ProfileImage.webp'
import KevinDuran from '@/images/KevinDuran.webp'
import { Github, LinkedIn, Threads, Mail } from '../utils/icons';
import SocialMediaItem from '../components/SocialMediaItem'
import { TypedText } from '../components/TypedText';

export const Hero = () => {
  return (
    <div className=' md:h-screen flex flex-col justify-normal md:flex-row items-center  md:justify-center '>
      <div
        className="relative w-[298px] h-[298px] xl:w-[398px] xl:h-[398px] md:mr-8 mb-8 md:mb-0 "
      >
        <Image
          priority
          fill
          src={KevinDuran}
          alt="Kevin Durán"
          className='object-contain rounded-full '
        />
      </div>

      <div className="text-center md:text-left flex-1 w-full" >
        <h1 className="font-bold text-5xl sm:text-6xl mb-3 tracking-tight  block">
          Hola
        </h1>
        <h2 className='font-bold text-4xl sm:text-5xl mb-3 tracking-tight  block'>
          Soy
          <span className="text-fuchsia-600"> Kevin Durán</span>
        </h2>
        <TypedText className={'text-4xl sm:text-4xl text-fuchsia-600'} />

        <div className='flex flex-row py-2 mt-6 items-center gap-5 justify-between'>
          <div className='flex flex-row gap-3 items-center'>
            <SocialMediaItem href={'https://github.com/Kevinduran09'}  >
              <Github className='size-3 xl:size-6' />
              <span>GitHub</span>
            </SocialMediaItem>
            <SocialMediaItem href={'https://www.linkedin.com/in/kevin-durán-martínez-1b6868151/'} >
              <LinkedIn className='size-3 xl:size-6' />
              <span>LinkedIn</span>
            </SocialMediaItem>
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

