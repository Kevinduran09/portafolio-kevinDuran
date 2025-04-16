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
            order: 2,
            "name": "MYPIMES CEMEDE",
            "imageUrl": "/CEMEDE.webp",
            "description": "Proyecto realizado para la organizacion CEMEDE, el cual soluciona la necesidad de una aplicación web para la gestión de las MYPIMES.",
            technologies: [TAGS.React, TAGS.NestJS, TAGS.MySQL],
            demo: "",
            github: ""
        },
        {
            order: 3,
            name: 'Proyecto Remesas Yabi',
            imageUrl: "/Yabi_captura.webp",
            description: "Yabi es una aplicación para gestionar personal, clientes, equipo de transporte y rutas de entrega en empresas de remesas, optimizando la logística y garantizando un servicio eficiente y puntual.",
            technologies: [
                TAGS.React, TAGS.Laravel, TAGS.SqlServer
            ],
            demo: "",
            github: "https://github.com/Kevinduran09/RemesasYabi"
        },
        {
            order:1,
            name: 'VoluntHub',
            imageUrl: "/VoluntHub-preview.webp",
            description: "VoluntHub es una plataforma de voluntariado, su finalidad es incentivar en la comunidad la participación y colaboración en eventos o proyectos que ayuden a resolver problematicas presentes en la comunidad. En continuo desarrollo.",
            technologies: [
                TAGS.React, TAGS.TailwindCSS
            ],
            demo:'https://volunthub-app.netlify.app/',
            github: 'https://github.com/Kevinduran09/Plataforma-de-Voluntariado-para-Eventos'
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
            order:1,
            title: "Bachillerato en Ingenieria en Sistemas de Información",
            institution: "Universidad Nacional de Costa Rica",
            description: "Grado de bachiller universitaria en la carrera de ingenieria en sistemas de información con enfasis en el desarrollo de software y soluciones tecnologicas.",
            date: "Julio 2024 - Actualmente",
            certificate:''
        },
        {
            order: 2,
            title: "Diplomado en Ingenieria en Sistemas de Información",
            institution: "Universidad Nacional de Costa Rica",
            description: "Grado de diplomado universitaria en la carrera de ingenieria en sistemas de información con enfasis en el desarrollo de software y soluciones tecnologicas.",
            date: "Feb 2021 - Junio 2024",
            certificate:'Certificado diplomado.jpg'
        },
        {
            order: 4,
            title:'Desarrollo de Aplicación Web',
            institution:'Interfrutd Frutas Del Mundo S.A',
            description: 'Participo en el desarrollo de una aplicación web para mejorar la visibilidad digital de la empresa y optimizar el servicio al cliente.La plataforma permite realizar pedidos en línea, compras de productos y registro de nuevos proveedores.',
            date:'Febrero 2024 - Actualmente'
        },
        {
            order: 5,
            title: "Aprende Javascript ES9, HTML, CSS3 y NodeJS desde cero",
            institution: "Udemy",
            description: "Curso online sobre desarrollo de software Frontend y Backend con tecnologías como NodeJS, React, Javascript, HTML y CSS. Impartido por Nicolas Schurmann desarrollador de software y creador de contenido además de instructor en la plataforma de cursos UDEMY.",
            date: "2025",
            certificate: 'Certificado Aprende Javascript ES9, HTML, CSS3 y NodeJS desde cero.jpg'
        },
        {
            order: 3,
            title: "Desarrollo de MYPYMES",
            institution: "Centro Mesoamericano de Desarrollo Sostenible del Trópico seco(CEMEDE)",
            description: "Desarrollé una app web para gestión de pymes, con registro de empresas, formularios personalizados y asignación de usuarios. La solución permite recolectar y visualizar información clave mediante encuestas dinámicas",
            date: "Febrero 2024 - Diciembre 2024",
        }
    ]

}