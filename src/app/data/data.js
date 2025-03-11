import { TAGS } from "./tagsData";

export const data = {
    Personal_Information: {
        "name": "Kevin Durán",
        "titles": [
            "Desarrollador de software'",
            "Ingeniero en sistemas"
        ],
        "email": "kduran.091001@gmail.com",
        "github": "https://github.com/Kevinduran09'",
        "linkedin": "https://www.linkedin.com/in/kevin-durán-martínez-1b6868151/"
    },
    projects: [
        {
            "name": "MYPIMES CEMEDE",
            "imageUrl": "/CEMEDE.webp",
            "description": "Proyecto realizado para la organizacion CEMEDE, el cual soluciona la necesidad de una aplicación web para la gestión de las MYPIMES.",
            technologies: [TAGS.React, TAGS.NestJS, TAGS.MySQL],
            demo: "",
            github: ""
        },
        {
            name: 'Proyecto Remesas Yabi',
            imageUrl: "/MOONLIGHT.webp",
            description: "Yabi es una aplicación para gestionar personal, clientes, equipo de transporte y rutas de entrega en empresas de remesas, optimizando la logística y garantizando un servicio eficiente y puntual.",
            technologies: [
                TAGS.React, TAGS.Laravel, TAGS.SqlServer
            ],
            demo: "",
            github: "https://github.com/Kevinduran09/RemesasYabi"
        },
        {
            name: 'Moon Light Hotel',
            imageUrl: "/MOONLIGHT.webp",
            description: "Proyecto universitario, Aplicación web para un Hotel denomidado Moon Light Hotel, permite administrar y gestionar las habitaciones, tipos de habitaciones y reservaciones, desarrollado para el curso de programación.",
            technologies: [
                TAGS.Angular, TAGS.Laravel, TAGS.SqlServer
            ],
           
            github: 'https://github.com/Kevinduran09/Proyecto_Reservacion_Habitaciones'
        },

    ],
    habilities:[
        'Trabajo en equipo',
        "Resolución de problemas",
        "Adaptabilidad",
     
    ],
    technologies:[
        "Python",
        "FastAPI",
        "React",
        "Javascript",
        "Java",
        "SQL",
        "Git",
        "Docker"
    ],
    experience: [
        {
            courseName: "Ingenieria en sistemas de información",
            institution: "Universidad Nacional de Costa Rica",
            description: "Carrera universitaria en sistemas de información con enfasis en el desarrollo de software y soluciones tecnologicas.",
            date: "Diciembre, 2025",
        },
        {
            courseName: "Aprende Javascript ES9, HTML, CSS3 y NodeJS desde cero",
            institution: "Udemy",
            description: "Curso online sobre desarrollo de software Frontend y Backend con tecnologías Javascript.",
            date: "2023",
            certificate: 'Certificado Aprende Javascript ES9, HTML, CSS3 y NodeJS desde cero.jpg'
        },
        {
            courseName: "Mypimes-CEMEDE",
            institution: "CEMEDE",
            description: "Desarrollo de un sistema para la aplicación y realización de cuestionarios personalizados, para CEMEDE Universidad Nacional.",
            date: "2024",
        }
    ]

}