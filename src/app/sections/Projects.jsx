
import '@/app/styles/Projects.css'
import { ProjectCard } from '../components/ProjectCard';
import { data } from '../data/data';


export const Projects = () => {
    const { projects } = data;
    return (
        <div className="p-2">
            <h2 className="w-full justify-center flex items-center gap-x-3 text-4xl font-semibold text-center my-5 ">
                <svg xmlns="http://www.w3.org/2000/svg" className='size-8 icon icon-tabler icons-tabler-outline icon-tabler-code' width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M7 8l-4 4l4 4" /><path d="M17 8l4 4l-4 4" /><path d="M14 4l-4 16" /></svg>
                Proyectos
            </h2>
            <div className="projects">
                {projects.map((project, index) => (
                    <ProjectCard key={project.name} project={project} />
                ))}
            </div>
            <div className="w'ful flex justify-center items-center p-3">
                <a href="https://github.com/Kevinduran09" className=" hover:text-fuchsia-500 ">Ver más proyectos</a>
            </div>
        </div>
    )
}
