import Image from "next/image";
import { Hero } from "./sections/Hero";
import { Projects } from "./sections/Projects";
import { Header } from "./sections/Header";

import AboutMe from "./sections/AboutMe";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import { Section } from "./components/Section";
import { Experience } from "./sections/Experience";
export const metadata = {
  title: 'Portafolio de KEVIN DURAN | Desarrollador y Programador, Costa Rica. ',
  description: 'Estudiante de ingenieria en sistemas, desarrollador y programador, creador de aplicacion y soluciones de software',
}


export default function Home() {


  return (

    <>


      <Section id={'home'} className={'pt-20 pb-8 md:py-0 '}>
        <Hero />
      </Section>
      <Section id="projects" className={'lg:max-w-5xl'}>
        <Projects />
      </Section>
      <Section id="aboutme" className={'my-16'} >
        <AboutMe />
      </Section>
      <Section id="experience" className={'my-16'}>
        <Experience />
      </Section>
      <Section id="contact" className={'my-16'}>
        <Contact />
      </Section>
    </>
  );
}
