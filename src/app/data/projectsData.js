import cloudBox from '@/images/cloud-box.webp';
import { TAGS } from './tagsData';
import { Github, Website } from '@/app/utils/icons';

export const projects = [
    {
        name: 'MYPIMES CEMEDE',
        imageUrl: cloudBox,
        description: "Proyecto para la aplicación y realización de cuestionarios personalizados, para la institución CEMEDE de la Universidad Nacional. Desarrollado con tecnologías de vanguardia ",
        tecnologies: [
            TAGS.React, TAGS.NestJS, TAGS.MySQL
        ],
    },
    {
        name: 'Proyecto Remesas Yabi',
        imageUrl: cloudBox,
        description: "Proyecto de sistema de remesas para la empresa Yabi, desarrollado como un proyecto de curso universitario. Permite la administración de remesas, clientes, empleados y trasportes. Ademas de visualización rutas en mapa.",
        tecnologies: [
            TAGS.React, TAGS.Laravel, TAGS.MySQL
        ],
        links: [
            {
                icon: Github,
                nameLink: 'Ver Github',
                url: ''
            },
            {
                icon: Website,
                nameLink: 'Live',
                url: ''
            }]
    },
];
