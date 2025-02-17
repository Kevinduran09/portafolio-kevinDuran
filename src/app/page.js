import Image from "next/image";
import { Hero } from "./sections/Hero";
import { Projects } from "./sections/Projects";
import { Header } from "./sections/Header";

import AboutMe from "./sections/AboutMe";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import { Section } from "./sections/Section";
import { Experience } from "./sections/Experience";
export const metadata = {
  title: 'Portafolio de KEVIN DURAN | Desarrollador y Programador, Costa Rica. ',
  description: 'Estudiante de ingenieria en sistemas, desarrollador y programador, creador de aplicacion y soluciones de software',
}


export default function Home() {


  return (

    <>


      <Section id={'home'} className={'py-16'}>
        <Hero />
      </Section>
      <Section id="projects">
        <Projects />
      </Section>
      <Section id="aboutme" className={'mt-4'} >
        <AboutMe />
      </Section>
      <Section id="experience" className={'mt-4'}>
        <Experience />
      </Section>
    </>
  );
}
