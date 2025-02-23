import cloudBox from '@/images/cloud-box.webp';
import { TAGS } from './tagsData';
import { Github, Website } from '@/app/utils/icons';
import CEMEDE from '@/images/CEMEDE.webp';
import MOONLIGHT from '@/images/MOONLIGHT.webp'
export const projects = [
    {
        name: 'MYPIMES CEMEDE',
        imageUrl: CEMEDE,
        description: "Aplicación web desarrollado para la unidad académica CEMEDE de la Universidad Nacional de Costa Rica, para la aplicación y elaboración de cuestionarios personalizados para las Pymes del país.",
        tecnologies: [
            TAGS.React, TAGS.NestJS, TAGS.MySQL
        ],
    },
    {
        name: 'Proyecto Remesas Yabi',
        imageUrl: cloudBox,
        description: "Proyecto universitario, Aplicación web para una empresa ficticia denominada Yabi la cual provee y gestiona un servicio de remasas. Permite la gestión de usuarios, vehiculos, empleados, rutas de entrega y visualización de rutas por medio de mapas integrados con leaflet.",
        tecnologies: [
            TAGS.React, TAGS.Laravel, TAGS.SqlServer
        ],
        links: [
            {
                icon: Github,
                nameLink: 'Ver Github',
                url: ''
            },
        ]
    },
    {
        name: 'Moon Light Hotel',
        imageUrl: MOONLIGHT,
        description: "Proyecto universitario, Aplicación web para un Hotel denomidado Moon Light Hotel, permite administrar y gestionar las habitaciones, tipos de habitaciones y reservaciones, desarrollado para el curso de programación.",
        tecnologies: [
            TAGS.Angular, TAGS.Laravel, TAGS.SqlServer
        ],
        links: [
            {
                icon: Github,
                nameLink: 'Ver Github',
                url: 'https://github.com/Kevinduran09/Proyecto_Reservacion_Habitaciones'
            },
        ]
    },
];
