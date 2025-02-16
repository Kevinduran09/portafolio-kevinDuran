'use client'
import { useState, useEffect } from 'react';

const navItems = [
   
    {
        name: 'Proyectos',
        label: 'projects',
        url: '#projects'
    },
    {
        name: 'Sobre mi',
        label: 'aboutme',
        url: '#aboutme'
    },
    {
        name: 'Experience',
        label: 'experience',
        url: '#experience'
    },
    {
        name: 'Contacto',
        label: 'contact',
        url: '#contact'
    }
]


export const Header = () => {
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [activeSection, setActiveSection] = useState('');
    

    useEffect(() => {
        const hanleSectionScroll = ()=>{
            const sections = document.querySelectorAll('section');
            const navItems = document.querySelectorAll('nav ul li a');

            
            
            const callback= (entries)=>{
                
                entries.forEach((entry)=>{
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id)
                        console.log(entry);

                    }
                })
                
            }

            const observer = new IntersectionObserver(callback,{
                root:null,
                rootMargin:'0px',
                threshold:0.6
            })

            sections.forEach((section)=>observer.observe(section))
            

            return ()=>observer.disconnect()
        }
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > lastScrollY && currentScrollY > 50) {
                console.log('fdslfdl');


                setIsVisible(false);
            } else {

                setIsVisible(true);
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll);
        hanleSectionScroll();
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollY]);

    return (

        <header className={`py-4 flex justify-center  items-center fixed top-0 left-0 z-[100] w-full ransition-transform duration-300 ease-in-out  ${isVisible ? 'translate-y-0' : '-translate-y-full '} `}

        >
            <nav>
                <ul className="bg-[#413f3fec] flex gap-4 rounded-full py-1 px-2">
                    {
                        navItems.map((item)=>(
                            <li key={item.name}>
                                <a href={item.url} className={`text-lg sm:text-1xl hover:text-violet-800 hover:underline duration-500 ease-in-out ${activeSection == item.label ? 'text-violet-800 font-bold' : 'text-white'}`}
                                
                                >{item.name}</a>
                            </li>
                        ))
                    }
                    
                </ul>
            </nav>
        </header>

    )
}
