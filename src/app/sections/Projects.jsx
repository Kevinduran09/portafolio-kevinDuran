'use client'

import '@/app/styles/Projects.css'
import { ProjectCard } from '../components/ProjectCard';
import { data } from '../data/data';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules'; // Solo estos módulos

import 'swiper/css';
import 'swiper/css/pagination';

export const Projects = () => {
    const { projects } = data;

    return (
        <div className="p-4 ">
            <h2 className="w-full justify-center flex items-center gap-x-3 text-4xl font-semibold text-center my-6 md:my-12">
                <svg xmlns="http://www.w3.org/2000/svg" className='size-8 icon icon-tabler icons-tabler-outline icon-tabler-code' width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M7 8l-4 4l4 4" /><path d="M17 8l4 4l-4 4" /><path d="M14 4l-4 16" /></svg>
                Proyectos
            </h2>

            <Swiper
            
                modules={[Pagination, Autoplay]}
                spaceBetween={30}
                slidesPerView={1}
            
                autoplay={{ delay: 4000, disableOnInteraction: false }}
                pagination={{ clickable: true }}
                grabCursor={true}
                
                className="mySwipe"
            >
                {projects.sort((a, b) => a.order - b.order).map((project) => (
                    <SwiperSlide key={project.name}>
                        <ProjectCard project={project} />
                    </SwiperSlide>
                ))}
            </Swiper>

            <div className="w-full flex justify-center items-center mt-10">
                <a href="https://github.com/Kevinduran09" className="hover:text-fuchsia-500">Ver más proyectos</a>
            </div>
        </div>
    )
}
