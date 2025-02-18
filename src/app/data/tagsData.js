import { FastAPI, MySQL, NestJS, Python, React, TailwindCSS, Laravel } from '@/app/utils/icons';

export const TAGS = {
    React: {
        name: 'React',
        className: 'bg-[#053f6f]',
        icon: React
    },
    Python: {
        name: 'Python',
        className: 'bg-[#1e293b] text-white py-1 px-2 rounded-md text-sm',
        icon: Python
    },
    TailwindCSS: {
        name: 'Tailwind CSS',
        className: 'bg-[#1e293b] text-white py-1 px-2 rounded-md text-sm',
        icon: TailwindCSS
    },
    FastAPI: {
        name: 'FastAPI',
        className: 'bg-[#1e293b] text-white py-1 px-2 rounded-md text-sm',
        icon: FastAPI
    },
    NestJS: {
        name: 'NestJS',
        className: 'bg-[#831f37] text-white ',
        icon: NestJS
    },
    MySQL: {
        name: 'MySQL',
        className: 'bg-[#066a97] text-white',
        icon: MySQL
    },
    Laravel: {
        name: 'Laravel',
        className: 'bg-[#831f37] text-white',
        icon: Laravel
    },
};
