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
   
]


export const Header = () => {
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [activeSection, setActiveSection] = useState('');
    const [themeToggle, setthemeToggle] = useState('light');

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

            if (currentScrollY > lastScrollY && currentScrollY > 400) {  
                setIsVisible(false);
            } else if (currentScrollY < 400) {
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

        <header className={`py-4 flex justify-center  items-center fixed top-0 left-0 z-[100] w-full duration-1000 ease-in-out  transition-all ${isVisible ? '' :'backdrop-blur-sm bg-black/45 '}`}

        >
            <nav className='flex justify-center items-center'>
                <ul className={`flex gap-4 py-1 px-2`}>
                    {
                        navItems.map((item)=>(
                            <li key={item.name}>
                                <a href={item.url} className={`text-sm sm:text-lg hover:text-violet-800 hover:underline duration-500 ease-in-out ${activeSection == item.label ? 'text-violet-800 font-bold' : 'text-white'}`}
                                
                                >{item.name}</a>
                            </li>
                        ))
                    }
                    
                </ul>
                <button className="ms-2 mt-1" onClick={() => setthemeToggle(themeToggle === 'light' ? 'dark' : 'light')} >
                    {
                        themeToggle === 'light' ?
                        (
                                <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" className="w-5 h-5 iconify iconify--carbon" width="1em" height="1em" viewBox="0 0 32 32"><path fill="currentColor" d="M16 12.005a4 4 0 1 1-4 4a4.005 4.005 0 0 1 4-4m0-2a6 6 0 1 0 6 6a6 6 0 0 0-6-6M5.394 6.813L6.81 5.399l3.505 3.506L8.9 10.319zM2 15.005h5v2H2zm3.394 10.193L8.9 21.692l1.414 1.414l-3.505 3.506zM15 25.005h2v5h-2zm6.687-1.9l1.414-1.414l3.506 3.506l-1.414 1.414zm3.313-8.1h5v2h-5zm-3.313-6.101l3.506-3.506l1.414 1.414l-3.506 3.506zM15 2.005h2v5h-2z"></path></svg>
                        )
                        :
                        (
                                <svg xmlns="http://www.w3.org/2000/svg" width="1rem" height="1rem" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-moon"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z" /></svg>
                        )
                    }
                    
                </button>

            </nav>
        </header>

    )
}
